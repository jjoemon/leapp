"use server";

// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import { clientPromise } from "@/app/lib/mongodb";
import User from "@/app/models/user";
import { findUserByEmailOrPhone, createUser, updateUser } from "@/app/services/authService";
import { verifyOTP, consumeOTP } from "@/app/services/otpService";
import { hashPassword, comparePassword } from "@/app/services/passwordService";

// Ensure mongoose connection (cached)
async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI!);
  }
}

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
    // signOut, error, newUser, etc. can also be customized
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    EmailProvider({
      server: {
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "dudley98@ethereal.email",
          pass: "8n6zU894TgUG2NDDqt",
        },
      },
      from: "joemon.jose@glasgow.ac.uk",
      maxAge: 10 * 60,
    }),

    CredentialsProvider({
      name: "Phone OTP",
      credentials: {
        phone: { label: "Phone", type: "text" },
        code: { label: "Code", type: "text" },
      },
      async authorize(credentials) {
        const { phone, code } = credentials!;
        await connectDB();

        const isValid = await verifyOTP(phone, code);
        if (!isValid) return null;

        await consumeOTP(phone, code);

        let user = await findUserByEmailOrPhone(undefined, phone);
        if (!user) {
          user = await createUser({ phone, authProvider: "phone" });
        }

        return { id: user._id.toString(), phone: user.phone };
      },
    }),

    CredentialsProvider({
      name: "Email + Password",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        gdprConsent: { label: "GDPR Consent", type: "checkbox" },
      },
      async authorize(credentials) {
        const { email, password, gdprConsent } = credentials!;
        await connectDB();

        let user = await findUserByEmailOrPhone(email);

        if (!user) {
          if (!gdprConsent) return null; // require GDPR consent
          const hashed = await hashPassword(password);
          user = await createUser({
            email,
            passwordHash: hashed,
            authProvider: "password",
            gdprConsent: true,
            profileCompleted: false,
          });
        } else {
          const valid = await comparePassword(password, user.passwordHash!);
          if (!valid) return null;
        }

        return { id: user._id.toString(), email: user.email, name: user.name };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      await connectDB();

      if (user.email) {
        let existing = await findUserByEmailOrPhone(user.email);

        if (!existing) {
          existing = await createUser({
            email: user.email,
            name: user.name,
            authProvider: account?.provider || "email",
          });
        } else if (existing.authProvider !== account?.provider) {
          existing.authProvider = `${existing.authProvider}/${account?.provider}`;
          await User.findByIdAndUpdate(existing._id, { authProvider: existing.authProvider });
        }
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user?.id) token.id = user.id;
      return token;
    },

    async session({ session, token }) {
      if (token?.id) session.user.id = token.id;
      return session;
    },
  },
});

export { handler as GET, handler as POST };

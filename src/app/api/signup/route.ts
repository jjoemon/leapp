import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/app/lib/mongodb";
import User from "@/app/models/user";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      if (!existingUser.password) {
        // User exists via social login, allow setting a password
        const hashedPassword = await bcrypt.hash(password, 10);
        existingUser.password = hashedPassword;
        await existingUser.save();
        return NextResponse.json(
          { message: "Password set successfully" },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
      authProvider: "email",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully", id: newUser._id },
      { status: 201 }
    );
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter } from '@/app/ui/fonts';
import HeaderWrapper from '@/app/ui/header-wrapper';
import SideNav from '@/app/ui/sidenav';
import Providers from "@/app/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Big Conversation",
  description: "created by Joemon Jose",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" />
    </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
        <Providers>
          <HeaderWrapper />
          <div className="flex min-h-screen flex-col md:flex-row">
            <aside className="hidden md:block md:w-64 bg-gray-100 p-4">
              <SideNav />
            </aside>
            <main className="flex-1 p-4 sm:p-6">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

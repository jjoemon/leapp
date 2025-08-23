import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter } from '@/app/ui/fonts';
import Header from '@/app/ui/header';
import SideNav from '@/app/ui/sidenav';

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSignedIn = false; // This could later come from auth context

  return (
    <html lang="en">
    <meta       title="The Big Conversation"/>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
        {/* Common Header */}
        <Header
          title="The Big Conversation"
          isSignedIn={isSignedIn}
          onSignOut={() => alert('Signed out!')}
        />

        {/* Common Page Layout: sidebar + main content */}
        <div className="flex min-h-screen flex-col md:flex-row">
          {/* Sidebar visible only on medium+ screens */}
          <aside className="hidden md:block md:w-64 bg-gray-100 p-4">
            <SideNav />
          </aside>

          {/* Page-specific content injected here */}
          <main className="flex-1 p-4 sm:p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

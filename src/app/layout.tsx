import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter } from '@/app/components/ui/fonts';
import HeaderWrapper from '@/app/components/ui/header-wrapper';
import SubHeader from '@/app/components/ui/SubHeader';

import Providers from "@/app/providers";
import ErrorBoundary from "@/app/components/layout/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "gLearn - Games & Learning",
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased flex flex-col min-h-screen`}>
        <Providers>
          <HeaderWrapper />
          <SubHeader />
          <ErrorBoundary>
              <main className="flex-1 flex flex-col justify-start m-0 p-0">{children}</main>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
// flex min-h-screen flex-col justify-startmd:flex-row
// p-4 sm:p-6
// <aside className="hidden md:block md:w-64 bg-gray-100 p-4">
//   <SideNav />
// </aside>

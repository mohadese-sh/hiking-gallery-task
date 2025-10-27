import type { Metadata } from "next";
import "./globals.css";

import React, { ReactNode } from "react";
import Link from "next/link";
import { sansRounded, geistMono } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Hiking Gallery",
  description: "Explore stunning hiking photos from around the world",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sansRounded.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-gray-100 text-gray-900 antialiased min-h-screen">
        <header className="bg-green-600 text-white shadow-md py-4 px-6 flex justify-center sm:flex-row sm:items-center">
          <h1 className="text-2xl font-bold mb-2 sm:mb-0">
            <Link href={"/"}>Hiking Gallery</Link>
          </h1>
        </header>

        <main className="p-1">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

import React, { ReactNode } from "react";
import Link from "next/link";
import { sansRounded, geistMono } from "./fonts/fonts";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Hiking Gallery",
  description: "Explore stunning hiking photos from around the world",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sansRounded.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-gray-50 dark:bg-blue-950 text-blue-950 antialiased min-h-screen">
        <header className="bg-blue-950 dark:bg-gray-50 text-gray-50 dark:text-blue-950 shadow-md py-4 px-6 flex justify-between sm:flex-row sm:items-center gap-x-4">
          <h1 className="text-2xl font-bold mb-2 sm:mb-0">
            <Link href={"/"}>Hiking Gallery</Link>
          </h1>
          <ThemeToggle />
        </header>

        <main className="p-1">{children}</main>
      </body>
    </html>
  );
}

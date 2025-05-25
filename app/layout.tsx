'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import MobileNavBar from "@/components/MobileNavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({children,}: Readonly<{  children: React.ReactNode;}>) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {isMobile ? <MobileNavBar /> : <NavBar />}
        {children}
      </body>
    </html>
  );
}

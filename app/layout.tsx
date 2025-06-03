'use client';

import 'react-tooltip/dist/react-tooltip.css'
import type { Metadata } from "next";
import { IBM_Plex_Mono } from 'next/font/google';
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // include weights you use
  variable: '--font-ibm-plex-mono', // optional for Tailwind
  display: 'swap',
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
      <body className={`${ibmPlexMono.variable} font-mono antialiased`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}

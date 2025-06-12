'use client';

import 'react-tooltip/dist/react-tooltip.css'
import { Analytics } from "@vercel/analytics/next"
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
  
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} font-mono antialiased`}>
        <NavBar/>
        {children}
	<Analytics />
      </body>
    </html>
  );
}

'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaFile, FaBars, FaTimes } from 'react-icons/fa';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function MobileNavBar(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        
        <nav className="fixed w-full h-16 bg-[#1B2021]  text-[#ede0ed] shadow-lg z-50">
            <div className="flex justify-between items-center px-4 h-full">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            {isOpen && (
                <ul className="absolute top-16 -left-0 w-half bg-[#28262C] text-center">
                    <li className="p-2 hover:border-b"><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li className="p-2 hover:border-b"><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li className="p-2 hover:border-b"><Link href="/experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
                    <li className="p-2 hover:border-b"><Link href="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
                    <li className="p-2 hover:border-b"><Link href="/resume.pdf" onClick={() => setIsOpen(false)}>Resume</Link></li>
                    <li className="p-2 hover:border-b"><Link href="https://github.com/Lobbbey" onClick={() => setIsOpen(false)}>Github</Link></li>
                    <li className="p-2 hover:border-b"><Link href="https://www.linkedin.com/in/joshua-tyler-bandy/" onClick={() => setIsOpen(false)}>LinkedIn</Link></li>
                </ul>
            )}
        </nav>

    );
}
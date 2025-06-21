'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaFileLines } from 'react-icons/fa6';

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1B2021] shadow-xl z-50">
      <div className="flex justify-between items-center h-16 px-6 text-[#ede0d4]">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl hover:text-[#c4501b] transition-all duration-300">
            Joshua Bandy
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center space-x-8 text-lg">
          <Link href="/"><li className="hover:border-b hover:text-[#c4501b] transition-all duration-300">Home</li></Link>
          <Link href="/aboutme"><li className="hover:border-b hover:text-[#c4501b] transition-all duration-300">About Me</li></Link>
          <Link href="/projects"><li className="hover:border-b hover:text-[#c4501b] transition-all duration-300">Projects</li></Link>
          <Link href="/resume.pdf" target="_blank">
            <FaFileLines className="text-lg hover:text-[#c4501b] transition-all duration-300" title="Resume" />
          </Link>
          <Link href="https://github.com/Lobbbey" target="_blank">
            <FaGithub className="text-lg hover:text-[#c4501b] transition-all duration-300" title="GitHub" />
          </Link>
          <Link href="https://www.linkedin.com/in/joshua-tyler-bandy/" target="_blank">
            <FaLinkedin className="text-lg hover:text-[#c4501b] transition-all duration-300" title="LinkedIn" />
          </Link>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden z-50" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-[#1B2021] text-[#ede0d4] flex flex-col items-center space-y-4 py-6 text-lg shadow-lg">
          <Link href="/" onClick={() => setNavOpen(false)}>Home</Link>
          <Link href="/aboutme" onClick={() => setNavOpen(false)}>About Me</Link>
          <Link href="/projects" onClick={() => setNavOpen(false)}>Projects</Link>
          <Link href="/resume.pdf" target="_blank" onClick={() => setNavOpen(false)}>Resume</Link>
          <Link href="https://github.com/Lobbbey" target="_blank" onClick={() => setNavOpen(false)}>GitHub</Link>
          <Link href="https://www.linkedin.com/in/joshua-tyler-bandy/" target="_blank" onClick={() => setNavOpen(false)}>LinkedIn</Link>
        </div>
      )}
    </nav>
  );
}


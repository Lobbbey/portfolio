'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaFile } from 'react-icons/fa';

export default function NavBar(){

    return(
        <nav className='Fixed w-full h-10 shadow-xl bg-[#1B2021]'>
            <div className='flex justify-between items-center px-8  text-[#FCF7F8] h-full w-full'>
                <Link href="/">
                    <span className='hover:border-b text-xl'>Joshua Bandy</span>
                </Link>
                <div>
                    <ul className='hidden sm:flex items-center space-x-10'>
                        <Link href="/"><li className='hover:border-b text-lg'>Home</li></Link>
                        <Link href="/aboutme"><li className='hover:border-b text-lg'>About Me</li></Link>
                        <Link href="/projects"><li className='hover:border-b text-lg'>Projects</li></Link>
                        {/*<Link href="/skills"><li className='hover:border-b text-lg'>Skills</li></Link>*/}
                        <Link href="/resume.pdf" target='_blank' className='hover:border-b'>
                            <FaFile className='text-lg' title='Resume'/>
                        </Link>
                        <Link href="https://github.com/Lobbbey" target="_blank" className='hover:border-b'>
                            <FaGithub className='text-lg' title='Github'/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/joshua-tyler-bandy/" target="_blank" className='hover:border-b'>
                            <FaLinkedin className='text-lg' title='LinkedIn'/>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
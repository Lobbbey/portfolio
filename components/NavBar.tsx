'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import {FaFileLines } from 'react-icons/fa6'

export default function NavBar(){

    return(
        <nav className='Fixed w-full h-15 shadow-xl bg-[#1B2021]'>
            <div className='flex justify-between items-center px-8 text-[#ede0d4] h-full w-full'>
                <Link href="/">
                    <span className='hover:border-b transition-all duration-300 hover:text-[#c4501b] text-xl'>Joshua Bandy</span>
                </Link>
                <div>
                    <ul className='hidden sm:flex items-center space-x-10'>
                        <Link href="/"><li className='hover:border-b transition-all duration-300 text-lg hover:text-[#c4501b]'>Home</li></Link>
                        <Link href="/aboutme"><li className='hover:border-b text-lg transition-all duration-300 hover:text-[#c4501b]'>About Me</li></Link>
                        <Link href="/projects"><li className='hover:border-b text-lg  transition-all duration-300 hover:text-[#c4501b]'>Projects</li></Link>
                        <Link href="/resume.pdf" target='_blank' className='transition-all duration-300 hover:text-[#c4501b]'>
                            <FaFileLines className='text-lg transition-all duration-300 hover:text-[#c4501b]' title='Resume'/>
                        </Link>
                        <Link href="https://github.com/Lobbbey" target="_blank" className='transition-all duration-300 hover:text-[#c4501b]'>
                            <FaGithub className='text-lg' title='Github'/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/joshua-tyler-bandy/" target="_blank" className=''>
                            <FaLinkedin className='text-lg transition-all duration-300 hover:text-[#c4501b]' title='LinkedIn'/>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
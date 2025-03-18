'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar(){
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisibile] = useState(0);

    return(
        <>
            <nav className='Fixed w-full h-10 shadow-xl bg-[#28262C]'>
                <div className='flex justify-between items-center px-3  text-[#FCF7F8] h-full w-full'>
                    <Link href="/">Joshua Bandy</Link>
                    <div>
                        <ul className='hidden sm:flex'>
                            <Link href="/">
                                <li>Home</li>
                            </Link>
                            <Link href="/Projects">
                                <li>Projects</li>
                            </Link>
                            <Link href="/Education">
                                <li>Education</li>
                            </Link>
                            <Link href="/Skills">
                                <li>Skills</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
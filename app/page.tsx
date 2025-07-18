'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

export default function Home() {
    useEffect(() =>{
        AOS.init({
            duration:1000,
            once: true,
        })
    }, []);

  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center">
      
      {/*Graphic Section*/}

      {/*Page Title*/}
      <div data-aos="fade-up" className="text-6xl sm:text-5xl pt-40">
        <h1 className="">Hi I&apos;m Joshua, and welcome to my portfolio!</h1>
      </div>

      {/*Send too's*/}
	<div data-aos="fade-up" className="text-2xl mt-4">
	  <p>
	    Learn more <Link href="/aboutme" className="hover:underline duration-300 transition-all text-[#eb9c35] hover:animate-pulse">about me</Link>{" "}
	    or view my <Link href="/projects" className="hover:underline text-[#eb9c35] hover:animate-pulse">past projects</Link>.
	  </p>
	</div>
   </section>
  );
}

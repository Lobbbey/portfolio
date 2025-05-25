import Link from 'next/link';

export default function Experience() {
    return (
        <section className="my-5  md:p-5" id='about'>

            {/*About me*/}
            <div className="text-5xl sm:text-4xl text-center">
                <h1>About Me</h1>
            </div>

            {/*Skills*/}

            {/*See More Links*/}
            <div className='mt-14 flex flex-col items-center text-center'>
                <h2 className="text-2xl md:text-3xl text-nowrap mt-8 mb-6">See more here!</h2>
                <div className="flex gap-16 mt-4 md:mt-8">
                    <Link href="/resume.pdf" target='_blank' className='transition-all duration-300 hover:text-[#eb9c35] '>
                        <img src="/icons/resume.svg" alt="Resume" className="w-12 h-12 transform duration-300 hover:scale-110"/>
                        <span className='text-center text-sm mt-2'>Resume</span>
                    </Link>

                    <Link href="https://github.com/Lobbbey" target="_blank" className='transition-all duration-300 hover:text-[#eb9c35]'>
                        <img src='/icons/github.svg' alt="GitHub" className='w-12 h-12 transform duration-300 hover:scale-110'/>
                        <span className='text-center text-sm mt-2'>GitHub</span>
                    </Link>
 
                    <Link href="https://www.linkedin.com/in/joshua-tyler-bandy/" target="_blank" className='transition-all duration-300 hover:text-[#eb9c35] '>
                        <img src='/icons/linkedin.svg' alt="LinkedIn" className="w-12 h-12 transform duration-300 hover:scale-110 "/>
                        <span className='text-center text-sm mt-2'>LinkedIn</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
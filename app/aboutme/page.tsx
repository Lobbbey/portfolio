import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaFileLines } from 'react-icons/fa6'
import Link from 'next/link';

export default function Experience() {
    return (
        <section className="flex flex-col justify-center items-center pt-10">

            {/*Page title*/}
            <div className="text-5xl">
                <h1>About Me</h1>
            </div>

            {/*About Me*/}

            {/*Skills*/}

            {/*See More Links*/}
            <div>
                <h2 className="text-2xl">See more here!</h2>
                    <Link href="/resume.pdf" target='_blank' className='hover:border-b'>
                        <FaFileLines className='text-2xl' title='Resume' />Resume
                    </Link>
                    <Link href="https://github.com/Lobbbey" target="_blank" className='hover:border-b'>
                        <FaGithub className='text-lg' title='Github' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/joshua-tyler-bandy/" target="_blank" className='hover:border-b'>
                        <FaLinkedin className='text-lg' title='LinkedIn' />
                    </Link>
            </div>
        </section>
    );
}
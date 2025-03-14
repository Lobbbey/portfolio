import{Link, useMatch, useResolvedPath, NavLink} from "react-router-dom";
import { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import Pdf from "/public/resume.pdf";
//import './NavBar.css'; 

export default function NavBar(){
    return(
    <nav className="nav">
        <Link to='/' className='siteTitle'>Joshua Bandy</Link>
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/experience">Experience</CustomLink>
            <CustomLink to="/skills">Skills</CustomLink>
            <li><a href={Pdf} target="_blank" rel="noopener noreferrer"><FaFileAlt size={20}/></a></li>
            <li><a href="https://github.com/Lobbbey" target="_blank" rel="noopener noreferrer"><FaGithub size={20}/></a></li>
            <li><a href="https://www.linkedin.com/in/joshua-tyler-bandy/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a></li>
        </ul>
    </nav>
    );
}

interface CustomLinkProps {
    to: string;
    children: ReactNode;
    [key: string]: any; // to allow any other props like className, etc.
}


/* function CustomLink({ to, children, ...props}: CustomLinkProps){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
} */

function CustomLink({ to, children, ...props }: CustomLinkProps) {
    return (
        <li><NavLink
                to={to}
                {...props}
                className={({ isActive }) =>
                    isActive ? "active underline font-bold" : "hover:underline"
                }>
                    {children}
            </NavLink>
        </li>
    );
}
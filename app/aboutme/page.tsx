"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tooltip } from "react-tooltip";

//import { Tooltip } from "react-tooltip";

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const frameworks = [{ name: "React", icon: "/icons/frameworks/react.svg" },
                      { name: "Tailwind CSS", icon: "/icons/frameworks/TailwindCSS.svg"},
                      { name: "Node.js", icon: "/icons/frameworks/Node.js.svg"},
                      { name: "Flutter", icon: "/icons/frameworks/Flutter.svg"},
                      { name:"Express", icon:"/icons/frameworks/Express.svg"}];

  const languages = [{ name: "C", icon: "/icons/languages/C.svg"},
                     { name: "C++", icon: "/icons/languages/C++.svg"},
                     { name: "Java", icon: "/icons/languages/Java.svg"},
                     { name: "JavaScript", icon: "/icons/languages/JavaScript.svg"},
                     { name: "TypeScript", icon: "/icons/languages/TypeScript.svg"},
                     { name: "HTML", icon: "/icons/languages/HTML.svg"},
                     { name: "CSS", icon: "/icons/languages/CSS.svg"},
                     { name: "Python", icon: "/icons/languages/Python.svg"},
                     { name: "Bash", icon: "/icons/languages/bash.svg" }];

  const tools = [{ name: "Git", icon: "/icons/tools/Git.svg"},
                 { name: "GitHub", icon: "/icons/github.svg"},
                 { name: "GitHubActions", icon: "/icons/tools/GitHubActions.svg"},
                 { name: "Postman", icon: "/icons/tools/Postman.svg"},
                 { name: "openSUSE", icon: "/icons/tools/openSUSE.svg"},
                 { name: "Digital Ocean", icon: "/icons/tools/DigitalOcean.svg"},
                 { name: "MongoDB", icon: "/icons/tools/MongoDB.svg"},
                 { name: "MySQL", icon: "/icons/tools/MySQL.svg"},
                 { name: "VSCode", icon: "/icons/tools/VSCode.svg"},
                 { name: "NeoVim", icon: "/icons/tools/nvim.svg" }];

  return (
    <section className="pt-16 my-5 px-4 md:px-5" id="about">
      {/*About me*/}
      <div data-aos="fade-down" className="text-5xl sm:text-4xl text-center">
        <h1>About Me</h1>
        <p className="text-lg md:text-xl lg:text-2xl mx-auto mb-6 max-w-6xl">
          Hi, my name is Joshua Bandy, a first generation university student at the
          University of Central Florida with a major in computer science.
        </p>
      </div>

      {/*Skills*/}
      <div className="flex flex-col mt-6 md:flex-row max-w-7xl mx-auto">
        <div data-aos="fade-left" className="md:flex-1">
          <h3 className="text-4xl">Skills</h3>
          <p className="text-lg mt-4 md:text-xl lg:text-2xl max-w-[1000px] text-left">
            After working on many projects, these are the skills that I have acquired throught my learning process.
          </p>

          {/*Frameworks*/}
          <div>
            <h1 className="text-xl md:text-xl lg:text-2xl mt-4 flex flex-col">
              Frameworks
            </h1>

            <div className="grid grid-cols-4 gap-4 sm:flex sm:flex-wrap sm:gap-4 mt-4">
              {frameworks.map(({ name, icon }) => (
                <img
                  key={name}
                  src={icon}
                  alt={name}
                  data-tooltip-id={`tooltip-${name}`}
                  data-tooltip-content={name}
		  className="w-[55px] h-[55px] cursor-pointer transition-all duration-300 hover:scale-120"
                />
              ))}

              {frameworks.map(({ name }) => (
                <Tooltip
                  key={name}
                  id={`tooltip-${name}`}
                  place="bottom"
                  style={{ backgroundColor: "#1b2021", color: "#ede0d4" }}
                />
              ))}
            </div>
          </div>

          {/*Languages*/}
          <div>
            <h1 className="text-xl md:text-xl lg:text-2xl mt-4 flex flex-col">
              Languages
            </h1>
              <div className="grid grid-cols-4 gap-4 sm:flex sm:flex-wrap sm:gap-6 mt-4">
              {languages.map(({ name, icon }) => (
                <img
                  key={name}
                  src={icon}
                  alt={name}
                  data-tooltip-id={`tooltip-${name}`}
                  data-tooltip-content={name}
		  className="w-[55px] h-[55px] cursor-pointer transition-all duration-300 hover:scale-120"
                />
              ))}

              {languages.map(({ name }) => (
                <Tooltip
                  key={name}
                  id={`tooltip-${name}`}
                  place="bottom"
                  style={{ backgroundColor: "#1b2021", color: "#ede0d4" }}
                />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h1 className="text-xl md:text-xl lg:text-2xl mt-4 flex flex-col">
              Tools
            </h1>

            <div className="grid grid-cols-4 gap-4 sm:flex sm:flex-wrap sm:gap-6 mt-4">
              {tools.map(({ name, icon }) => (
                <img
                  key={name}
                  src={icon}
                  alt={name}
                  data-tooltip-id={`tooltip-${name}`}
                  data-tooltip-content={name}
		  className="w-[55px] h-[55px] cursor-pointer transition-all duration-300 hover:scale-120"
                />
              ))}

              {tools.map(({ name }) => (
                <Tooltip
                  key={name}
                  id={`tooltip-${name}`}
                  place="bottom"
                  style={{ backgroundColor: "#1b2021", color: "#ede0d4" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*See More Links*/}
      <div
        data-aos="fade-up"
        className="mt-14 flex flex-col items-center text-center"
      >
        <h2 className="text-2xl md:text-3xl text-nowrap mt-8 mb-6">
          See more here!
        </h2>
        <div className="flex gap-16 mt-4 md:mt-8">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="transition-all duration-300 hover:text-[#eb9c35] "
          >
            <img
              src="/icons/resume.svg"
              alt="Resume"
              className="w-12 h-12 transform duration-300 hover:scale-110"
            />
            <span className="text-center text-sm mt-2">Resume</span>
          </Link>

          <Link
            href="https://github.com/Lobbbey"
            target="_blank"
            className="transition-all duration-300 hover:text-[#eb9c35]"
          >
            <img
              src="/icons/github.svg"
              alt="GitHub"
              className="w-12 h-12 transform duration-300 hover:scale-110"
            />
            <span className="text-center text-sm mt-2">GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/joshua-tyler-bandy/"
            target="_blank"
            className="transition-all duration-300 hover:text-[#eb9c35] "
          >
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-12 h-12 transform duration-300 hover:scale-110 "
            />
            <span className="text-center text-sm mt-2">LinkedIn</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

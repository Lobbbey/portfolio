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

  const frameworks = [{ name: "React", icon: "/icons/react.svg" }];

  const languages = [{ name: "Bash", icon: "/icons/bash.svg" }];

  const tools = [
    {
      name: "NeoVim",
      icon: "/icons/nvim.svg",
    },
  ];

  return (
    <section className="my-5 md:p-5" id="about">
      {/*About me*/}
      <div data-aos="fade-down" className="text-5xl sm:text-4xl text-center">
        <h1>About Me</h1>
        <p className="text-lg md:text-xl lg:text-2xl mx-auto mb-6 max-w-6xl">
          I'm Joshua Bandy, a first generation university student at the
          University of Central Florida with a major in computer science.
        </p>
      </div>

      {/*Skills*/}
      <div className="flex flex-col mt-6 md:flex-row max-w-7xl mx-auto">
        <div data-aos="fade-left" className="md:flex-1">
          <h3 className="text-4xl">Skills</h3>
          <p className="text-lg mt-4 md:text-xl lg:text-2xl max-w-[1000px] text-left">
            I have a deep enjoyment of learning new skills and technologies,
            I've used creating projects as a way to continue this. These are
            some of the technologies I have learned along the way
          </p>

          {/*Frameworks*/}
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl mt-4 flex flex-col">
              Frameworks
            </h1>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              {frameworks.map(({ name, icon }) => (
                <img
                  key={name}
                  src={icon}
                  alt={name}
                  data-tooltip-id={`tooltip-${name}`}
                  data-tooltip-content={name}
                  style={{ width: 40, height: 40, cursor: "pointer" }}
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
            <h1 className="text-lg md:text-xl lg:text-2xl mt-4 flex flex-col">
              Languages
            </h1>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              {languages.map(({ name, icon }) => (
                <img
                  key={name}
                  src={icon}
                  alt={name}
                  data-tooltip-id={`tooltip-${name}`}
                  data-tooltip-content={name}
                  style={{ width: 60, height: 60, cursor: "pointer" }}
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
            <h1 className="text-lg md:text-xl lg:text-2xl mt-4 flex flex-col">
              Tools
            </h1>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              {tools.map(({ name, icon }) => (
                <img
                  key={name}
                  src={icon}
                  alt={name}
                  data-tooltip-id={`tooltip-${name}`}
                  data-tooltip-content={name}
                  style={{ width: 40, height: 40, cursor: "pointer" }}
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

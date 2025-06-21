"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      name: "Project Salvage",
      duration: "February 2024 - May 2024",
      info: {
        description: "",
        tags: [
          "MongoDB",
          "Express",
          "React",
          "Node.js",
          "TailwindCSS",
          "Flutter",
        ],
      },
      logo: "",
      link: "https://github.com/Lobbbey/ProjectSalvage",
    },
    {
      name: "CampusConnect",
      duration: "January 2023 - April 2024",
      info: {
        description: "",
        tags: [],
      },
      logo: "",
      link: "https://github.com/Lobbbey/CampusConnect",
    },
    {
      name: "Contacter",
      duration: "Jan 2023 - Feb 2023",
      info: {
        description: "A webapp made with a LAMP stack to manage ",
        tags: ["Linux", "Apache", "MySql", "PHP"],
      },
      logo: "",
      link: "https://github.com/Lobbbey/Contacter",
    },
  ];

  return (
    <section className="pt-16 my-5 px-4 md:px-5" id="about">
      {/*About me*/}
      <div
        data-aos="fade-down"
        className="text-5xl sm:text-4xl text-left flex flex-col mx-auto"
      >
        <h1>Projects</h1>
        <p className="text-lg md:text-xl lg:text-2xl mx-auto mb-6 max-w-6xl"></p>
      </div>
    </section>
  );
}

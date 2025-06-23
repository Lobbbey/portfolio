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
        description: "Allows students to join university clubs and see what events are going on.",
        tags: [
				],
      },
      logo: "",
      link: "https://github.com/Lobbbey/CampusConnect",
    },
    {
      name: "Contacter",
      duration: "Jan 2023 - Feb 2023",
      info: {
        description: "Helps users manage their contacts by allowing searching, editing, and adding of that data.",
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
      <div className="">

					{ projects.map((project, index) => (
    <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-gray-800">{project.name}</h2>
      <p className="text-gray-600 text-sm mb-2">{project.duration}</p>
      {project.info.description && (
        <p className="text-gray-700 mt-4">{project.info.description}</p>
      )}
      {project.info.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.info.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
      {project.link && (
        <div className="mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        </div>
      )}
    </div>
  ))}
     </div>
    </section>
  );
}

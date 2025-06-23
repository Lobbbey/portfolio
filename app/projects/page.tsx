"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LinkIconSVG from "../../public/icons/link.svg";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      name: "MediaShelf",
      duration: "July 2025 - Current",
      info: {
        description:
          "A way to assist with managing a large collection of physical media such as Movies, Music, Books, and Video Games",
        tags: ["Next.js", "Tailwind CSS", "PostgresSQL", "Supabase"],
      },
      logo: "",
      link: "https://github.com/Lobbbey/MediaShelf",
    },
    {
      name: "Live Cap",
      duration: "ImmerseGTXR 2025 Hackathon",
      info: {
        description:
          "Augmented Reality app that will live translate what a person said and display the translation as a speech bubble by their head.",
        tags: ["Flutter", "Unity", "FastAPI", "Cloud Translation API"],
      },
      logo: "",
      link: "https://github.com/Lobbbey/LiveCap",
    },
    {
      name: "Project Salvage",
      duration: "February 2024 - May 2024",
      info: {
        description:
          "This app helps people with managing their finances by displaying spending graphs and making savings goals.",
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
        description:
          "Allows students to join university clubs and see what events are going on.",
        tags: [
          "Linux",
          "Apache",
          "MySQL",
          "PHP",
          "Tailwind CSS",
          "Github Actions",
        ],
      },
      logo: "",
      link: "https://github.com/Lobbbey/CampusConnect",
    },
    {
      name: "Contacter",
      duration: "Jan 2023 - Feb 2023",
      info: {
        description:
          "Helps users manage their contacts by allowing searching, editing, and adding of that data.",
        tags: ["Linux", "Apache", "MySql", "PHP"],
      },
      logo: "",
      link: "https://github.com/Lobbbey/Contacter",
    },
  ];

  return (
    <section className="pt-16 my-5 px-4 md:px-5" id="about">
      <div
        data-aos="fade-up"
        className="text-5xl sm:text-4xl text-left f1B2021ex-col mx-auto"
      >
        <h1>Projects</h1>
        <p className="text-lg md:text-xl lg:text-2xl mx-auto mb-6 max-w-6xl"></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-8 p-6 bg-[#1B2021] rounded-lg shadow-md"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold flex items-center">
              {project.name}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <img
                    src="/icons/link.svg"
                    alt="View project link"
                    className="h-6 w-6 inline-block transition-all duration-300 hover:scale-110"
                  />
                </a>
              )}
            </h2>
            <p className="text-sm mb-2">{project.duration}</p>
            {project.info.description && (
              <p className="mt-4">{project.info.description}</p>
            )}
            {project.info.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.info.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

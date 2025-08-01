"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "@/constants/projects";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="pt-16 my-5 px-4 md:px-5" id="projects">
      {/* Title */}
      <div className="text-5xl sm:text-4xl text-left flex-col mx-auto">
        <h1>Projects</h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-1 mx-auto mb-6 ">
          Below is a list of projects that I've worked on and showcase the
          skills I've used.
        </p>
      </div>

      {/* List of projects  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
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

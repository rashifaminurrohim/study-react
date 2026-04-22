import Project_Strash from "../../assets/project-strash.png";
import Project_Bookshelf from "../../assets/project-bookshelf.png";
import Project_Newjeans from "../../assets/project-newjeans169.png";
import Project_Noted from "../../assets/project-noted.png";
import Project_Mobile_TanaminAI from "../../assets/project-mobile-tanaminai.png";
import Project_Mobile_Story from "../../assets/project-mobile-story.png";
import Project_Mobile_Asclepius from "../../assets/project-mobile-asclepius.png";
import Project_Mobile_GithubApp from "../../assets/project-mobile-githubapp.png";
import Project_Mobile_UTS from "../../assets/project-mobile-uts.png";

import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Projects() {
  type Project = {
    title: string;
    subtitle: string;
    image: string;
    desc: string;
    demo: string;
    source: string;
    type: string;
  };

  const projects: Project[] = [
    {
      title: "Strash",
      subtitle: "AI-powered waste classification website",
      image: Project_Strash,
      desc: "Strash is a web-based application that helps users classify waste using image recognition. Users can upload images and receive instant predictions along with guidance on proper waste sorting. This project focuses on integrating machine learning models into a responsive web interface.",
      demo: "https://ekastyabudi.github.io/Strash/",
      source: "https://ekastyabudi.github.io/Strash/",
      type: "website",
    },
    {
      title: "Bookshelf",
      subtitle: "Personal book management app",
      image: Project_Bookshelf,
      desc: "Bookshelf is a web application that allows users to manage their book collection. Users can add, search, mark as completed, and delete books. The app emphasizes state management and DOM manipulation using JavaScript.",
      demo: "",
      source:
        "https://github.com/rashifaminurrohim/DBS-Coding-Camp/tree/6bc20071e40ae756bb6dcb85fdb3c4f870d4d0fd/Web-FrontEnd-for-Beginners/bookshelf-app-starter-project",
      type: "website",
    },
    {
      title: "Noted.",
      subtitle: "Notes app with archive feature",
      image: Project_Noted,
      desc: "Noted is a note-taking application built with a modern UI approach using Web Components. It supports creating, archiving, and managing notes efficiently, with a focus on modular architecture and clean styling using CSS Grid.",
      demo: "",
      source:
        "https://github.com/rashifaminurrohim/DBS-Coding-Camp/tree/main/FrontEnd-Web-Development-Fundamentals/submission/submission-final",
      type: "website",
    },
    {
      title: "Wiki Newjeans",
      subtitle: "Fan-based informational website",
      image: Project_Newjeans,
      desc: "This project is a fan-based website that provides structured information about the K-pop group NewJeans. It focuses on layout design, content organization, and responsive UI to present media-rich content in a clean and engaging way.",
      demo: "",
      source:
        "https://github.com/rashifaminurrohim/DBS-Coding-Camp/tree/main/Web-Programming-Basics/submission-wiki-fandom",
      type: "website",
    },
    {
      title: "Tanamin.AI",
      subtitle: "Soil-based plant recommendation app",
      image: Project_Mobile_TanaminAI,
      desc: "Tanamin.AI is a mobile application that predicts suitable plants based on soil conditions. By analyzing soil data, the app provides recommendations to help users choose the most appropriate crops. This project highlights the integration of machine learning with mobile development.",
      demo: "",
      source: "https://github.com/TanaminAI/Tanamin.AI-App.git",
      type: "mobile",
    },
    {
      title: "StoryApp",
      subtitle: "Story sharing app with map integration",
      image: Project_Mobile_Story,
      desc: "StoryApp is an Android application that allows users to share stories with images and location data. It includes authentication, API integration, and interactive maps, showcasing modern Android development practices.",
      demo: "",
      source: "https://ekastyabudi.github.io/Strash/",
      type: "mobile",
    },
    {
      title: "Asclepius",
      subtitle: "Cancer image classification app",
      image: Project_Mobile_Asclepius,
      desc: "Asclepius is an Android application designed to classify cancer-related medical images using machine learning. The app focuses on providing accurate predictions while maintaining a simple and user-friendly interface.",
      demo: "",
      source: "https://ekastyabudi.github.io/Strash/",
      type: "mobile",
    },
    {
      title: "GithubApp",
      subtitle: "GitHub user explorer app",
      image: Project_Mobile_GithubApp,
      desc: "GithubApp is an Android application that allows users to search and explore GitHub profiles. It features user details, followers/following lists, and API integration, implemented using clean architecture principles.",
      demo: "",
      source: "https://ekastyabudi.github.io/Strash/",
      type: "mobile",
    },
    {
      title: "Midterm Project",
      subtitle: "Flutter-based academic project",
      image: Project_Mobile_UTS,
      desc: "This project was developed using Flutter as part of a midterm assignment. It focuses on building a cross-platform mobile application while applying fundamental concepts such as UI composition, state management, and navigation.",
      demo: "",
      source:
        "https://github.com/rashifaminurrohim/Aplikasi_Perhitungan_Flutter",
      type: "mobile",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-secondary">
      <div className="bg-primary rounded-b-[100px] py-10 border border-t-0 border-x-2 border-b-2 border-zinc-100 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.07)]" />
      <div className="flex flex-col mx-auto max-w-7xl gap-10 px-10 pt-20 pb-54">
        {/* Title */}
        <h2 className="text-heading text-center">What I've Done</h2>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Projects-item-wrapper */}
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="bg-primary relative group cursor-pointer overflow-hidden border-4 border-secondary shadow-sm"
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-54 object-contain"
              />

              {/* overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center
              bg-black/64
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-300"
              >
                {/* icon center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon
                    icon={"simple-line-icons:magnifier-add"}
                    className="text-secondary text-heading opacity-100 -translate-y-12 transition-all ease-out duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                  />
                </div>

                <div className="absolute bottom-0 w-full bg-secondary pt-1.5 pb-0.5 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {/* Title */}
                  <h3 className="text-accent tracking-wide">
                    {project.subtitle}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 overflow-y-auto">
            <div className="bg-white max-w-xl w-full flex flex-col items-center">
              <header className="bg-secondary w-full text-center relative py-2 border-b-2 border-x border-tertiary shadow-sm">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-1/10 right-1/100 text-tertiary rounded text-2xl hover:cursor-pointer hover:text-zinc-400"
                >
                  <Icon icon={"ri:close-large-fill"} />
                </button>
                <h2 className="text-heading font-normal">
                  {selectedProject.title}
                </h2>
                <h3 className="text-subheading font-normal text-muted">
                  {selectedProject.subtitle}
                </h3>
              </header>

              <section className="w-full">
                <div className="p-2 shadow-inner bg-tertiary">
                  <img
                    src={selectedProject.image}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <p className="px-6 pt-4 pb-8 text-center wrap-break-word tracking-tighter">
                  {selectedProject.desc}
                </p>
              </section>

              <footer className="bg-secondary flex justify-end w-full py-3 pr-4 text-center gap-4 border-t border-x border-zinc-200 shadow-xs">
                {selectedProject.type === "mobile" ? (
                  <a
                    href={selectedProject.source}
                    target="_blank"
                    rel="noopener norefferer"
                    onClick={() => setSelectedProject(null)}
                    className="py-2 px-3 border-3 font-medium text-accent active:translate-y-px active:shadow"
                  >
                    VISIT SOURCE
                  </a>
                ) : (
                  <>
                    <a
                      href={selectedProject.source}
                      target="_blank"
                      rel="noopener norefferer"
                      onClick={() => setSelectedProject(null)}
                      className="py-2 px-3 border-3 font-medium text-accent active:translate-y-px active:shadow"
                    >
                      VISIT SOURCE
                    </a>

                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener norefferer"
                      onClick={() => setSelectedProject(null)}
                      className="py-2 px-3 border-3 font-medium text-accent active:translate-y-px active:shadow"
                    >
                      VISIT SITE
                    </a>
                  </>
                )}
              </footer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

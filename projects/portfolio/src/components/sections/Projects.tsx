import { Icon } from "@iconify/react";
import { useState } from "react";
import NotDeployedModal from "../NotDeployedModal";
import { projects, type Project } from "../../data/projects";

export default function Projects() {
  const [showNotDeployed, setShowNotDeployed] = useState(false);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="bg-secondary">
      <div className="bg-primary rounded-b-[100px] py-10 border border-t-0 border-x-2 border-b-2 border-zinc-100 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.07)]" />
      <div className="flex flex-col mx-auto max-w-7xl gap-10 px-10 pt-20 pb-54">
        {/* Title */}
        <h2 className="text-heading text-center">What I've Done</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="w-full aspect-[75%] object-contain"
              />

              {/* overlay */}
              <div
                className="
                  absolute inset-0 flex flex-col 
                  items-center justify-center
                  bg-black/64
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                  hover:scale-[1.02]
                "
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
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 py-10">
            <div className="bg-white max-w-md md:max-w-xl mx-4 w-full max-h-[90vh] overflow-y-auto flex flex-col items-center">
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
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      if (!selectedProject.source) {
                        setShowNotDeployed(true);
                      } else {
                        window.open(selectedProject.source, "_blank");
                      }
                    }}
                    className="py-2 px-3 border-3 font-medium text-accent active:translate-y-px active:shadow"
                  >
                    VISIT SOURCE
                  </a>
                ) : (
                  <>
                    <a
                      href={selectedProject.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSelectedProject(null)}
                      className="py-2 px-3 border-3 font-medium text-accent active:translate-y-px active:shadow"
                    >
                      VISIT SOURCE
                    </a>

                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        if (!selectedProject.demo) {
                          setShowNotDeployed(true);
                        } else {
                          window.open(selectedProject.demo, "_blank");
                        }
                      }}
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
        {showNotDeployed && (
          <NotDeployedModal onClose={() => setShowNotDeployed(false)} />
        )}
      </div>
    </section>
  );
}

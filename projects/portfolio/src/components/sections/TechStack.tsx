import { Icon } from "@iconify/react";

export default function TechStack() {
  const icons = [
    "devicon:html5",
    "devicon:css3",
    "logos:javascript",
    "devicon:typescript",
    "logos:python",
    "logos:java",
    "logos:kotlin-icon",
    "logos:react",
    "logos:nodejs-icon",
    "simple-icons:express",
    "logos:android-icon",
    "logos:git-icon",
    "devicon:postman",
    "devicon:postgresql",
    "flat-color-icons:linux",
    "logos:aws",
  ];

  return (
    <div className="bg-primary overflow-hidden">
      <div className="bg-secondary py-10 border border-t-0 border-x-2 border-b-2 rounded-b-[100px] border-zinc-200 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.07)]" />

      <div className="flex flex-col items-center gap-8 pt-20">
        <h2 className="mb-4 text-xl md:text-3xl lg:text-4xl">
          Some Technologies I've Worked With
        </h2>

        <div className="w-full overflow-hidden py-6">
          <div
            className="flex w-max animate-marquee"
            style={{ animationPlayState: "var(--play-state, running)" }}
          >
            {[...icons, ...icons].map((icon, index) => (
              <div
                key={index}
                className="mx-4 md:mx-6 lg:mx-8 flex items-center justify-center"
              >
                <Icon
                  icon={icon}
                  className="
                    w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 
                    grayscale hover:grayscale-0
                    opacity-75 hover:opacity-100
                    hover:drop-shadow-lg
                    hover:scale-130
                    transition-all ease-out 
                    duration-400
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

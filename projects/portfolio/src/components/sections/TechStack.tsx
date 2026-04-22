import { Icon } from "@iconify/react";

export default function TechStack() {
  const icons = [
    "devicon:html5",
    "devicon:css3",
    "logos:javascript",
    "devicon:typescript",
    "logos:java",
    "logos:kotlin-icon",
    "logos:react",
    "logos:nodejs-icon",
    "simple-icons:express",
    "logos:android-icon",
    "logos:git-icon",
  ];

  return (
    <div className="bg-primary overflow-hidden">
      <div className="bg-secondary rounded-b-[100px] py-10 border border-t-0 border-x-2 border-b-2 border-zinc-200 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.07)]" />

      <div className="flex flex-col items-center gap-8 pt-20">
        <h2 className="text-heading">Some Technologies I've Worked With</h2>

        {/* Marquee Container */}
        {/* pause animasi saat hover di area manapun dalam track */}
        <div className="w-full overflow-hidden py-6">
          <div
            className="flex w-max animate-marquee"
            style={{ animationPlayState: "var(--play-state, running)" }}
          >
            {[...icons, ...icons].map((icon, index) => (
              <div
                key={index}
                className="mx-8 flex items-center justify-center"
                onMouseEnter={(e) => {
                  // set --play-state ke paused di track saat icon di-hover
                  e.currentTarget.closest(".animate-marquee") as HTMLElement;
                }}
                onMouseLeave={(e) => {
                  (
                    e.currentTarget.closest(".animate-marquee") as HTMLElement
                  )?.style.setProperty("--play-state", "running");
                }}
              >
                <Icon
                  icon={icon}
                  className="w-20 h-20 md:w-24 md:h-24 grayscale transition-all duration-400 ease-out hover:grayscale-0 hover:scale-125 hover:drop-shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

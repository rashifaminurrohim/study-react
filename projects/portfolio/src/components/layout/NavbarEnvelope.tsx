import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

export default function NavbarEnvelope() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const observer = new ResizeObserver(() => {
      const height = navRef.current!.offsetHeight;
      document.documentElement.style.setProperty("--nav-h", `${height}px`);
    });

    observer.observe(navRef.current);

    return () => observer.disconnect();
  }, []);

  const sections = ["home", "about", "skills", "projects", "contact"];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      ref={navRef}
      className={`
        sticky relative top-0 z-50 
        px-9 pt-9 
        transition-all duration-300 
          ${
            scrolled
              ? "bg-zinc-100/30 backdrop-blur-sm border-transparent"
              : "bg-[repeating-linear-gradient(45deg,#c0392b_0_40px,var(--color-secondary)_40px_90px,#5b7fa6_90px_130px,var(--color-secondary)_130px_180px)] rounded-t-[50px] border border-t-2 border-x-2 border-b-2 border-zinc-200 shadow-md"
          }`}
    >
      <div
        className={`transition-all duration-300 ${
          scrolled ? "" : "bg-secondary"
        }`}
      >
        <div className="max-w-full mx-auto px-4 py-4">
          <nav className="hidden md:flex items-center justify-between">
            <div></div>

            <ul className="flex items-center gap-1 text-base text-zinc-600">
              {sections.map((section) => (
                <li
                  onClick={() => scrollToSection(section)}
                  className="hover:text-accent tracking-wide cursor-pointer"
                >
                  /{section}
                </li>
              ))}
            </ul>
          </nav>
          <nav className="flex flex-col items-end justify-end">
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? (
                <Icon
                  icon={"ri:close-large-fill"}
                  className="
                    text-3xl
                    text-tertiary  
                  "
                />
              ) : (
                <Icon
                  icon={"charm:menu-hamburger"}
                  className="
                    text-3xl
                    text-tertiary  
                  "
                />
              )}
            </button>
            {isOpen && (
              <div
                className="
                          absolute top-full right-9 left-9
                          flex flex-col
                          md:hidden
                          bg-secondary
                          text-center
                          border-t-0 border-b-2 border-x-2 border-zinc-200 rounded-b-md 
                          shadow-md
                        "
              >
                {sections.map((section) => (
                  <div className="py-2 border-t border-tertiary  tracking-widest cursor-pointer hover:text-accent hover:bg-primary">
                    <a onClick={() => scrollToSection(section)}>{section}</a>
                  </div>
                ))}
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

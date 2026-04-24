import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { createPortal } from "react-dom";

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

            <ul className="flex items-center gap-3 text-base text-zinc-600 font-semibold">
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
              <Icon
                icon={isOpen ? "ri:close-large-fill" : "charm:menu-hamburger"}
                className={`
                  p-1 text-4xl rounded-md shadow-sm
                  transition-transform duration-500
                  ${isOpen ? "rotate-0 text-[#c0392b]" : "rotate-180 text-[#5b7fa6]"}
                `}
              />
            </button>
            {/* selalu render, tapi kontrol dengan isOpen */}
            {createPortal(
              <div
                className={`
                  fixed z-50 flex flex-col md:hidden text-center
                  rounded-b-md border-x-2 border-b-2 border-zinc-200
                  shadow-sm overflow-hidden
                  transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-4 pointer-events-none"
                  }
                `}
                style={{
                  top: "var(--nav-h)",
                  left: "2.6rem",
                  right: "2.6rem",
                }}
              >
                {scrolled && (
                  <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm" />
                )}
                <div
                  className={`relative flex flex-col text-center ${!scrolled ? "bg-secondary" : ""}`}
                >
                  {sections.map((section, index) => (
                    <div
                      key={section}
                      className="py-2 border-t border-tertiary tracking-widest cursor-pointer hover:text-accent hover:bg-primary
                      transition-all duration-300"
                      style={{
                        transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen
                          ? "translateY(0)"
                          : "translateY(-10px)",
                      }}
                    >
                      <a
                        onClick={() => {
                          scrollToSection(section);
                          setIsOpen(false);
                        }}
                      >
                        {section}
                      </a>
                    </div>
                  ))}
                </div>
              </div>,
              document.body,
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

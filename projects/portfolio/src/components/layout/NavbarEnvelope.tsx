import { useEffect, useRef, useState } from "react";

export default function NavbarEnvelope() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      document.documentElement.style.setProperty("--nav-h", `${height}px`);
    }
  }, []);

  type SectionId = "hero" | "about" | "skills" | "projects" | "contact";
  const scrollToSection = (id: SectionId) => {
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
      className={`sticky top-0 z-50 px-9 pt-9 transition-all duration-300 ${scrolled ? "backdrop-blur-sm bg-zinc-100/30 border-transparent" : "bg-[repeating-linear-gradient(45deg,#c0392b_0_40px,var(--color-secondary)_40px_90px,#5b7fa6_90px_130px,var(--color-secondary)_130px_180px)] rounded-t-[50px] border border-t-2 border-x-2 border-b-2 border-zinc-200 shadow-md"}`}
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? ""
            : "bg-secondary  shadow-[0_-2px_4px_-6px_rgba(0,0,0,0.07)] "
        }`}
      >
        <div className="max-w-full mx-auto px-4 md:px-6 py-4">
          <nav className="flex items-center justify-between my-1.5 mx-4">
            <div className="font-semibold tracking-tight"></div>

            <ul className="flex items-center gap-1 text-base text-zinc-600">
              <li
                onClick={() => scrollToSection("about")}
                className="hover:text-accent cursor-pointer"
              >
                {" "}
                About /
              </li>
              <li
                onClick={() => scrollToSection("skills")}
                className="hover:text-accent cursor-pointer"
              >
                {" "}
                Skills /
              </li>
              <li
                onClick={() => scrollToSection("projects")}
                className="hover:text-accent cursor-pointer"
              >
                {" "}
                Projects /
              </li>
              <li
                onClick={() => scrollToSection("contact")}
                className="hover:text-accent cursor-pointer"
              >
                {" "}
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 py-6 rounded-t-[100px] mx-1 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm bg-zinc-100/30" : "bg-secondary"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <div className="font-semibold tracking-tight">MRA</div>

          <ul className="flex items-center gap-6 text-sm text-zinc-600">
            <li className="hover:text-zinc-900 cursor-pointer">About</li>
            <li className="hover:text-zinc-900 cursor-pointer">Skills</li>
            <li className="hover:text-zinc-900 cursor-pointer">Projects</li>
            <li className="hover:text-zinc-900 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

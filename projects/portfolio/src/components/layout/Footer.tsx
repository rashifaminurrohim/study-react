import { FaLinkedin, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-10 bg-primary mx-1 rounded-b-[100px]">
      <div className="h-px w-7xl mx-auto bg-zinc-300 my-8" />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-row justify-between gap-4">
          {/* Text */}
          <p>&copy; 2026 Rashif Aminurrohim</p>
          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com/rashifaminurrohim"
              target="_blank"
              rel="noopener norefferer"
            >
              <FaSquareGithub className="w-7 h-7 rounded shadow-sm transition-all active:translate-y-px active:border-b-2 border-secondary active:shadow-none" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-rashif-aminurrohim-0a21b0293/"
              target="_blank"
              rel="noopener norefferer"
            >
              <FaLinkedin className="w-7 h-7 rounded shadow-sm transition-all active:translate-y-px active:border-b-2 border-secondary active:shadow-none" />
            </a>
            <a
              href="https://instagram.com/rasifara_"
              target="_blank"
              rel="noopener norefferer"
            >
              <FaSquareInstagram className="w-7 h-7 rounded shadow-sm transition-all active:translate-y-px active:border-b-2 border-secondary active:shadow-none" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

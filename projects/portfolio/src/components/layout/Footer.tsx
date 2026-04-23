import { FaLinkedin, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-10 bg-primary mx-1 rounded-b-[100px]">
      <div className="h-px max-w-7xl w-full mx-auto bg-zinc-300 my-8" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          {/* Text */}
          <p className="text-center sm:text-left">
            &copy; 2026 Rashif Aminurrohim
          </p>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com/rashifaminurrohim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub className="w-6 h-6 md:w-7 md:h-7 hover:scale-110 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-rashif-aminurrohim-0a21b0293/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 md:w-7 md:h-7 hover:scale-110 transition" />
            </a>

            <a
              href="https://instagram.com/rasifara_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram className="w-6 h-6 md:w-7 md:h-7 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

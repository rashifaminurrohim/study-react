import { FaHandshakeAngle, FaWhatsapp } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
export default function Contact() {
  return (
    <div className="bg-primary pt-30 pb-10 rounded-t-[100px] border border-b-0 border-x-2 border-t-2 border-zinc-200 shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.07)] -mt-24">
      <div className="flex flex-col items-center mx-auto max-w-6xl gap-8">
        {/* Icon */}
        <FaHandshakeAngle className="w-36 h-36 rounded-full bg-zinc-100 shadow-inner" />

        {/* Title */}
        <h2 className="text-display text-center">
          <div>Tell me about your next</div>
          project
        </h2>

        {/* Buttons */}
        <div className="flex gap-6 items-center">
          <a
            href="mailto:rashif.learn@gmail.com"
            className="flex items-center gap-2 px-5 py-4 rounded-full border-[3.8px] border-tertiary bg-accent text-primary shadow-sm transition-all hover:shadow-md active:translate-y-px active:shadow"
          >
            <div className="flex justify-evenly items-center gap-2">
              <GoMail className="text-primary w-4 h-4" />
              <p className="text-primary text-xs">Email me</p>
            </div>
          </a>
          <a
            href="https://wa.me/62895361178100"
            className="flex items-center gap-2 px-5 py-4 rounded-full border-[3.5px] border-tertiary bg-primary text-accent shadow-sm transition-all hover:shadow-md active:translate-y-px active:shadow"
          >
            <div className="flex justify-evenly items-center gap-2">
              <FaWhatsapp className="text-accent w-4 h-4" />
              <p className="text-accent text-xs">WhatsApp</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

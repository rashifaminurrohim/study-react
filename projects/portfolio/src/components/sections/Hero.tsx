import FotoRashif from "../../assets/rashif.jpg";
import { LiaDownloadSolid } from "react-icons/lia";

export default function Hero() {
  return (
    
    <div className="min-h-screen">
      <div
        className="bg-secondary rounded-b-[100px] pt-20 pb-30 border border-t-0 border-x-2 border-b-2 border-zinc-200 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.07)] -mb-20
    relative
    z-10"
      >
        <div className="flex flex-col mx-auto max-w-6xl items-center gap-6">
          {/* Avatar */}
          <img
            src={FotoRashif}
            alt="Foto Rashif Aminurrohim"
            className="w-40 h-40 rounded-full object-cover"
          />
          {/* Name */}
          <h1 className="text-display">Rashif Aminurrohim</h1>
          {/* Occupation */}
          <h2 className="text-subheading">Software Developer 🛠️</h2>
          {/* Description */}
          {/* <p className="text-paragraph max-w-xl text-center">
          build clean, structured interfaces and scalable application
          architecture.
        </p> */}
          <button className="bg-text px-5 py-4 rounded-full border border-black border-b-2 shadow-sm transition-all active:translate-y-px active:border-b-2 active:shadow-none">
            <div className="flex justify-evenly items-center gap-2">
              <p className="text-primary text-xs">Download CV</p>
              <LiaDownloadSolid className="text-primary w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
      <div className="h-20"/>
    </div>
  );
}

import FotoRashif from "../../assets/rashif.jpg";

export default function Hero() {
  return (
    <div className="bg-secondary pt-20">
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
        <p className="text-paragraph max-w-xl text-center">
          build clean, structured interfaces and scalable application
          architecture.
        </p>
        <button>
          <p className="text-label">Download CV</p>
        </button>
      </div>
    </div>
  );
}

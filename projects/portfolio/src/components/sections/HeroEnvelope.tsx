import FotoRashif from "../../assets/JADI.png";
import PostMark from "../../assets/postmark2.png";

export default function HeroEnvelope() {
  return (
    <div
      className="
        z-10 flex flex-1
        mb-1 -mt-(--nav-h) px-9 pb-9
        border border-t-0 border-x-2 border-b-2 border-zinc-200
        rounded-b-md rounded-t-[50px]  
        bg-[repeating-linear-gradient(45deg,#5b7fa6_0_40px,var(--color-secondary)_40px_90px,#c0392b_90px_130px,var(--color-secondary)_130px_180px)] 
        shadow-md
      "
    >
      <div className="relative flex-1 bg-secondary">
        {/* Avatar kanan atas*/}
        <div
          className="
            absolute top-(--nav-h) right-12 
            mt-8
          "
        >
          <img
            src={FotoRashif}
            alt="Frame"
            className="
              h-45 md:h-55 lg:h-65 
              object-cover
            "
          />
          <img
            src={PostMark}
            alt="Frame"
            className="
              absolute top-30 right-26 md:right-26 lg:right-36 
              h-25 md:h-35 lg:h-45
              rotate-340 
              object-cover 
            "
          />
        </div>
        {/* Nama & Okupasi - kiri bawah */}
        <div
          className="
            absolute bottom-16 left-24 
            flex flex-col gap-3
          "
        >
          <h1
            className="
              text-xl  md:text-3xl lg:text-5xl 
              font-extrabold
            "
          >
            Hey, I'm Rashif Aminurrohim
          </h1>
          <h2
            className="
              text-sm md:text-lg lg:text-xl
            "
          >
            Software Developer based in Indonesia
          </h2>
        </div>
      </div>
    </div>
  );
}

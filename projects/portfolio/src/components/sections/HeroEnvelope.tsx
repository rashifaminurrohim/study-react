import Stamp1 from "../../assets/stamp1.png";
import Original1 from "../../assets/original1.png";
import Stamp2 from "../../assets/stamp2.png";
import Original2 from "../../assets/original2.png";
import Stamp3 from "../../assets/stamp3.png";
import Original3 from "../../assets/original3.png";
import PostMark from "../../assets/postmark2-indonesia.png";
import StampFrame from "./StampFrame";
import { useEffect, useRef, useState } from "react";

const images = [
  {
    stamp: Stamp1,
    original: Original1,
  },
  {
    stamp: Stamp2,
    original: Original2,
  },
  {
    stamp: Stamp3,
    original: Original3,
  },
];

export default function HeroEnvelope() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const nextImage = () => {
    if (isFading) return;

    setIsFading(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsFading(false);
    }, 300);
  };

  const startSlideShow = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      nextImage();
    }, 5000);
  };

  const handleNextImage = () => {
    nextImage();
    startSlideShow();
  }

  useEffect(() => {
    startSlideShow();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

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
            absolute top-[calc(var(--nav-h)+2rem)] right-[4%]
          "
        >
          <StampFrame>
            <img
              src={images[currentIndex].stamp}
              alt="Frame"
              onClick={handleNextImage}
              className={`
                h-45 md:h-55 lg:h-65 
                object-cover
                cursor-pointer
                transition-all duration-400
                hover:scale-[1.01]
                ${isFading ? "opacity-0" : "opacity-100"}
              `}
            />
          </StampFrame>
          <img
            src={PostMark}
            alt="Frame"
            className="
              absolute top-[64%] right-[60%]
              h-30 md:h-35 lg:h-40
              rotate-355 
              object-cover 
            "
          />
        </div>
        {/* Nama & Okupasi - kiri bawah */}
        <div
          className="
            absolute bottom-[8%] left-[6%]
            flex flex-col 
            pr-8
            text-text
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
          <p
            className="
              text-sm md:text-lg lg:text-2xl font-bold
            "
          >
            Web & Mobile Developer
          </p>
          <p
            className="
              text-sm md:text-lg lg:text-2xl font-bold
            "
          >
            based in Bandung, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
}

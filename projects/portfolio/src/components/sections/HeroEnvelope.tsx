import { heros } from "../../data/heros";
import PostMark from "../../assets/postmark2-indonesia.png";
import PostMark2 from "../../assets/imigrasi.png";
import StampFrame from "../StampFrame";
import { useEffect, useRef, useState } from "react";

export default function HeroEnvelope() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const nextImage = () => {
    if (isFading) return;

    setIsFading(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heros.length);
      setIsFading(false);
    }, 300);
  };

  const startSlideShow = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      nextImage();
    }, 3000);
  };

  const stopSlideshow = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleNextImage = () => {
    nextImage();
    startSlideShow();
  };

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
            <div
              ref={imgRef}
              className="relative cursor-none"
              onMouseEnter={() => {
                setIsHovered(true);
                stopSlideshow();
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                startSlideShow();
              }}
              onMouseMove={handleMouseMove}
              onClick={handleNextImage}
            >
              {/* Foto stamp - selalu tampil */}
              <img
                src={heros[currentIndex].stamp}
                onClick={handleNextImage}
                className={`h-45 md:h-55 lg:h-65 object-cover transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}
              />

              {/* Foto original - di atas stamp, di-mask dengan radial gradient */}
              <img
                src={heros[currentIndex].original}
                className={`
                  absolute inset-0
                  h-45 md:h-55 lg:h-65 object-cover
                  transition-opacity duration-300
                  ${isFading ? "opacity-0" : "opacity-100"}
                `}
                style={{
                  maskImage: isHovered
                    ? `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, black 50%, transparent 71%)`
                    : "radial-gradient(circle 0px at 50% 50%, black 0%, transparent 0%)",
                  WebkitMaskImage: isHovered
                    ? `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, black 50%, transparent 71%)`
                    : "radial-gradient(circle 0px at 50% 50%, black 0%, transparent 0%)",
                  transition: "mask-image 0.1s ease, opacity 0.3s",
                }}
              />
            </div>
          </StampFrame>
          <img
            src={PostMark}
            alt="Frame"
            className="
              absolute top-[69%] right-[55%]
              h-25 md:h-30 lg:h-35
              rotate-354 
              object-cover 
              pointer-events-none
            "
          />
          <img
            src={PostMark2}
            alt="Frame"
            className="
              absolute bottom-[70%] left-[50%]
              h-15 md:h-20 lg:h-25
              rotate-360 
              object-cover 
              pointer-events-none
            "
          />
        </div>
        {/* Nama & Okupasi - kiri bawah */}
        <div
          className="
            absolute bottom-[8%] left-[6%]
            flex flex-col gap-4
            pr-8 text-text
          "
        >
          {/* NAME */}
          <div className="flex flex-col gap-1">
            <p className="text-xs md:text-sm lg:text-md tracking-[0.3em] text-muted font-bold">
              Name:
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight">
              M Rashif Aminurrohim
            </h1>
            <div className="h-px max-w-xs w-full border-b border-dashed border-zinc-400" />
          </div>

          {/* OCCUPATION */}
          <div className="flex flex-col gap-1">
            <p className="text-xs md:text-sm lg:text-md tracking-[0.3em] text-muted font-bold">
              OCCUPATION:
            </p>
            <p className="text-sm md:text-lg lg:text-2xl font-bold tracking-widest">
              WEB & MOBILE DEVELOPER
            </p>
            <div className="h-px max-w-xs w-full border-b border-dashed border-zinc-400" />
          </div>

          {/* FROM */}
          <div className="flex flex-col gap-1">
            <p className="text-xs md:text-sm lg:text-md tracking-[0.3em] text-muted font-bold">
              FROM:
            </p>
            <p className="text-sm md:text-lg lg:text-2xl font-bold tracking-widest">
              BANDUNG, INDONESIA
            </p>
            <div className="h-px max-w-xs w-full border-b border-dashed border-zinc-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

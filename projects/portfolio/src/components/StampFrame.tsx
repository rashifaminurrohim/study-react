type Props = {
  children: React.ReactNode;
};

export default function StampFrame({ children }: Props) {
  return (
    <div className="relative inline-block text-primary drop-shadow-[1px_1px_1px_rgba(0,0,0,0.25)]">
      {/* SVG stamp border */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <mask id="stamp-mask">
            {/* area terlihat */}
            <rect width="100%" height="100%" fill="white" />

            {/* lubang perforasi */}
            {Array.from({ length: 10 }).map((_, i) => (
              <circle key={`t-${i}`} cx={i * 10} cy="0" r="2.5" fill="black" />
            ))}
            {Array.from({ length: 16 }).map((_, i) => (
              <circle
                key={`b-${i}`}
                cx={i * 10}
                cy="100"
                r="2.5"
                fill="black"
              />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <circle key={`l-${i}`} cx="0" cy={i * 8.3} r="2.5" fill="black" />
            ))}
            {Array.from({ length: 13 }).map((_, i) => (
              <circle
                key={`r-${i}`}
                cx="100"
                cy={i * 8.3}
                r="2.5"
                fill="black"
              />
            ))}
          </mask>
        </defs>

        {/* warna border stamp */}
        <rect width="100%" height="100%" fill="currentColor" mask="url(#stamp-mask)" />
      </svg>

      {/* CONTENT */}
      <div className="relative z-10 p-2">
        <div
          className="
            overflow-hidden
            rounded-xs
            border border-black/1
            shadow-inner
            bg-primary
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-secondary pt-20">
      <div className="flex flex-col mx-auto max-w-6xl items-center gap-6">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-zinc-200" />
        {/* Name */}
        <h1>Rashif Aminurrohim</h1>
        {/* Description */}
        <p className="max-w-xl text-center">
          Short introduction text goes here
        </p>
        <button>Download CV</button>
      </div>
    </div>
  );
}

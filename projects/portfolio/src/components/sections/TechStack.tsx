export default function TechStack() {
  return (
    <div className="bg-primary">
      <div className="bg-secondary rounded-b-[100px] py-10" />
      <div className="flex flex-col items-center gap-8 pt-20">
        {/* Title */}
        <h2>Tech Stack</h2>

        {/* Icon Row */}
        <div className="flex items-center gap-8">
          <div className="w-10 h-10 bg-zinc-200 rounded" />
          <div className="w-10 h-10 bg-zinc-200 rounded" />
          <div className="w-10 h-10 bg-zinc-200 rounded" />
          <div className="w-10 h-10 bg-zinc-200 rounded" />
          <div className="w-10 h-10 bg-zinc-200 rounded" />
          <div className="w-10 h-10 bg-zinc-200 rounded" />
        </div>
      </div>
    </div>
  );
}

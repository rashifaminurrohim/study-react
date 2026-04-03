export default function Footer() {
  return (
    <footer className="py-10 bg-primary mx-1 rounded-b-[100px]">
        <div className="h-px w-7xl mx-auto bg-zinc-300 my-8"/>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-row justify-between gap-4">
          {/* Text */}
          <p>&copy; 2026 Rashif Aminurrohim</p>

          {/* Social */}
          <div className="flex gap-4">
            <div className="w-5 h-5 bg-zinc-300 rounded" />
            <div className="w-5 h-5 bg-zinc-300 rounded" />
            <div className="w-5 h-5 bg-zinc-300 rounded" />
            <div className="w-5 h-5 bg-zinc-300 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
}

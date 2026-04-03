export default function Projects() {
  return (
    <div className="bg-secondary">
      <div className="bg-primary rounded-b-[100px] py-10"/>
      <div className="flex flex-col mx-auto max-w-6xl gap-10 p-10 py-20">
        {/* Title */}
        <h2 className="text-center">Projects</h2>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Card */}
          <div className="rounded-2xl bg-zinc-100 overflow-hidden">
            <div className="h-40 bg-zinc-200" />

            <div className="p-6">
              <h3>Project Name</h3>
              <p>Short description</p>
              <button>View</button>
            </div>
          </div>

          <div className="rounded-2xl bg-zinc-100 overflow-hidden">
            <div className="h-40 bg-zinc-200" />

            <div className="p-6">
              <h3>Project Name</h3>
              <p>Short description</p>
              <button>View</button>
            </div>
          </div>

          <div className="rounded-2xl bg-zinc-100 overflow-hidden">
            <div className="h-40 bg-zinc-200" />

            <div className="p-6">
              <h3>Project Name</h3>
              <p>Short description</p>
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary rounded-t-[100px] py-10" />
    </div>
  );
}

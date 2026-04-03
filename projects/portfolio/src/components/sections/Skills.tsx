export default function Skills() {
  return (
    <div className="bg-secondary">
      <div className="bg-primary rounded-b-[100px] py-10" />
      <div className="flex flex-col mx-auto max-w-6xl gap-10 p-10 pt-20">

        {/* title */}
        <h2 className="text-center">
          What I do
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Card */}
          <div className="p-6 rounded-2xl bg-zinc-100">
            <div className="w-10 h-10 bg-zinc-300 rounded mb-4"/>
            <h3>Frontend Development</h3>
            <p>Short description</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-zinc-100">
            <div className="w-10 h-10 bg-zinc-300 rounded mb-4" />
            <h3>UI Implementation</h3>
            <p>Short description</p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-100">
            <div className="w-10 h-10 bg-zinc-300 rounded mb-4" />
            <h3>Responsive Design</h3>
            <p>Short description</p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-100">
            <div className="w-10 h-10 bg-zinc-300 rounded mb-4" />
            <h3>Performance</h3>
            <p>Short description</p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-100">
            <div className="w-10 h-10 bg-zinc-300 rounded mb-4" />
            <h3>Accessibility</h3>
            <p>Short description</p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-100">
            <div className="w-10 h-10 bg-zinc-300 rounded mb-4" />
            <h3>Testing</h3>
            <p>Short description</p>
          </div>
        </div>

      </div>
    </div>
  )
}
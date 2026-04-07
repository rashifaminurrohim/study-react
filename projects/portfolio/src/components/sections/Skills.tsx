export default function Skills() {
  return (
    <div className="bg-secondary">
      <div className="bg-primary rounded-b-[100px] py-10" />
      <div className="flex flex-col mx-auto max-w-6xl gap-10 p-10 pt-20">
        {/* title */}
        <h2 className="text-heading text-center">What I do</h2>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Card */}
          <div className="p-6 rounded-2xl bg-zinc-100">
            <div className="w-10 h-10 bg-zinc-300 rounded mb-4" />
            <h3 className="text-subheading">Web Development</h3>
            <p className="text-paragraph">
              Build end-to-end web apps using React, REST APIs, and backend
              frameworks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-100">
            <div className="w-10 h-10 bg-zinc-300 rounded mb-4" />
            <h3 className="text-subheading">Mobile Development</h3>
            <p className="text-paragraph">
              Build modern Android applications using Kotlin, MVVM, and scalable
              architecture.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-100">
            <div className="w-10 h-10 bg-zinc-300 rounded mb-4" />
            <h3 className="text-subheading">Clean Architecture</h3>
            <p className="text-paragraph">
              Writing structured, maintainable, and well-organized code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

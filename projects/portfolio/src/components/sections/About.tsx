export default function About() {
  return (
    <div className="bg-primary">
      <div className="bg-secondary rounded-b-[100px] py-10" />

      <div className="max-w-6xl mx-auto px-6 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT — About */}
          <div>
            <h2 className="text-heading mb-6 text-center">About Me</h2>

            <p className="text-paragraph mb-4">
              Hi! I'm Rashif, a software developer with a strong interest in
              Mobile and Web development. I enjoy building clean, scalable
              applications and turning ideas into structured, user-friendly
              solutions. I'm currently focused on improving my skills in modern
              web technologies while continuing to deepen my experience in
              mobile development. I'm particularly interested in clean
              architecture, maintainable code, and creating interfaces that feel
              simple and intuitive.
            </p>

            <p className="text-paragraph">
              Outside of coding, I enjoy working out, watching movies, and
              continuously learning things that help me grow as a developer.
            </p>
          </div>

          {/* RIGHT — Experience */}
          <div className="flex flex-col items-center">
            <h3 className="text-heading font-semibold mb-6 text-center">
              Experience
            </h3>

            <div className="space-y-6 max-w-md w-full">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 text-paragraph whitespace-nowrap">
                  <p>Agt — Oct 2025</p>
                </div>
                <div className="col-span-8">
                  <p className="font-medium">Cloud Computing Cohort</p>
                  <p className="text-sm text-zinc-500">Orbit Future Academy</p>
                  <p className="text-sm text-zinc-600 mt-2">
                    Built Android applications using Kotlin, MVVM, and clean
                    architecture.
                  </p>
                </div>
              </div>
            </div>
            <br />

            <div className="space-y-6 max-w-md w-full">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 text-paragraph whitespace-nowrap">
                  <p>Feb — Jul 2025</p>
                </div>
                <div className="col-span-8">
                  <p className="font-medium">
                    Fullstack Web Development Cohort
                  </p>
                  <p className="text-sm text-zinc-500">DBS Coding Camp</p>
                  <p className="text-sm text-zinc-600 mt-2">
                    Built Android applications using Kotlin, MVVM, and clean
                    architecture.
                  </p>
                </div>
              </div>
            </div>
            <br />

            <div className="space-y-6 max-w-md w-full">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 text-paragraph whitespace-nowrap">
                  <p>Oct — Feb 2025</p>
                </div>
                <div className="col-span-8">
                  <p className="font-medium">Intern</p>
                  <p className="text-sm text-zinc-500">Taspen Bandung</p>
                  <p className="text-sm text-zinc-600 mt-2">
                    Scanning, Managing Claims.
                  </p>
                </div>
              </div>
            </div>
            <br />

            <div className="space-y-6 max-w-md w-full">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 text-paragraph whitespace-nowrap">
                  <p>Feb — Jul 2024</p>
                </div>
                <div className="col-span-8">
                  <p className="font-medium">Android Development Cohort</p>
                  <p className="text-sm text-zinc-500">Bangkit Academy</p>
                  <p className="text-sm text-zinc-600 mt-2">
                    Built Android applications using Kotlin, MVVM, and clean
                    architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { LiaDownloadSolid } from "react-icons/lia";

export default function About() {
  const experiences = [
    {
      role: "Cloud Computing Trainee",
      place: "Orbit Future Academy",
      desc: "Learned cloud fundamentals and deployed applications using core cloud services.",
      period: "Agt — Oct 2025",
    },
    {
      role: "Fullstack Web Development Cohort",
      place: "DBS Coding Camp 2025",
      desc: "Built fullstack web applications using HTML, CSS, JS, React and Hapijs.",
      period: "Feb — Jul 2025",
    },
    {
      role: "Operations Assistant Intern",
      place: "PT Taspen Persero Bandung",
      desc: "Performed document digitization, assisted in claims processing, and managed archival records.",
      period: "Oct — Feb 2025",
    },
    {
      role: "Android Development Cohort",
      place: "Bangkit Academy 2024",
      desc: "Built Android applications using Kotlin, MVVM, and clean architecture.",
      period: "Feb — Jul 2024",
    },
  ];

  return (
    <section
      className="
        relative
        py-24 -mb-24
      bg-primary 
        border border-t-0 border-x-2 border-b-2 rounded-b-[100px] border-zinc-100 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.07)]
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start ">
          {/* LEFT — About */}
          <section className="flex flex-col items-center justify-evenly">
            <h2 className="text-heading mb-6">About Me</h2>

            <div className="mx-3 text-paragraph text-zinc-600">
              <p>
                Hi! I'm Rashif, a software developer with a strong interest in
                Mobile and Web development. I enjoy building clean, scalable
                applications and turning ideas into structured, user-friendly
                solutions. I'm currently focused on improving my skills in
                modern web technologies while continuing to deepen my experience
                in mobile development. I'm particularly interested in clean
                architecture, maintainable code, and creating interfaces that
                feel simple and intuitive.
              </p>
              <br />
              <p>
                Outside of coding, I enjoy working out, watching movies, and
                continuously learning things that help me grow as a developer.
              </p>
            </div>

            <a
              href="/cv-muhammad-rashif-a.pdf"
              download
              className="bg-text mt-12 px-5 py-4 rounded-full border border-black border-b-2 shadow-sm transition-all active:translate-y-px active:border-b-2 active:shadow-none"
            >
              <div className="flex justify-evenly items-center gap-2">
                <p className="text-primary text-xs">Download CV</p>
                <LiaDownloadSolid className="text-primary w-4 h-4" />
              </div>
            </a>
          </section>

          {/* RIGHT — Experience */}
          <section className="flex flex-col items-center">
            <h3 className="text-heading mb-6 text-center">Experience</h3>

            {experiences.map((experience) => (
              <div className="grid lg:grid-cols-12 max-w-md mx-3 gap-1 lg:gap-4">
                <div className="lg:col-span-4 text-paragraph whitespace-nowrap">
                  <p>{experience.period}</p>
                </div>
                <div className="lg:col-span-8 mb-4">
                  <p className="font-medium text-accent">{experience.role}</p>
                  <p className="text-sm text-zinc-400 mb-1">{experience.place}</p>
                  <p className="text-sm text-zinc-600">{experience.desc}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}

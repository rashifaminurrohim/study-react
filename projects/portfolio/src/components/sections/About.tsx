export default function About() {
  return (
    <div className="bg-primary">
      <div className="bg-secondary rounded-b-[100px] py-10" />
      <div className="flex flex-col mx-auto max-w-6xl items-center gap-6 pt-20">
        {/* Title */}
        <h2>About Me</h2>

        {/* Paragraphs */}
        <p className="max-w-2xl text-center">
          I am an Informatics student who focuses on frontend development...
        </p>
        <p className="max-w-2xl text-center">
          I enjoy building clean interfaces and learning modern web
          technologies...
        </p>

        <button>Download CV</button>
      </div>
    </div>
  );
}

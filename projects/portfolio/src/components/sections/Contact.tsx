export default function Contact() {
  return (
    <div className="bg-primary py-10">
      <div className="flex flex-col items-center mx-auto max-w-6xl gap-8">
        {/* Icon */}
        <div className="w-36 h-36 rounded-full bg-zinc-200" />

        {/* Title */}
        <h2 className="text-heading text-center">Tell me about your next project</h2>

        {/* Buttons */}
        <div className="flex gap-4">
          <button>Email me</button>
          <button>WhatsApp</button>
        </div>
      </div>
    </div>
  );
}

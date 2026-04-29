import { Icon } from "@iconify/react";

export default function NotDeployedModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-secondary rounded-md border-2 border-zinc-200 shadow-lg p-8 max-w-sm w-full mx-4 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <Icon
          icon="noto:grinning-face-with-sweat"
          className="text-6xl text-muted"
        />

        {/* Text */}
        <div className="text-center flex flex-col gap-1">
          <h3 className="font-bold tracking-widest text-lg">
            Oops..
          </h3>
          <p className="text-xs tracking-[0.2em] text-muted">
            ADDRESS NOT FOUND
          </p>
          <div className="h-px w-full border-b border-dashed border-zinc-400 my-2" />
          <p className="text-sm text-muted tracking-wide">
            This project has not been uploaded or deployed yet.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-2 px-6 py-2 border-2 border-zinc-300 text-sm tracking-widest hover:border-accent hover:text-accent transition-colors duration-200"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

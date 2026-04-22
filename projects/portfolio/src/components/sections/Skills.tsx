import { FaCode } from "react-icons/fa6";
import { LuRocket, LuWrench } from "react-icons/lu";

export default function Skills() {
  return (
    <div className="bg-secondary border border-t-0 border-b-0 border-zinc-200 border-x-2">
      <div className="flex flex-col mx-auto max-w-6xl gap-10 p-10 pt-40 ">
        {/* title */}
        <h2 className="text-heading text-center">What I do</h2>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Card */}
          <div className="p-6 rounded-2xl bg-primary border-2 border-white shadow-sm">
            <div className="flex items-center gap-4">
              <FaCode className="w-16 h-16 bg-zinc-100 text-accent shadow-inner rounded mb-4 p-1x" />
              <h3 className="text-heading font-semibold">Build</h3>
            </div>
            <p className="text-paragraph">
              Build end-to-end web and mobile applications using modern
              technologies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-primary border-2 border-white shadow-sm">
            <div className="flex items-center gap-4">
              <LuRocket className="w-16 h-16 bg-zinc-100 text-accent shadow-inner rounded mb-4 p-1" />
              <h3 className="text-heading font-semibold">Deploy</h3>
            </div>
            <p className="text-paragraph">
              Deploying applications and managing production environments.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-primary border-2 border-white shadow-sm">
            <div className="flex items-center gap-4">
              <LuWrench className="w-16 h-16 bg-zinc-100 text-accent shadow-inner rounded mb-4 p-1" />
              <h3 className="text-heading font-semibold">Maintain</h3>
            </div>
            <p className="text-paragraph">
              Refactoring and improving code for scalability and stability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

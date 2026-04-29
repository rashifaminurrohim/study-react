import { Icon } from "@iconify/react";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section className="bg-secondary border border-t-0 border-x-2 border-b-0 border-zinc-200">
      <div className="flex flex-col max-w-6xl mx-auto p-10 pt-40 gap-10">
        {/* title */}
        <h2 className="text-heading text-center">What I do</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6  bg-primary border-2 border-white rounded-2xl shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="flex items-center mb-4 gap-4">
                <Icon
                  icon={skill.icon}
                  className="w-16 h-16 p-1 bg-zinc-100 text-accent shadow-inner rounded"
                ></Icon>
                <h3 className="text-heading font-semibold">{skill.title}</h3>
              </div>
              <p className="text-paragraph">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

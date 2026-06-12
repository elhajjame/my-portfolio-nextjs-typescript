import Image from "next/image";
import type { Skill } from "@/app/_lib/skills";

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className=" justify-between p-3.5">
      <h2 className="text-2xl select-none border-b pb-4 border-slate-800/65">
        {skill.title}
      </h2>
      <div className="font-display font-medium text-sm text-slate-900 dark:text-slate-200">
        {skill.technologies.map((tech) => (
          <div
            style={{ transition: "0.3s" }}
            className=" hover:scale-[1.06] flex items-center my-3 gap-4 p-3.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-tiny hover:shadow-sm"
            key={tech.id}
          >
            <Image src={tech.icon} alt="" width={30} height={30} />
            <h3 className="font-display font-medium text-sm text-slate-900 dark:text-slate-200">
              {tech.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;

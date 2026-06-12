import SectionHeader from "../_components/SectionHeader";
import SkillCard from "../_components/skills/SkillCard";
import { skills } from "@/app/_lib/skills";
export const metadata = { title: "Skills" };
function page() {
  return (
    <div>
      <SectionHeader
        title="Technical Frameworks"
        description="Professional skill nodes classified by operational scope. Each cataloged inside structured arrays."
      />

      <div className="grid grid-cols-12 gap-8">{skills.map(skill =>(<div className="col-span-4" key={skill.id}>
        <SkillCard skill={skill}/>
      </div>))}</div>
    </div>
  );
}

export default page;

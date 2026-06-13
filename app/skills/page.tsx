"use client";

import { motion } from "framer-motion";
import SectionHeader from "../_components/SectionHeader";
import SkillCard from "../_components/skills/SkillCard";
import { skills } from "@/app/_lib/skills";
// export const metadata = { title: "Skills" };
function page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <div>
        <SectionHeader
          title="Technical Frameworks"
          description="Professional skill nodes classified by operational scope. Each cataloged inside structured arrays."
        />

        <div className="grid grid-cols-12 gap-8">
          {skills.map((skill) => (
            <div className="col-span-4" key={skill.id}>
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default page;

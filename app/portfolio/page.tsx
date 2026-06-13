"use client";
import ProjectCard from "../_components/projects/ProjectCrad";
import SectionHeader from "@/app/_components/SectionHeader";
import { motion } from "framer-motion";

import { projects } from "@/app/_lib/projects";

{
  /* export const metadata = {
  title: "Portfolio",
  }; */
}

export default function Page({}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <SectionHeader
          title="Project Repositories"
          description="Inspect the reusable project cards for each compiled prototype. All stored statically in structural files."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

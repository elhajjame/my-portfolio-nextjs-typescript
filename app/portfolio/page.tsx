import ProjectCard from "../_components/projects/ProjectCrad";
import SectionHeader from "@/app/_components/SectionHeader";
import { projects } from "@/app/_lib/projects";
export const metadata = {
  title: "Portfolio",
};
console.log(projects);
export default function Page({}) {
  return (
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
  );
}

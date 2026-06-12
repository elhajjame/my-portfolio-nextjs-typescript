import ProjectCard from "../_components/projects/ProjectCrad";
import SectionHeader from "@/app/_components/SectionHeader";

export const metadata = {
  title: "Portfolio",
};

export default function Page() {
  return (
    <div>
      <SectionHeader
        title="Project Repositories"
        description="Inspect the reusable project cards for each compiled prototype. All stored statically in structural files."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

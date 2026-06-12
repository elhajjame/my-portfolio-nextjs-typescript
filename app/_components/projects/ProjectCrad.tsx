// import "@/app/style/projectCard.css";
import type { Project } from "@/app/_lib/projects";
interface ProjectsCardProps {
  project: Project;
}
export default function ProjectCard({ project }: ProjectsCardProps) {
  return (
    <div
      style={{ transition: "0.3s" }}
      className="hover:scale-[1.02] group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] p-6 backdrop-blur-md shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.015)] overflow-hidden transition-shadow"
    >
      <div className="project-card__line"></div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-750 dark:text-gray-300 border border-slate-200/30 dark:border-white/5 shadow-sm">
            {"</>"}
          </div>

          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider font-semibold border border-indigo-400/20 bg-indigo-400/5 text-indigo-400">
            ✨ Featured
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-455 dark:group-hover:text-cyan-400 transition-colors line-clamp-1 mb-2">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-slate-650 dark:text-gray-400 mb-6 line-clamp-4">
          {project.description}
        </p>
      </div>

      <div className="">
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              className="px-2 py-0.5 rounded-md text-xs font-medium border border-slate-150/50 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.015] text-slate-600 dark:text-gray-300 shadow-tiny font-sans"
              key={tech.id}
            >
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
          <a
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-650 hover:text-slate-950 dark:text-gray-400 dark:hover:text-white transition-colors"
            href={project.repoLink}
            target="_blank"
            rel="noreferrer"
          >
            Repository
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50/50 hover:bg-slate-100 dark:bg-white/[0.02] dark:hover:bg-white/10 dark:hover:border-white/20 text-cyan-500 dark:text-cyan-400 shadow-sm transition-all"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

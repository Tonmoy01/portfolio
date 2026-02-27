import Image from "next/image";
import { Icon } from "@iconify/react";
import { projects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${project.featured ? "md:col-span-2" : ""} group flex flex-col rounded-2xl overflow-hidden bg-surface-tertiary border border-border-primary hover:border-border-strong shadow-sm hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-1 transition-all duration-500 ease-out`}
    >
      {/* Image area with padding */}
      <div className="relative p-3 pb-0">
        <div className={`relative overflow-hidden rounded-xl ${project.featured ? "h-56 md:h-72" : "h-48 md:h-56"}`}>
          <Image
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            fill
            sizes={
              project.featured
                ? "(max-width: 768px) 100vw, 90vw"
                : "(max-width: 768px) 100vw, 45vw"
            }
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Hover arrow overlay */}
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <Icon icon="lucide:arrow-up-right" width={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="px-4 py-4 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-text-heading truncate">
            {project.title}
          </h3>
          <p className="text-sm text-text-muted mt-0.5 truncate">
            {project.description}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.tags && (
            <div className="hidden sm:flex gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-text-muted border border-border-primary px-2.5 py-1 rounded-full bg-page-bg/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <Icon
            icon="lucide:arrow-up-right"
            width={16}
            className="text-text-faint group-hover:text-text-secondary transition-colors"
          />
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mb-32 animate-enter delay-300">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-text-title">Selected Work</h2>
          <p className="text-sm text-text-muted mt-1">A collection of products, dashboards, and experiments.</p>
        </div>
        <a
          href="https://github.com/Tonmoy01"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1 text-xs font-medium text-text-muted hover:text-text-secondary transition-colors group/link border border-border-primary px-3 py-1.5 rounded-full hover:bg-surface-elevated"
        >
          View GitHub <Icon icon="lucide:arrow-up-right" width={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

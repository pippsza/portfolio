import Icon from "./Icon";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  viewProject: string;
  viewCode: string;
  index: number;
}

export default function ProjectCard({
  project,
  viewProject,
  viewCode,
  index,
}: ProjectCardProps) {
  return (
    <div
      class={`group relative rounded-2xl overflow-hidden bg-surface/30 backdrop-blur-sm border border-border/30
              hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5
              animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient background on hover */}
      <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top accent bar */}
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div class="relative p-6 md:p-8">
        {/* Project number */}
        <div class="absolute top-4 right-4 md:top-6 md:right-6">
          <span class="text-5xl md:text-6xl font-bold text-border/30 group-hover:text-accent/20 transition-colors duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div class="relative z-10 space-y-4">
          {/* Title with icon */}
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
              <Icon name="Layers" size={20} class="text-accent" />
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-text-dark group-hover:text-accent transition-colors duration-300 pt-1">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p class="text-text-muted leading-relaxed text-sm md:text-base line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div class="flex flex-wrap gap-2 pt-2">
            {project.tags.slice(0, 5).map((tag, tagIndex) => (
              <span
                key={tag}
                class="px-3 py-1 text-xs font-medium rounded-full bg-primary/50 text-color
                       border border-border/50 hover:border-accent/50 hover:text-accent
                       transition-all duration-300"
                style={{ animationDelay: `${tagIndex * 0.05}s` }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span class="px-3 py-1 text-xs font-medium rounded-full bg-primary/30 text-text-muted">
                +{project.tags.length - 5}
              </span>
            )}
          </div>

          {/* Actions */}
          <div class="flex items-center gap-3 pt-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-accent text-primary font-medium text-sm
                       hover:bg-accent-hover transition-all duration-300
                       hover:shadow-lg hover:shadow-accent/30 btn-hover"
              >
                <Icon name="ExternalLink" size={16} />
                {viewProject}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       border border-border/50 text-text-muted text-sm font-medium
                       hover:border-accent/50 hover:text-accent
                       transition-all duration-300"
              >
                <Icon name="Github" size={16} />
                {viewCode}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </div>
  );
}

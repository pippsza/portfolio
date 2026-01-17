import type { Experience } from "../constants/data";
import Icon from "./Icon";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <div
      class="relative p-6 rounded-xl bg-surface border border-border
             hover:border-accent hover:bg-surface-elevated
             transition-all duration-300 group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Timeline dot */}
      <div class="absolute -left-3 top-8 w-6 h-6 rounded-full bg-accent flex items-center justify-center
                  border-4 border-bg-dark hidden md:flex">
        <div class="w-2 h-2 rounded-full bg-primary" />
      </div>

      {/* Header */}
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h3 class="text-xl font-bold text-text-dark group-hover:text-accent transition-colors duration-300">
            {experience.position}
          </h3>
          <div class="flex items-center gap-2 mt-1">
            <Icon name="Briefcase" size={16} class="text-accent" />
            <span class="text-accent font-medium">{experience.company}</span>
          </div>
        </div>

        <div class="flex flex-col md:items-end gap-1 text-sm text-text-muted">
          <div class="flex items-center gap-2">
            <Icon name="Calendar" size={14} class="text-text-muted" />
            <span>{experience.period}</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="MapPin" size={14} class="text-text-muted" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p class="text-text-muted leading-relaxed mb-4">
        {experience.description}
      </p>

      {/* Technologies */}
      <div class="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            class="px-3 py-1 text-xs font-medium rounded-full
                   bg-accent/10 text-accent border border-accent/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

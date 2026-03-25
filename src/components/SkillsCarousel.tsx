import Icon from "./Icon";

interface Skill {
  name: string;
  iconName: string;
}

interface SkillsCarouselProps {
  skills: Skill[];
  category: string;
  speed?: number;
}

export default function SkillsCarousel({
  skills,
  category,
  speed = 25,
}: SkillsCarouselProps) {
  // Quadruple the skills array for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div class="mb-8">
      {/* Category label */}
      <div class="container mx-auto px-6 mb-4">
        <span class="text-sm font-semibold text-accent uppercase tracking-wider">
          {category}
        </span>
      </div>

      {/* Full-width carousel container */}
      <div class="relative overflow-hidden py-3">
        {/* Gradient fade on edges - using CSS variable for theme support */}
        <div class="carousel-fade-left" />
        <div class="carousel-fade-right" />

        <div
          class="flex gap-3 md:gap-4 animate-scroll"
          style={
            {
              width: "max-content",
              "--scroll-speed": `${speed}s`,
            } as any
          }
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              class="group relative flex-shrink-0"
            >
              <div
                class="flex items-center gap-2.5 px-4 py-2.5 rounded-lg
                          bg-surface border border-border
                          hover:border-accent hover:bg-surface-elevated
                          transition-all duration-200 cursor-default"
              >
                {/* Icon */}
                <div class="w-6 h-6 flex items-center justify-center text-accent">
                  <Icon name={skill.iconName} size={18} />
                </div>

                {/* Skill name - high contrast */}
                <span
                  class="font-medium text-sm whitespace-nowrap"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
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
  speed = 30,
}: SkillsCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Double the skills array for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div class="mb-12">
      <h3 class="text-2xl font-bold mb-6 text-center">{category}</h3>
      <div
        class="relative overflow-hidden py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient overlays for fade effect */}
        <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
        <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

        <div
          class={`flex gap-6 ${isPaused ? "" : "animate-scroll"}`}
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
              class="group relative flex-shrink-0 px-6 py-4 rounded-2xl border-2 border-primary/20 bg-bg-dark/50 backdrop-blur-sm hover:border-accent hover:bg-accent/5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
              style={{
                minWidth: "180px",
              }}
            >
              <div class="flex flex-col items-center gap-3">
                <div class="relative">
                  <div class="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div class="relative p-3 rounded-xl bg-primary/10 group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon name={skill.iconName} size={32} />
                  </div>
                </div>
                <span class="font-semibold text-sm text-center group-hover:text-accent transition-colors duration-300">
                  {skill.name}
                </span>
              </div>

              {/* Animated border effect */}
              <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute inset-0 rounded-2xl border-2 border-accent/50 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

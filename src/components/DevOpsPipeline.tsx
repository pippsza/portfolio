import { devOpsPipeline } from "../constants/data";
import Icon from "./Icon";
import Card from "./ui/Card";

export default function DevOpsPipeline() {
  return (
    <div class="relative">
      {/* Pipeline stages */}
      <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {devOpsPipeline.map((stage, index) => (
          <div
            key={stage.name}
            class="flex flex-col md:flex-row items-center w-full md:w-auto"
          >
            {/* Stage card */}
            <Card class="w-full md:w-48 text-center group cursor-pointer">
              <div class="flex flex-col items-center gap-4">
                {/* Icon with animated glow */}
                <div
                  class="relative p-4 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${stage.color}20`,
                    boxShadow: `0 0 20px ${stage.color}40`,
                  }}
                >
                  <Icon name={stage.iconName} size={32} color={stage.color} />

                  {/* Pulse animation on hover */}
                  <div
                    class="absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-75"
                    style={{ backgroundColor: stage.color }}
                  />
                </div>

                {/* Stage info */}
                <div>
                  <h4 class="font-bold text-lg mb-1">{stage.name}</h4>
                  <p
                    class="text-sm font-semibold mb-2"
                    style={{ color: stage.color }}
                  >
                    {stage.tool}
                  </p>
                  <p class="text-xs text-gray-400">{stage.description}</p>
                </div>
              </div>
            </Card>

            {/* Arrow connector (not on last item) */}
            {index < devOpsPipeline.length - 1 && (
              <div class="hidden md:block mx-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  class="text-primary animate-pulse"
                >
                  <path
                    d="M 10 20 L 30 20 M 25 15 L 30 20 L 25 25"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}

            {/* Vertical arrow for mobile */}
            {index < devOpsPipeline.length - 1 && (
              <div class="md:hidden my-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  class="text-primary animate-pulse"
                >
                  <path
                    d="M 20 10 L 20 30 M 15 25 L 20 30 L 25 25"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Animated flow line (desktop only) */}
      <div class="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -z-10 opacity-20">
        <div class="h-full bg-gradient-to-r from-primary to-accent animate-pulse" />
      </div>
    </div>
  );
}

import { devOpsPipeline } from "../constants/data";
import Icon from "./Icon";

export default function DevOpsPipeline() {
  return (
    <div class="relative">
      {/* Pipeline stages */}
      <div class="flex flex-col md:grid grid-cols-5 items-center justify-between gap-4 md:gap-2">
        {devOpsPipeline.map((stage, index) => (
          <div
            key={stage.name}
            class="flex flex-col h-full md:flex-row items-center w-full md:w-auto animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Stage card */}
            <div
              class="w-full  p-4 h-full  rounded-xl bg-surface border border-border
                        hover:border-accent hover:bg-surface-elevated transition-all duration-300 group cursor-pointer text-center"
            >
              <div class="flex flex-col items-center gap-3">
                {/* Icon */}
                <div class="relative p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <Icon name={stage.iconName} size={24} class="text-accent" />
                </div>

                {/* Stage info */}
                <div>
                  <span class="font-bold text-sm text-text-dark block">{stage.name}</span>
                  <p class="text-xs text-accent font-medium mt-0.5">
                    {stage.tool}
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow connector (not on last item) */}
            {index < devOpsPipeline.length - 1 && (
              <div class="hidden md:flex items-center mx-1">
                <div class="w-4 h-px bg-border" />
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  class="text-accent"
                >
                  <path
                    d="M 2 6 L 10 6 M 7 3 L 10 6 L 7 9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}

            {/* Vertical arrow for mobile */}
            {index < devOpsPipeline.length - 1 && (
              <div class="md:hidden my-2 flex flex-col items-center">
                <div class="h-3 w-px bg-border" />
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  class="text-accent"
                >
                  <path
                    d="M 6 2 L 6 10 M 3 7 L 6 10 L 9 7"
                    stroke="currentColor"
                    stroke-width="1.5"
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
    </div>
  );
}

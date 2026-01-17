import type { ComponentChildren } from "preact";

interface CardProps {
  children: ComponentChildren;
  class?: string;
  hover?: boolean;
}

export default function Card({
  children,
  class: className = "",
  hover = true,
}: CardProps) {
  const hoverStyles = hover
    ? "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
    : "";

  return (
    <div
      class={`bg-surface/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}

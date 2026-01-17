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
    ? "hover:scale-105 hover:shadow-2xl hover:border-primary/50"
    : "";

  return (
    <div
      class={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}

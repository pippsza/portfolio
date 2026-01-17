import type { ComponentChildren } from "preact";

interface ButtonProps {
  children: ComponentChildren;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  class?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  class: className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95";

  const variants = {
    primary:
      "bg-accent text-primary hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30",
    secondary:
      "bg-surface text-text-dark hover:bg-surface-elevated shadow-lg shadow-surface/20",
    outline:
      "border border-border text-text-dark hover:border-accent hover:text-accent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} class={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} class={classes}>
      {children}
    </button>
  );
}

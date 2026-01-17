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
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60",
    secondary:
      "bg-gradient-to-r from-secondary to-accent text-white shadow-lg shadow-secondary/50 hover:shadow-xl hover:shadow-secondary/60",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
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

interface BadgeProps {
  children: string;
  color?: "primary" | "secondary" | "accent" | "gray";
}

export default function Badge({ children, color = "primary" }: BadgeProps) {
  const colors = {
    primary: "bg-surface-elevated text-text-dark border-border",
    secondary: "bg-surface-elevated text-text-dark border-border",
    accent: "bg-surface-elevated text-accent border-accent/30",
    gray: "bg-surface-elevated text-text-muted border-border",
  };

  return (
    <span
      class={`inline-block px-3 py-1 text-sm font-medium rounded-full border ${colors[color]}`}
    >
      {children}
    </span>
  );
}

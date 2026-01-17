interface BadgeProps {
  children: string;
  color?: "primary" | "secondary" | "accent" | "gray";
}

export default function Badge({ children, color = "primary" }: BadgeProps) {
  const colors = {
    primary: "bg-primary/10 text-primary border-primary/30",
    secondary: "bg-secondary/10 text-secondary border-secondary/30",
    accent: "bg-accent/10 text-accent border-accent/30",
    gray: "bg-gray-800/50 text-gray-300 border-gray-700",
  };

  return (
    <span
      class={`inline-block px-3 py-1 text-sm font-medium rounded-full border ${colors[color]}`}
    >
      {children}
    </span>
  );
}

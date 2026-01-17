import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Layers,
  Atom,
  Smartphone,
  Palette,
  Code2,
  Rocket,
  Zap,
  Server,
  Database,
  Globe,
  Network,
  Container,
  GitBranch,
  Cloud,
  RefreshCw,
  Terminal,
  Package,
  ExternalLink,
  Bot,
  Figma,
  FileJson,
  Briefcase,
  Calendar,
  MapPin,
  // Discord,
  Send,
  Instagram,
  type LucideIcon,
} from "lucide-preact";

// Icon mapping object
const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Layers,
  Atom,
  Smartphone,
  Palette,
  Code2,
  Rocket,
  Zap,
  Server,
  Database,
  Globe,
  Network,
  Container,
  GitBranch,
  Cloud,
  RefreshCw,
  Terminal,
  Package,
  ExternalLink,
  Bot,
  Figma,
  FileJson,
  Briefcase,
  Calendar,
  MapPin,
  Send,
  Instagram,
};

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  class?: string;
}

export default function Icon({
  name,
  size = 24,
  color,
  class: className,
}: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }

  return <IconComponent size={size} color={color} class={className} />;
}

// Export the icon map for other components
export { iconMap };

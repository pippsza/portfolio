import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Sun, Moon } from "lucide-preact";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return (
      <button
        class="p-2 rounded-lg border border-gray-700 hover:border-primary transition-colors"
        aria-label="Toggle theme"
      >
        <div class="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      class="p-2 rounded-lg border border-gray-700 hover:border-primary transition-colors hover:scale-110 active:scale-95"
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon size={20} class="text-gray-700" />
      ) : (
        <Sun size={20} class="text-yellow-400" />
      )}
    </button>
  );
}

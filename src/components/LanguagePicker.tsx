import { useState } from "preact/hooks";
import { Globe, Check } from "lucide-preact";
import type { Locale } from "../constants/data";

interface LanguagePickerProps {
  currentLang: Locale;
  currentPath: string;
}

const languages: Record<Locale, { name: string; short: string }> = {
  en: { name: "English", short: "EN" },
  uk: { name: "Українська", short: "UA" },
  ru: { name: "Русский", short: "RU" },
};

export default function LanguagePicker({
  currentLang,
  currentPath,
}: LanguagePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getPathForLang = (newLang: Locale): string => {
    const pathWithoutLang = currentPath.replace(/^\/(en|uk|ru)/, "");
    return `/${newLang}${pathWithoutLang}`;
  };

  const handleLanguageChange = (newLang: Locale) => {
    localStorage.setItem("preferredLanguage", newLang);
    window.location.href = getPathForLang(newLang);
  };

  return (
    <div class="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        class="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 bg-surface/30 backdrop-blur-sm
               hover:border-accent/50 hover:bg-surface-elevated/50 transition-all duration-300 group"
        aria-label="Change language"
        title="Change language"
      >
        <Globe size={18} class="text-text-muted group-hover:text-accent transition-colors duration-300" />
        <span class="text-sm font-medium text-text-dark">
          {languages[currentLang].short}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div class="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div class="absolute right-0 mt-2 py-2 w-44 rounded-xl border border-border/50 bg-surface/95 backdrop-blur-md shadow-xl z-50 animate-fade-in">
            {(Object.keys(languages) as Locale[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                class={`w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-surface-elevated transition-colors duration-200 ${
                  currentLang === lang
                    ? "text-accent"
                    : "text-text-muted hover:text-text-dark"
                }`}
              >
                <span class="text-xs font-bold w-6 text-center bg-primary/50 rounded px-1 py-0.5">
                  {languages[lang].short}
                </span>
                <span class="text-sm">{languages[lang].name}</span>
                {currentLang === lang && (
                  <Check size={16} class="ml-auto text-accent" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

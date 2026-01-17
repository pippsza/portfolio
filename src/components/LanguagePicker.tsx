import { h } from "preact";
import { useState } from "preact/hooks";
import { Languages } from "lucide-preact";
import type { Locale } from "../constants/data";

interface LanguagePickerProps {
  currentLang: Locale;
  currentPath: string;
}

const languages: Record<Locale, { name: string; flag: string }> = {
  en: { name: "English", flag: "🇬🇧" },
  uk: { name: "Українська", flag: "🇺🇦" },
  ru: { name: "Русский", flag: "🇷🇺" },
};

export default function LanguagePicker({
  currentLang,
  currentPath,
}: LanguagePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getPathForLang = (newLang: Locale): string => {
    // Replace the current language in the path with the new one
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
        class="flex items-center gap-2 p-2 rounded-lg border border-gray-700 hover:border-primary transition-colors hover:scale-110 active:scale-95"
        aria-label="Change language"
        title="Change language"
      >
        <Languages size={20} />
        <span class="hidden sm:inline text-sm">
          {languages[currentLang].flag}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div class="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div class="absolute right-0 mt-2 py-2 w-48 rounded-lg border border-gray-700 bg-gray-900/95 backdrop-blur-md shadow-xl z-50">
            {(Object.keys(languages) as Locale[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                class={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-800 transition-colors ${
                  currentLang === lang
                    ? "text-primary font-semibold"
                    : "text-gray-300"
                }`}
              >
                <span class="text-xl">{languages[lang].flag}</span>
                <span>{languages[lang].name}</span>
                {currentLang === lang && (
                  <span class="ml-auto text-primary">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

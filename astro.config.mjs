import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://pippsza.dev",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "uk", "ru"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});

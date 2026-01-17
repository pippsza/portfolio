import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages configuration
  // Update these values for your deployment:
  // site: 'https://YOUR_USERNAME.github.io',
  // base: '/REPO_NAME',  // Remove if using custom domain

  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "uk", "ru"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});

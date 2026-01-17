# Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         PORTFOLIO ARCHITECTURE                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  USER VISITS ROOT (/)                                                │
│  ↓                                                                    │
│  Inline Script in <head> (BaseHead.astro)                           │
│  ↓                                                                    │
│  1. Check localStorage for 'preferredLanguage'                      │
│  2. If none, detect navigator.language                              │
│  3. Redirect to /{lang}/ (en/uk/ru)                                 │
└─────────────────────────────────────────────────────────────────────┘
                                ↓
┌─────────────────────────────────────────────────────────────────────┐
│  ASTRO ROUTING (astro.config.mjs)                                   │
│                                                                       │
│  i18n: {                                                             │
│    defaultLocale: 'en',                                              │
│    locales: ['en', 'uk', 'ru'],                                     │
│    routing: { prefixDefaultLocale: true }                           │
│  }                                                                   │
│                                                                       │
│  URLs Generated:                                                     │
│  /en/  →  src/pages/[lang]/index.astro (lang='en')                 │
│  /uk/  →  src/pages/[lang]/index.astro (lang='uk')                 │
│  /ru/  →  src/pages/[lang]/index.astro (lang='ru')                 │
└─────────────────────────────────────────────────────────────────────┘
                                ↓
┌─────────────────────────────────────────────────────────────────────┐
│  PAGE RENDER (src/pages/[lang]/index.astro)                         │
│                                                                       │
│  1. Import Layout.astro                                             │
│  2. Fetch data from constants/data.ts based on {lang}              │
│  3. Pass to Layout wrapper                                          │
└─────────────────────────────────────────────────────────────────────┘
                                ↓
┌─────────────────────────────────────────────────────────────────────┐
│  LAYOUT (src/layouts/Layout.astro)                                  │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  <head>                                                     │    │
│  │    - BaseHead.astro (SEO, meta tags, fonts)               │    │
│  │    - Theme detection script                                │    │
│  │    - Language redirect script                              │    │
│  │    - global.css (Tailwind v4 + @theme)                    │    │
│  │  </head>                                                   │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  <header>                                                   │    │
│  │    - Navigation (Home, About, Projects, Skills, Contact)   │    │
│  │    - LanguagePicker.tsx (client:load) ←── Preact          │    │
│  │    - ThemeToggle.tsx (client:load) ←── Preact             │    │
│  │  </header>                                                 │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  <main>                                                     │    │
│  │    - <slot /> (page content inserted here)                 │    │
│  │  </main>                                                   │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  <footer>                                                   │    │
│  │    - Copyright notice                                       │    │
│  │    - "Built with..." tech stack                            │    │
│  │  </footer>                                                 │    │
│  └────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────┘
                                ↓
┌─────────────────────────────────────────────────────────────────────┐
│  PAGE SECTIONS (in [lang]/index.astro)                              │
│                                                                       │
│  1. Hero Section                                                     │
│     - Gradient text with name                                       │
│     - Role description                                              │
│     - CTA buttons (Button.tsx client:load)                         │
│     - Social icons (Icon.tsx client:load)                          │
│                                                                       │
│  2. About Section                                                    │
│     - Title and description from dictionary[lang]                   │
│                                                                       │
│  3. Projects Section                                                 │
│     - Grid of Card.tsx (client:load)                               │
│     - Data from projects[lang]                                      │
│     - Badge.tsx for tags (client:load)                             │
│     - Button.tsx for links (client:load)                           │
│                                                                       │
│  4. Skills Section                                                   │
│     - 3 columns: Frontend, Backend, DevOps                         │
│     - Card.tsx for each category (client:load)                     │
│     - Icon.tsx for each skill (client:load)                        │
│                                                                       │
│  5. DevOps Pipeline Section                                         │
│     - DevOpsPipeline.tsx (client:load) ←── Custom component       │
│     - Animated stages with arrows                                   │
│                                                                       │
│  6. Contact Section                                                  │
│     - Social links with Button.tsx (client:load)                   │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  DATA FLOW                                                           │
│                                                                       │
│  src/constants/data.ts                                              │
│  ↓                                                                    │
│  Exported Constants:                                                 │
│  - socials: Social[] ──────────────→ Hero, Footer, Contact         │
│  - projects: Record<Locale, Project[]> ──→ Projects Section        │
│  - skills: SkillsByCategory ───────→ Skills Section               │
│  - devOpsPipeline: Stage[] ────────→ DevOps Section               │
│  - dictionary: Record<Locale, Dict> ─→ ALL UI text               │
│                                                                       │
│  Type Safety: TypeScript ensures correct usage everywhere          │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  STYLING ARCHITECTURE                                                │
│                                                                       │
│  global.css                                                          │
│  ├── @import "tailwindcss"                                          │
│  ├── @theme { ... }  ←── CSS Variables & Utilities                 │
│  ├── :root { ... }  ←── Dark theme (default)                       │
│  ├── :root[data-theme="light"] { ... }  ←── Light theme           │
│  ├── body::before { ... }  ←── Animated mesh gradient             │
│  └── body::after { ... }  ←── Grain texture                        │
│                                                                       │
│  Component Styles:                                                   │
│  - Tailwind utility classes (inline)                               │
│  - CSS variables: var(--color-primary)                             │
│  - No separate CSS files per component                             │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  HYDRATION STRATEGY (Astro Islands)                                 │
│                                                                       │
│  Static (0 JS):                                                      │
│  - Layout structure                                                  │
│  - Text content                                                      │
│  - Static images                                                     │
│  - CSS animations                                                    │
│                                                                       │
│  Interactive (client:load):                                          │
│  - ThemeToggle.tsx ──→ ~1 KB                                       │
│  - LanguagePicker.tsx ──→ ~1 KB                                    │
│  - Button.tsx ──→ ~0.5 KB                                          │
│  - Card.tsx ──→ ~0.5 KB                                            │
│  - Badge.tsx ──→ ~0.3 KB                                           │
│  - Icon.tsx ──→ ~0.5 KB                                            │
│  - DevOpsPipeline.tsx ──→ ~1.5 KB                                  │
│                                                                       │
│  Shared Preact Runtime: ~3 KB                                       │
│  Total JS Bundle: < 5 KB                                            │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  BUILD PROCESS                                                       │
│                                                                       │
│  npm run build                                                       │
│  ↓                                                                    │
│  1. Astro compiles pages to static HTML                            │
│  2. Tailwind v4 scans for class names                              │
│  3. Generates optimized CSS (unused styles removed)                │
│  4. Preact components bundled separately                            │
│  5. Assets copied to dist/                                          │
│  ↓                                                                    │
│  Output: dist/                                                       │
│  ├── en/                                                            │
│  │   └── index.html (static HTML with minimal JS)                 │
│  ├── uk/                                                            │
│  │   └── index.html                                                │
│  ├── ru/                                                            │
│  │   └── index.html                                                │
│  ├── _astro/ (JS chunks, CSS, fonts)                              │
│  ├── projects/ (images)                                            │
│  └── 404.html                                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  ICON SYSTEM                                                         │
│                                                                       │
│  data.ts: { iconName: "Github" } (string)                          │
│  ↓                                                                    │
│  Icon.tsx: iconMap["Github"] → Github component                    │
│  ↓                                                                    │
│  lucide-preact: <Github size={24} />                               │
│                                                                       │
│  Benefits:                                                           │
│  - Data file stays clean (no imports)                              │
│  - Type-safe mapping                                                │
│  - Only used icons bundled                                          │
│  - Easy to add new icons                                            │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  THEME SYSTEM                                                        │
│                                                                       │
│  User clicks ThemeToggle                                            │
│  ↓                                                                    │
│  setTheme('light')                                                  │
│  ↓                                                                    │
│  localStorage.setItem('theme', 'light')                             │
│  ↓                                                                    │
│  document.documentElement.setAttribute('data-theme', 'light')       │
│  ↓                                                                    │
│  CSS: :root[data-theme="light"] { ... } applied                    │
│  ↓                                                                    │
│  Smooth transition via CSS (transition: 0.3s ease)                 │
│                                                                       │
│  On page load:                                                       │
│  1. Check localStorage                                              │
│  2. If none, check prefers-color-scheme                            │
│  3. Apply immediately (no flash)                                    │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  i18n SYSTEM                                                         │
│                                                                       │
│  User clicks LanguagePicker → "Українська"                         │
│  ↓                                                                    │
│  handleLanguageChange('uk')                                         │
│  ↓                                                                    │
│  localStorage.setItem('preferredLanguage', 'uk')                    │
│  ↓                                                                    │
│  window.location.href = '/uk/'                                      │
│  ↓                                                                    │
│  Astro routes to [lang]/index.astro with lang='uk'                 │
│  ↓                                                                    │
│  Fetch dictionary['uk'], projects['uk']                            │
│  ↓                                                                    │
│  Render page in Ukrainian                                           │
│                                                                       │
│  SEO:                                                                │
│  - Each page has <link rel="alternate" hreflang="..." />          │
│  - Sitemap includes all language versions                          │
│  - Canonical URLs set correctly                                     │
└─────────────────────────────────────────────────────────────────────┘

Legend:
→  Data flow
↓  Process flow
←  Component type (Preact, Astro, etc.)
```

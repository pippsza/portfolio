# Project Folder Structure

```
portfolio/
│
├── 📁 public/                       # Static assets (served as-is)
│   ├── favicon.svg                  # Site favicon
│   ├── og-image.jpg                 # Social media preview image (add your own)
│   └── 📁 projects/                 # Project screenshots
│       ├── ecommerce.jpg            # (add your images)
│       ├── fitness.jpg
│       ├── dashboard.jpg
│       └── cms.jpg
│
├── 📁 src/
│   │
│   ├── 📁 components/               # Reusable components
│   │   │
│   │   ├── 📁 ui/                   # Atomic UI components (shadcn-style)
│   │   │   ├── Button.tsx           # Primary/secondary/outline buttons
│   │   │   ├── Card.tsx             # Container with hover effects
│   │   │   └── Badge.tsx            # Tag/label component
│   │   │
│   │   ├── BaseHead.astro           # SEO, meta tags, fonts, scripts
│   │   ├── Icon.tsx                 # Icon mapping (Lucide icons)
│   │   ├── ThemeToggle.tsx          # Dark/light theme switcher
│   │   ├── LanguagePicker.tsx       # i18n language selector
│   │   └── DevOpsPipeline.tsx       # Animated pipeline visualization
│   │
│   ├── 📁 constants/
│   │   └── data.ts                  # ⭐ Single source of truth for all content
│   │                                # - Social links
│   │                                # - Projects (3 languages)
│   │                                # - Skills (categorized)
│   │                                # - DevOps pipeline stages
│   │                                # - UI text dictionary (3 languages)
│   │
│   ├── 📁 layouts/
│   │   └── Layout.astro             # Main layout wrapper
│   │                                # - Header with navigation
│   │                                # - Footer
│   │                                # - Theme & language controls
│   │
│   ├── 📁 pages/
│   │   ├── 📁 [lang]/               # Dynamic route for i18n
│   │   │   └── index.astro          # Main portfolio page
│   │   │                            # - Hero section
│   │   │                            # - About
│   │   │                            # - Projects
│   │   │                            # - Skills
│   │   │                            # - DevOps pipeline
│   │   │                            # - Contact
│   │   │
│   │   ├── index.astro              # Root redirect (language detection)
│   │   └── 404.astro                # Custom 404 error page
│   │
│   └── 📁 styles/
│       └── global.css               # Tailwind v4 + custom theme
│                                    # - @theme directive with CSS variables
│                                    # - Pure CSS animated background
│                                    # - Dark/light mode styles
│                                    # - Custom scrollbar
│
├── 📁 node_modules/                 # Dependencies (auto-generated)
│
├── 📁 dist/                         # Build output (auto-generated)
│
├── 📁 .astro/                       # Astro cache (auto-generated)
│
├── astro.config.mjs                 # Astro configuration
│                                    # - Preact integration
│                                    # - Tailwind v4 Vite plugin
│                                    # - i18n routing setup
│
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript configuration
├── .gitignore                       # Git ignore rules
├── README.md                        # Complete documentation
├── SETUP.md                         # Quick start guide
└── FOLDER_STRUCTURE.md              # This file

```

## Key Files Explained

### Configuration Files

- **`astro.config.mjs`**: Core Astro setup with Preact and Tailwind v4
- **`tsconfig.json`**: TypeScript config with Preact JSX support
- **`package.json`**: All dependencies and npm scripts

### Content & Data

- **`src/constants/data.ts`**:
  - The ONLY file you need to edit for most content changes
  - Contains all projects, skills, social links, and translations
  - Strongly typed with TypeScript

### Styling

- **`src/styles/global.css`**:
  - Tailwind CSS v4 with `@theme` directive (no config file needed!)
  - Custom CSS variables for colors
  - Pure CSS animated mesh gradient background
  - Dark/light theme implementations

### Components

**Atomic UI Components** (`src/components/ui/`):

- Built following shadcn/ui principles
- Reusable, accessible, type-safe
- Styled with Tailwind utility classes

**Feature Components** (`src/components/`):

- `Icon.tsx`: Maps string names to Lucide-Preact icons
- `ThemeToggle.tsx`: Theme switcher with localStorage
- `LanguagePicker.tsx`: Language selector with auto-detection
- `DevOpsPipeline.tsx`: Animated CI/CD visualization

### Pages & Routing

- **Dynamic Route** (`[lang]/index.astro`): Main portfolio for each language
- **Root** (`index.astro`): Auto-redirects to detected language
- **404** (`404.astro`): Custom error page matching site aesthetic

## Where to Make Changes

### To update content:

→ Edit `src/constants/data.ts`

### To change colors/theme:

→ Edit `src/styles/global.css` (@theme section)

### To customize components:

→ Edit files in `src/components/` and `src/components/ui/`

### To add pages:

→ Add `.astro` files to `src/pages/[lang]/`

### To add images:

→ Place files in `public/` (they'll be served from root)

## Technologies Used

| Technology    | Purpose                | Size                     |
| ------------- | ---------------------- | ------------------------ |
| Astro 5       | Static site generator  | ~0 KB runtime            |
| Preact        | Interactive components | 3 KB                     |
| Tailwind v4   | CSS framework          | Optimized in build       |
| Lucide Preact | Icons                  | Only used icons included |
| TypeScript    | Type safety            | 0 KB runtime             |

**Total JavaScript Bundle**: < 5 KB (only for interactive components)

## Performance Strategy

1. **Astro Islands**: Only hydrate interactive components
2. **Preact over React**: 3KB vs 40KB
3. **Pure CSS Animations**: No animation libraries
4. **Selective Hydration**: `client:load` only where needed
5. **Optimized Images**: Automatic WebP conversion
6. **Zero Config**: Tailwind v4 uses CSS-only theme

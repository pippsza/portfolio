# High-Performance Portfolio

A modern, high-performance portfolio built with **Astro 5**, **Preact**, and **Tailwind CSS v4**. Features include full internationalization (i18n), dark/light themes, and a unique DevOps pipeline visualization.

![Portfolio Preview](./preview.png)

## 🚀 Tech Stack

### Core Technologies

- **[Astro 5](https://astro.build/)** - Modern static site generator with zero JS by default
- **[Preact](https://preactjs.com/)** - Lightweight React alternative (3KB)
- **[Tailwind CSS v4](https://tailwindcss.com/)** - CSS-first configuration with `@theme` directive
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Lucide Preact](https://lucide.dev/)** - Beautiful icon library

### Key Features

- 🌍 **Multi-language Support** (EN, UK, RU) with automatic browser detection
- 🎨 **Dark/Light Theme** with smooth transitions and localStorage persistence
- ⚡ **Pure CSS Animations** - No heavy JS libraries
- 📱 **Fully Responsive** - Mobile-first design
- 🔧 **DevOps Pipeline Visualization** - Animated deployment workflow
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🎯 **SEO Optimized** - Meta tags, OpenGraph, and language alternates
- 🚢 **Zero Runtime JS** - Hydration only where needed with `client:load`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── projects/           # Project images
├── src/
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Badge.tsx
│   │   ├── BaseHead.astro  # SEO and meta tags
│   │   ├── Icon.tsx        # Icon mapping component
│   │   ├── ThemeToggle.tsx # Dark/Light theme switcher
│   │   ├── LanguagePicker.tsx # i18n language selector
│   │   └── DevOpsPipeline.tsx # Animated pipeline
│   ├── constants/
│   │   └── data.ts         # Centralized content & config
│   ├── layouts/
│   │   └── Layout.astro    # Main layout with header/footer
│   ├── pages/
│   │   ├── [lang]/
│   │   │   └── index.astro # Main portfolio page
│   │   ├── index.astro     # Root redirect
│   │   └── 404.astro       # Custom error page
│   └── styles/
│       └── global.css      # Global styles with Tailwind v4
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Git

### Installation Steps

1. **Clone or download this repository**

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321) in your browser.

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization Guide

### 1. Personal Information

Edit `src/constants/data.ts` to add your information:

```typescript
// Update social links
export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/YOUR_USERNAME", // Change this
    iconName: "Github",
    color: "#333",
  },
  // ... add more
];

// Update projects for each language
export const projects: Record<Locale, Array<Project>> = {
  en: [
    {
      title: "Your Project",
      description: "Project description",
      tags: ["Next.js", "React"],
      link: "https://project.com",
      github: "https://github.com/you/project",
      image: "/projects/project.jpg",
    },
  ],
  // ... uk and ru translations
};
```

### 2. Theme Colors

Customize colors in `src/styles/global.css`:

```css
@theme {
  /* Your custom colors using oklch color space */
  --color-primary: oklch(0.72 0.19 262.88);
  --color-secondary: oklch(0.74 0.17 40.24);
  --color-accent: oklch(0.79 0.15 158.68);
}
```

### 3. Fonts

The default setup uses Inter font (similar to Geist Sans). To change:

1. Update the font import in `src/components/BaseHead.astro`
2. Update the CSS variable in `src/styles/global.css`:

```css
@theme {
  --font-display: "Your Font", ui-sans-serif, system-ui, sans-serif;
}
```

### 4. SEO Settings

Update the site URL and metadata in `src/components/BaseHead.astro`:

```typescript
const siteUrl = "https://your-domain.com"; // Change this
```

### 5. Add Project Images

Place project images in `public/projects/` and reference them in your data:

```typescript
image: "/projects/my-project.jpg";
```

## 🌍 Internationalization (i18n)

### How It Works

1. **Automatic Language Detection**: The site detects the user's browser language and redirects to the appropriate locale (`/en/`, `/uk/`, `/ru/`)

2. **Manual Language Switching**: Users can switch languages using the LanguagePicker component

3. **Persistent Preference**: Language choice is saved to localStorage

### Adding a New Language

1. Update `astro.config.mjs`:

   ```javascript
   locales: ['en', 'uk', 'ru', 'fr'], // Add 'fr'
   ```

2. Add translations to `src/constants/data.ts`:

   ```typescript
   export const dictionary: Record<Locale, Record<string, string>> = {
     // ... existing languages
     fr: {
       greeting: "Bonjour, je suis",
       // ... add all keys
     },
   };
   ```

3. Update `src/components/LanguagePicker.tsx`:
   ```typescript
   const languages: Record<Locale, { name: string; flag: string }> = {
     // ... existing languages
     fr: { name: "Français", flag: "🇫🇷" },
   };
   ```

## 🎭 Theming

The portfolio includes a dark/light theme system:

- **Default**: Dark theme
- **Automatic Detection**: Respects user's system preference
- **Persistent**: Theme choice saved to localStorage
- **Smooth Transitions**: CSS transitions for all theme changes

### Customizing Theme Behavior

Edit `src/components/ThemeToggle.tsx` to change the default theme or transition timing.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 4321
CMD ["npm", "run", "preview"]
```

### Static Hosting

After running `npm run build`, upload the `dist/` folder to any static hosting service (GitHub Pages, Cloudflare Pages, etc.)

## 📊 Performance Features

- ✅ **Zero JavaScript by default** - Astro ships HTML+CSS
- ✅ **Selective Hydration** - Interactive components use `client:load`
- ✅ **Pure CSS Animations** - Mesh gradient background
- ✅ **Optimized Images** - Automatic WebP conversion with Astro Image
- ✅ **Minimal Bundle Size** - Preact instead of React (3KB vs 40KB)
- ✅ **Font Loading** - Preconnect and display=swap for fonts

## 🔧 DevOps Pipeline

The portfolio includes a unique visual representation of a modern DevOps workflow:

1. **Push Code** (GitHub)
2. **CI/CD** (GitHub Actions)
3. **Containerize** (Docker)
4. **Registry** (Docker Hub)
5. **Deploy** (VPS)

Edit `src/constants/data.ts` to customize the pipeline stages.

## 📝 Content Management

All content is centralized in `src/constants/data.ts`:

- **socials**: Social media links with icons
- **projects**: Portfolio projects (translated)
- **skills**: Technical skills categorized
- **devOpsPipeline**: Deployment workflow stages
- **dictionary**: All UI text (translated)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you add cool features, consider sharing them back!

## 📄 License

MIT License - feel free to use this template for your portfolio.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Preact](https://preactjs.com/) - Fast 3kB alternative to React
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon set
- [shadcn/ui](https://ui.shadcn.com/) - Design inspiration for components

## 📧 Contact

For questions or feedback, reach out via the contact methods listed on the portfolio site.

---

**Built with ❤️ using Astro 5, Preact, and Tailwind CSS v4**

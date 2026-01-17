# Portfolio - Astakhov Bohdan (@pippsza)

High-performance portfolio built with Astro 5, Preact, and Tailwind CSS v4.

[🇺🇦 Українська](docs/README.ru.md) | [🇷🇺 Русский](docs/README.ru.md)

## ✨ Features

- 🌐 **Multilingual**: English, Ukrainian, Russian
- 🎨 **Theme System**: Dark/Light mode with preferences
- ⚡ **High Performance**: Astro 5 + Preact optimization
- 🎭 **Interactive Background**: Cursor-reactive animations
- 🎪 **Animated Skills**: Smooth carousel with hover effects
- 📱 **Responsive Design**: Perfect on all devices
- 🔍 **SEO Optimized**: Meta tags, sitemap, i18n alternates
- 🚀 **DevOps Visualization**: CI/CD pipeline showcase

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open your browser at `http://localhost:4321`

## 🛠️ Tech Stack

- **Framework**: Astro 5
- **UI Library**: Preact
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide Preact
- **Animations**: CSS Animations + Preact

## 📚 Documentation

Full documentation available in `/docs`:

- [Setup Guide](docs/SETUP.ru.md) - Installation and configuration
- [Architecture](docs/ARCHITECTURE.ru.md) - Technical deep dive
- [Russian README](docs/README.ru.md) - Полная документация на русском

## 🎨 Customization

### Personal Info

Edit `src/constants/data.ts`:

```typescript
export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/pippsza",
    iconName: "Github",
  },
];
```

### Colors

Update `src/styles/global.css`:

```css
@theme {
  --color-primary: oklch(0.15 0 0);
  --color-accent: oklch(0.98 0 0);
}
```

### Skills

Modify skills array in `src/constants/data.ts`:

```typescript
export const skills = {
  Frontend: [{ name: "React", iconName: "Atom" }],
  Backend: [
    { name: "Node.js", iconName: "Server" },
    { name: "Express.js", iconName: "Zap" },
    { name: "Python", iconName: "Code2" },
  ],
};
```

## 📦 Deployment

### Vercel

```bash
npm run build
# Upload dist folder to Vercel
```

### Netlify

```bash
npm run build
# Build command: npm run build
# Publish directory: dist
```

### GitHub Pages

Update `astro.config.mjs` with your site URL and base path.

## 🌐 i18n Support

Add translations in `src/constants/data.ts`:

```typescript
export const dictionary = {
  en: {
    greeting: "Hi, I'm",
    role: "Full Stack Developer",
  },
  uk: {
    /* Ukrainian */
  },
  ru: {
    /* Russian */
  },
};
```

## 📝 License

MIT License - feel free to use for your own portfolio!

## 👤 Author

**Astakhov Bohdan** (@pippsza)

- GitHub: [@pippsza](https://github.com/pippsza)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

⚡ Built with [Astro](https://astro.build), [Preact](https://preactjs.com), and [Tailwind CSS](https://tailwindcss.com)

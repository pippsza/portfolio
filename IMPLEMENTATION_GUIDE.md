# 🚀 Portfolio - Complete Implementation Guide

## 📋 Table of Contents

1. [Overview](#overview)
2. [Architecture Highlights](#architecture-highlights)
3. [Key Implementation Details](#key-implementation-details)
4. [Customization Walkthrough](#customization-walkthrough)
5. [Advanced Features](#advanced-features)
6. [Troubleshooting](#troubleshooting)

---

## Overview

This is a **production-ready, high-performance portfolio** built with:

- **Astro 5**: Latest static site generator with content-driven approach
- **Preact**: 3KB React alternative for interactive components
- **Tailwind CSS v4**: CSS-first configuration using `@theme` directive
- **TypeScript**: Full type safety across the project

### What Makes This Special?

✅ **Pure CSS Background Animation** - No heavy JS libraries  
✅ **Centralized Data Strategy** - Single source of truth in `data.ts`  
✅ **Icon Mapping System** - String-based icon references  
✅ **Auto Language Detection** - Browser language → correct locale  
✅ **Dark/Light Themes** - Smooth transitions with CSS variables  
✅ **DevOps Pipeline Visualization** - Unique animated component  
✅ **SEO Optimized** - Complete meta tags, OpenGraph, language alternates  
✅ **Zero Runtime by Default** - Only hydrate what needs interactivity

---

## Architecture Highlights

### 1. Tailwind CSS v4 - CSS-First Configuration

**NO `tailwind.config.js` needed!** Everything is in CSS:

```css
/* src/styles/global.css */
@theme {
  --color-primary: oklch(0.72 0.19 262.88);
  --font-display: "Geist Sans", ui-sans-serif, system-ui, sans-serif;
  --spacing-section: 6rem;
}
```

This creates utility classes like `bg-primary`, `font-display`, `p-section` automatically.

### 2. Astro 5 i18n Routing

```javascript
// astro.config.mjs
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'uk', 'ru'],
  routing: {
    prefixDefaultLocale: true,  // All routes have /lang/ prefix
    redirectToDefaultLocale: false,  // Custom redirect logic
  },
}
```

**Dynamic Routes**: `src/pages/[lang]/index.astro` generates `/en/`, `/uk/`, `/ru/`

**Auto-Redirect**: Inline script in `BaseHead.astro` detects browser language

### 3. Icon Mapping System

Instead of importing dozens of icons individually:

```typescript
// src/components/Icon.tsx
const iconMap: Record<string, LucideIcon> = {
  Github, Linkedin, Twitter, Mail, // ... etc
};

// In data.ts
{ iconName: 'Github' }  // String reference

// In components
<Icon name="Github" size={24} />  // Resolves to actual component
```

This keeps `data.ts` clean and allows non-developers to add icons by name.

### 4. Centralized Data Strategy

**Everything** lives in `src/constants/data.ts`:

```typescript
export const socials = [...];  // Social links
export const projects: Record<Locale, Project[]> = {...};  // Projects per language
export const skills = {...};  // Categorized skills
export const devOpsPipeline = [...];  // Pipeline stages
export const dictionary: Record<Locale, Record<string, string>> = {...};  // UI text
```

**Benefits**:

- Single file to update content
- Type-safe with TypeScript
- Easy for non-developers to edit
- Translations side-by-side

---

## Key Implementation Details

### Theme System

**Detection & Persistence**:

```javascript
// In BaseHead.astro - runs BEFORE page renders
const getThemePreference = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

document.documentElement.setAttribute("data-theme", theme);
```

**CSS Variables for Both Themes**:

```css
/* Dark (default) */
:root {
  background-color: var(--color-bg-dark);
  color: var(--color-text-dark);
}

/* Light */
:root[data-theme="light"] {
  background-color: var(--color-bg-light);
  color: var(--color-text-light);
}
```

### Language Detection & Redirect

```javascript
// In BaseHead.astro
if (window.location.pathname === "/") {
  const browserLang = navigator.language.toLowerCase();
  let targetLang = "en";

  if (browserLang.startsWith("uk")) targetLang = "uk";
  else if (browserLang.startsWith("ru")) targetLang = "ru";

  const storedLang = localStorage.getItem("preferredLanguage");
  if (storedLang && ["en", "uk", "ru"].includes(storedLang)) {
    targetLang = storedLang;
  }

  window.location.href = `/${targetLang}/`;
}
```

### Pure CSS Animated Background

**Mesh Gradient with 4 Circles**:

```css
body::before {
  content: "";
  position: fixed;
  background:
    radial-gradient(
      circle at 20% 50%,
      var(--color-primary) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      var(--color-secondary) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 40% 20%, var(--color-accent) 0%, transparent 50%),
    radial-gradient(
      circle at 90% 10%,
      var(--color-primary-dark) 0%,
      transparent 40%
    );
  background-size: 200% 200%;
  animation: meshGradient 20s ease infinite;
  filter: blur(60px);
}

@keyframes meshGradient {
  0%,
  100% {
    background-position:
      0% 0%,
      100% 100%,
      50% 0%,
      100% 0%;
  }
  25% {
    background-position:
      100% 0%,
      0% 100%,
      100% 50%,
      0% 50%;
  }
  50% {
    background-position:
      100% 100%,
      0% 0%,
      50% 100%,
      0% 100%;
  }
  75% {
    background-position:
      0% 100%,
      100% 0%,
      0% 50%,
      100% 50%;
  }
}
```

**Grain Texture Overlay**:

```css
body::after {
  content: "";
  position: fixed;
  background-image: url("data:image/svg+xml,..."); /* SVG noise filter */
  opacity: 0.03;
  pointer-events: none;
}
```

### DevOps Pipeline Component

**Animated Flow**:

```typescript
// DevOpsPipeline.tsx
export default function DevOpsPipeline() {
  return (
    <div class="flex items-center">
      {devOpsPipeline.map((stage, index) => (
        <>
          <Card>
            <Icon name={stage.iconName} color={stage.color} />
            {/* Pulse animation on hover */}
          </Card>
          {/* Arrow connector between stages */}
        </>
      ))}
    </div>
  );
}
```

---

## Customization Walkthrough

### Step 1: Personal Information

**File**: `src/constants/data.ts`

```typescript
// 1. Update social links
export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/YOUR_USERNAME',  // ← Change
    iconName: 'Github',
    color: '#333',
  },
  // Add/remove as needed
];

// 2. Update your name
// In src/pages/[lang]/index.astro, line ~30:
<span class="...">Your Actual Name</span>
```

### Step 2: Add Projects

**File**: `src/constants/data.ts`

```typescript
export const projects: Record<Locale, Array<{...}>> = {
  en: [
    {
      title: 'My Awesome Project',
      description: 'What it does and why it\'s cool',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      link: 'https://project-demo.com',  // Optional
      github: 'https://github.com/you/project',  // Optional
      image: '/projects/my-project.jpg',  // Place in public/projects/
    },
  ],
  uk: [/* Same project, Ukrainian description */],
  ru: [/* Same project, Russian description */],
};
```

**Add Images**: Place `my-project.jpg` in `public/projects/`

### Step 3: Customize Colors

**File**: `src/styles/global.css`

```css
@theme {
  /* Use oklch color space for better perceptual uniformity */
  --color-primary: oklch(0.72 0.19 262.88); /* Purple-blue */
  --color-secondary: oklch(0.74 0.17 40.24); /* Orange */
  --color-accent: oklch(0.79 0.15 158.68); /* Green */

  /* Or use hex/rgb if you prefer */
  --color-primary: #6366f1;
}
```

**Color Tool**: Use [oklch.com](https://oklch.com/) to pick colors visually

### Step 4: Update Skills

**File**: `src/constants/data.ts`

```typescript
export const skills = {
  Frontend: [
    { name: 'Your Framework', iconName: 'Rocket' },  // Pick from Icon.tsx
  ],
  Backend: [...],
  'DevOps/Tools': [...],
};
```

**Available Icons**: Check `src/components/Icon.tsx` for the full list

### Step 5: SEO & Meta Tags

**File**: `src/components/BaseHead.astro`

```typescript
const siteUrl = "https://your-actual-domain.com"; // ← Change this
```

Add OpenGraph image: `public/og-image.jpg` (1200x630px recommended)

---

## Advanced Features

### Adding a New Language

1. **Update Astro Config**:

   ```javascript
   // astro.config.mjs
   locales: ['en', 'uk', 'ru', 'fr'],  // Add 'fr'
   ```

2. **Add to Type**:

   ```typescript
   // src/constants/data.ts
   export type Locale = "en" | "uk" | "ru" | "fr";
   ```

3. **Add Translations**:

   ```typescript
   export const dictionary: Record<Locale, {...}> = {
     fr: {
       greeting: 'Bonjour, je suis',
       // ... all keys
     }
   };

   export const projects: Record<Locale, Project[]> = {
     fr: [/* Translated projects */],
   };
   ```

4. **Update Language Picker**:
   ```typescript
   // src/components/LanguagePicker.tsx
   const languages: Record<Locale, {...}> = {
     fr: { name: 'Français', flag: '🇫🇷' },
   };
   ```

### Custom Animations

Add to `src/styles/global.css`:

```css
@keyframes your-animation {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.your-class {
  animation: your-animation 0.5s ease-out;
}
```

### Adding New Sections

1. Create section in `src/pages/[lang]/index.astro`:

   ```astro
   <section id="blog" class="py-24 px-6">
     <div class="container mx-auto">
       <h2>{t.blogTitle}</h2>
       <!-- Your content -->
     </div>
   </section>
   ```

2. Add nav link in `src/layouts/Layout.astro`:

   ```astro
   <a href={`/${lang}/#blog`}>{t.blog}</a>
   ```

3. Add translation in `data.ts`:
   ```typescript
   dictionary: {
     en: { blog: 'Blog', blogTitle: 'Latest Posts', ... }
   }
   ```

---

## Troubleshooting

### Issue: TypeScript Errors Before Install

**Expected!** Run `npm install` first. Errors for missing modules will disappear.

### Issue: @theme Not Recognized

This is a linter warning. Tailwind v4's `@theme` directive works at build time. Ignore the warning or add to your CSS linter config.

### Issue: Icons Not Showing

1. Check icon name matches exactly (case-sensitive)
2. Verify icon exists in `iconMap` in `src/components/Icon.tsx`
3. Add missing icon:
   ```typescript
   import { YourIcon } from 'lucide-preact';
   const iconMap = { ..., YourIcon };
   ```

### Issue: Language Detection Not Working

1. Test in incognito (localStorage might be cached)
2. Clear localStorage: `localStorage.clear()` in console
3. Check browser dev tools → Application → Local Storage

### Issue: Build Fails

1. Check all image paths exist
2. Verify no TypeScript errors: `npm run astro check`
3. Check console for specific error message

### Issue: Slow Development Server

Astro is usually fast. If slow:

1. Restart dev server
2. Clear `.astro` cache: `rm -rf .astro`
3. Update dependencies: `npm update`

---

## Performance Checklist

- [ ] Only use `client:load` on interactive components
- [ ] Keep Preact components small and focused
- [ ] Optimize images (WebP, proper sizing)
- [ ] Minimize custom JavaScript
- [ ] Use Tailwind utilities instead of custom CSS when possible
- [ ] Test with Lighthouse (aim for 90+ in all categories)

---

## Deployment Checklist

- [ ] Update `siteUrl` in `BaseHead.astro`
- [ ] Add real project images to `public/projects/`
- [ ] Create `public/og-image.jpg` (1200x630px)
- [ ] Replace "Your Name" in hero section
- [ ] Update all social links
- [ ] Test all languages (en, uk, ru)
- [ ] Test dark/light themes
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] Check `dist/` output

---

## Next Steps

1. **Install dependencies**: `npm install`
2. **Start dev server**: `npm run dev`
3. **Open**: http://localhost:4321
4. **Customize**: Follow the walkthrough above
5. **Build**: `npm run build`
6. **Deploy**: Push to Vercel, Netlify, or any static host

---

**Built with care using Astro 5, Preact, and Tailwind CSS v4** ⚡

For questions or issues, refer to:

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Preact Docs](https://preactjs.com)

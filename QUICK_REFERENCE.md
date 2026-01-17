# 🚀 Quick Reference Card

## Essential Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
```

## Project Structure (Key Files)

```
src/
  constants/data.ts       ← Edit this for ALL content
  styles/global.css       ← Colors & theme here
  pages/[lang]/index.astro ← Main page structure
  components/             ← Reusable UI pieces
```

## Common Edits

### 1. Change Your Name

**File**: `src/pages/[lang]/index.astro`  
**Line**: ~30  
**Change**: `Your Name` → `Your Actual Name`

### 2. Update Social Links

**File**: `src/constants/data.ts`  
**Section**: `export const socials`  
**Change**: URLs and add/remove platforms

### 3. Add Projects

**File**: `src/constants/data.ts`  
**Section**: `export const projects`  
**Add for**: en, uk, ru

### 4. Change Colors

**File**: `src/styles/global.css`  
**Section**: `@theme { --color-primary: ... }`

### 5. Update Skills

**File**: `src/constants/data.ts`  
**Section**: `export const skills`

### 6. Change Site URL (for SEO)

**File**: `src/components/BaseHead.astro`  
**Line**: 12  
**Change**: `const siteUrl = 'https://...'`

## Available Icons

All from Lucide: Github, Linkedin, Twitter, Mail, Layers, Atom, Smartphone, Palette, Code2, Rocket, Zap, Server, Database, Globe, Network, Container, GitBranch, Cloud, RefreshCw, Terminal, Package, ExternalLink

**Add more**: Edit `src/components/Icon.tsx`

## Color System (oklch format)

```css
--color-primary: oklch(lightness chroma hue);
example: oklch(0.72 0.19 262.88); /* Purple */
```

**Lightness**: 0-1 (0=black, 1=white)  
**Chroma**: 0-0.4 (0=gray, 0.4=vibrant)  
**Hue**: 0-360 (color wheel degrees)

Tool: https://oklch.com

## Languages

**Supported**: en, uk, ru  
**Default**: en  
**Detection**: Automatic from browser  
**Stored in**: localStorage ('preferredLanguage')

## Themes

**Available**: dark (default), light  
**Stored in**: localStorage ('theme')  
**Toggle**: ThemeToggle component in header

## File Sizes (After Build)

- HTML per page: ~15-30 KB
- CSS total: ~10-20 KB
- JS total: < 5 KB
- Fonts: ~20-50 KB (cached)

## Deployment

### Vercel

1. Push to GitHub
2. Import in Vercel
3. Deploy (auto-detects Astro)

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`

### Static Hosting

1. `npm run build`
2. Upload `dist/` folder

## Troubleshooting

**TypeScript errors?**  
→ Run `npm install` first

**@theme warning?**  
→ Ignore, it's Tailwind v4 syntax

**Icons not showing?**  
→ Check name in Icon.tsx iconMap

**Language not switching?**  
→ Clear localStorage and try again

## Performance Tips

✅ Only use `client:load` when needed  
✅ Optimize images (WebP, correct size)  
✅ Keep components small  
✅ Use Tailwind utilities over custom CSS

## Documentation Files

- `README.md` - Complete guide
- `IMPLEMENTATION_GUIDE.md` - Deep dive
- `FOLDER_STRUCTURE.md` - File reference
- `SETUP.md` - Quick start
- `PROJECT_SUMMARY.md` - What's included

## Support Resources

- Astro: https://docs.astro.build
- Tailwind v4: https://tailwindcss.com/docs
- Preact: https://preactjs.com
- Lucide Icons: https://lucide.dev

---

**Pro Tip**: Start with `data.ts` → Run `npm run dev` → See changes live!

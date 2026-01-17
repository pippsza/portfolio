# Portfolio Project Setup

## Quick Start

This portfolio is built with:

- **Astro 5** - Modern static site generator
- **Preact** - Lightweight React alternative
- **Tailwind CSS v4** - CSS-first configuration

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open http://localhost:4321 in your browser

### Customization Checklist

- [ ] Update personal info in `src/constants/data.ts`
- [ ] Add your social media links
- [ ] Add your projects (with images)
- [ ] Update skills section
- [ ] Customize colors in `src/styles/global.css`
- [ ] Add project images to `public/projects/`
- [ ] Update site URL in `src/components/BaseHead.astro`
- [ ] Replace "Your Name" in `src/pages/[lang]/index.astro`

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` directory, ready for deployment.

### Environment Details

- Node.js: 18+ required
- Package manager: npm, pnpm, or yarn
- TypeScript: Configured and ready

For more details, see README.md

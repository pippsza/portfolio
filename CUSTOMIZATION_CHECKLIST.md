# 📋 Portfolio Customization Checklist

Use this checklist to customize your portfolio step by step.

## 🚀 Initial Setup

- [ ] Clone/download the repository
- [ ] Open terminal in project folder
- [ ] Run `npm install` (or use `setup.sh`)
- [ ] Wait for installation to complete
- [ ] Run `npm run dev` to start development server
- [ ] Open http://localhost:4321 in browser
- [ ] Verify site loads correctly

## 👤 Personal Information

### Basic Info

- [ ] Replace "Your Name" in `src/pages/[lang]/index.astro` (line ~30)
- [ ] Update role/title if needed (default: "Full Stack Developer")

### Social Links (`src/constants/data.ts`)

- [ ] Update GitHub URL
- [ ] Update LinkedIn URL
- [ ] Update Twitter/X URL
- [ ] Update Email address
- [ ] Add more social platforms if needed (Discord, Telegram, etc.)
- [ ] Remove any you don't use

## 🎨 Branding & Colors

### Colors (`src/styles/global.css`)

- [ ] Choose primary color (purple-blue by default)
- [ ] Choose secondary color (orange by default)
- [ ] Choose accent color (green by default)
- [ ] Optional: Use https://oklch.com/ for color picking

### Fonts (`src/components/BaseHead.astro`)

- [ ] Keep Inter (Geist Sans alternative) or
- [ ] Change Google Fonts import URL (line ~37)
- [ ] Update `--font-display` in `global.css` to match

### Favicon

- [ ] Replace `public/favicon.svg` with your own
- [ ] Or create one using https://favicon.io/

## 📁 Projects

### For Each Project (in `src/constants/data.ts`):

#### English Version

- [ ] Project 1: Title, description, tags, links
- [ ] Project 2: Title, description, tags, links
- [ ] Project 3: Title, description, tags, links
- [ ] Project 4: Title, description, tags, links
- [ ] Add more projects as needed

#### Ukrainian Version (if applicable)

- [ ] Translate all projects to Ukrainian
- [ ] Ensure order matches English version

#### Russian Version (if applicable)

- [ ] Translate all projects to Russian
- [ ] Ensure order matches English version

### Project Images

- [ ] Create/gather screenshots (1200x800px recommended)
- [ ] Optimize images (use TinyPNG or similar)
- [ ] Save to `public/projects/` folder
- [ ] Update `image` paths in `data.ts`
- [ ] Test image loading in browser

## 🛠️ Skills & Technologies

### Update Skills (`src/constants/data.ts`)

#### Frontend

- [ ] Add/remove technologies
- [ ] Choose appropriate icons (from Icon.tsx)
- [ ] Order by proficiency or importance

#### Backend

- [ ] Add/remove technologies
- [ ] Choose appropriate icons
- [ ] Order by proficiency or importance

#### DevOps/Tools

- [ ] Add/remove tools
- [ ] Choose appropriate icons
- [ ] Order by proficiency or importance

### DevOps Pipeline

- [ ] Customize stages if needed
- [ ] Update tools/services you use
- [ ] Change colors if desired

## 🌍 Content Translation

### UI Text (`src/constants/data.ts` → dictionary)

#### English

- [ ] Review all labels
- [ ] Customize greeting/role/descriptions
- [ ] Update any text to match your voice

#### Ukrainian (if keeping)

- [ ] Review translations
- [ ] Ensure consistency
- [ ] Update custom text

#### Russian (if keeping)

- [ ] Review translations
- [ ] Ensure consistency
- [ ] Update custom text

### Alternative: Remove Languages

- [ ] If only using English, update `astro.config.mjs`
- [ ] Remove unused language data from `data.ts`
- [ ] Update `LanguagePicker.tsx` if needed

## 🔍 SEO & Meta Tags

### Site Configuration (`src/components/BaseHead.astro`)

- [ ] Update `siteUrl` to your actual domain (line ~12)
- [ ] Create OpenGraph image (1200x630px)
- [ ] Save as `public/og-image.jpg`
- [ ] Update site description if needed

### Per-Page Titles

- [ ] Review page title format in `Layout.astro`
- [ ] Ensure titles are descriptive and unique

## 🎬 Optional Customizations

### Add More Sections

- [ ] Blog section (if desired)
- [ ] Testimonials
- [ ] Experience timeline
- [ ] Certifications

### Theme Adjustments

- [ ] Test both dark and light modes
- [ ] Adjust contrast if needed
- [ ] Customize background animation speed
- [ ] Adjust grain opacity

### Navigation

- [ ] Add/remove nav items in `Layout.astro`
- [ ] Update scroll anchors if needed

## ✅ Pre-Launch Checklist

### Content Review

- [ ] Spell-check all text
- [ ] Verify all links work (external and internal)
- [ ] Check images load correctly
- [ ] Test all buttons and CTAs

### Technical Testing

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile (iOS)
- [ ] Test on mobile (Android)
- [ ] Test theme toggle works
- [ ] Test language switcher works
- [ ] Verify localStorage persistence

### Performance

- [ ] Run `npm run build` successfully
- [ ] Check build output size
- [ ] Test with Lighthouse (aim for 90+ all metrics)
- [ ] Verify images are optimized

### SEO

- [ ] Verify meta tags in page source
- [ ] Check OpenGraph preview (use https://metatags.io/)
- [ ] Ensure language alternates present
- [ ] Test 404 page works

## 🚀 Deployment

### Pre-Deploy

- [ ] Final `npm run build` passes
- [ ] Test production build locally (`npm run preview`)
- [ ] Verify no console errors
- [ ] Check all assets load from dist/

### Deploy Options

#### Option 1: Vercel (Recommended)

- [ ] Push code to GitHub
- [ ] Connect GitHub to Vercel
- [ ] Import project
- [ ] Deploy (auto-configured for Astro)
- [ ] Set up custom domain (if applicable)

#### Option 2: Netlify

- [ ] Push code to GitHub
- [ ] Connect GitHub to Netlify
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `dist`
- [ ] Deploy
- [ ] Set up custom domain (if applicable)

#### Option 3: Cloudflare Pages

- [ ] Push code to GitHub
- [ ] Connect to Cloudflare Pages
- [ ] Select Astro framework preset
- [ ] Deploy
- [ ] Set up custom domain (if applicable)

#### Option 4: Manual/VPS

- [ ] Build locally: `npm run build`
- [ ] Upload `dist/` folder to server
- [ ] Configure web server (nginx/apache)
- [ ] Set up SSL certificate
- [ ] Point domain to server

### Post-Deploy

- [ ] Test live site on multiple devices
- [ ] Verify all pages load
- [ ] Test all interactive features
- [ ] Check browser console for errors
- [ ] Submit to Google Search Console
- [ ] Set up analytics (optional)

## 📊 Ongoing Maintenance

### Regular Updates

- [ ] Add new projects as completed
- [ ] Update skills as learned
- [ ] Keep dependencies updated (`npm update`)
- [ ] Refresh OpenGraph image periodically

### Content Refresh

- [ ] Update project descriptions/links
- [ ] Add blog posts (if implemented)
- [ ] Update social links if changed

### Performance Monitoring

- [ ] Re-run Lighthouse quarterly
- [ ] Check Core Web Vitals
- [ ] Monitor build times
- [ ] Update Astro/dependencies as needed

## 🎓 Learning Resources Used

- [ ] Read Astro docs: https://docs.astro.build
- [ ] Review Tailwind v4 changes: https://tailwindcss.com/docs
- [ ] Explore Lucide icons: https://lucide.dev
- [ ] Study this project's IMPLEMENTATION_GUIDE.md

## 💡 Pro Tips

✅ **Start Small**: Customize one section at a time  
✅ **Test Often**: Run dev server and check changes frequently  
✅ **Use Git**: Commit after each major change  
✅ **Ask for Help**: Check documentation if stuck  
✅ **Backup**: Keep original `data.ts` as reference

## 🆘 Troubleshooting Reference

If you encounter issues, check:

1. IMPLEMENTATION_GUIDE.md (Troubleshooting section)
2. Console errors in browser DevTools
3. Terminal output for build errors
4. README.md for common solutions

---

## ✨ Ready to Launch?

Once all checkboxes are complete, you have a:

- ✅ Fully customized portfolio
- ✅ Optimized for performance
- ✅ SEO-ready
- ✅ Multi-language capable
- ✅ Mobile-responsive
- ✅ Production-ready

**Congratulations! 🎉 Your portfolio is ready to showcase your work!**

---

**Estimated Time to Complete**: 2-4 hours (depending on content preparation)

**Last Updated**: January 2026

# pippsza.dev

Personal site of Bohdan Astakhov (@pippsza). One page in English, Ukrainian and Russian, built with Astro.

## Run locally

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build     # type check and static build into dist/
```

## Edit content

All text lives in `src/constants/data.ts`: bio, projects, stack, work and the CV links, one block per language. Bio paragraphs are HTML and may contain links.

Project screenshots are in `public/projects/`, the portrait is `public/me.jpg`.

## CV

The CV texts (EN, UK, RU) live in `scripts/build-cv.mjs`, the fonts it embeds in `scripts/cv-fonts/`. After editing them, run:

```bash
npm run cv
```

It prints each version to `public/cv/*.pdf` with headless Google Chrome (set `CHROME` to use another Chromium) and fails if a version does not fit on one page. The PDFs are committed to git.

## Deploy

A push to `main` runs `.github/workflows/build-push.yml`: it builds the Docker image (nginx serving `dist/`) and pushes `portfolio:latest` to Docker Hub.

## License

MIT

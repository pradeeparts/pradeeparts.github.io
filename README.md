# Pradeep Arts Studio

Portfolio site for **Pradeep Gupta** — mural artist, signboard painter, and devotional art specialist with 25+ years of hand-painted craft.

Live: https://pradeepartist.github.io/portfolio

## Tech

- **Astro 5** — static site, optimized image pipeline
- **Tailwind CSS v4** — design system in CSS
- **TypeScript** — strict mode
- **Sharp** — favicon + image optimization
- **GitHub Pages** — hosting (free)

## Local development

```bash
npm install
npm run dev          # http://localhost:4321/portfolio
```

## Build

```bash
npm run build        # outputs to ./dist
npm run preview      # preview production build
```

## Regenerating favicons

If you replace `src/assets/logo.png`:

```bash
npm run favicons
```

## Deploying to GitHub Pages

1. Create a public repo named `portfolio` under the GitHub user **`pradeepartist`**.
2. Push this folder to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Push to `main`. The workflow at `.github/workflows/deploy.yml` builds and deploys automatically.

If you change the GitHub username or repo name, update `SITE` and `BASE` in `astro.config.mjs` and `src/config.ts`.

## Updating content

| What | Where |
|---|---|
| WhatsApp number | `src/config.ts` → `SITE.contact.whatsapp` |
| Tagline / subtitle | `src/config.ts` → `SITE.tagline`, `SITE.subtitle` |
| Painting titles & categories | `src/data/paintings.ts` → `meta` |
| Featured paintings on homepage | `src/data/paintings.ts` → `featuredIds` |
| English copy | `src/i18n/ui.ts` → `ui.en` |
| Hindi copy | `src/i18n/ui.ts` → `ui.hi` |

## Adding new paintings

1. Drop the new `.jpg` into `src/assets/paintings/` with a numeric name (e.g. `34.jpg`).
2. Add an entry to the `meta` object in `src/data/paintings.ts` with category + title (EN + HI).
3. `npm run build` and push.

## Categories

- **devotional** — Religious & devotional art
- **festivals** — Diwali, Navratri & celebrations
- **signs** — Building name boards & storefronts
- **commercial** — Café, sports, brand & institutional murals

## Project structure

```
src/
├── assets/
│   ├── logo.png
│   └── paintings/        # 33 painting JPGs
├── components/           # Header, Footer, Hero, PaintingCard, Lightbox, ...
├── data/paintings.ts     # painting metadata + categorization
├── i18n/ui.ts            # EN + HI translations
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro       # English (/)
│   ├── work.astro
│   ├── about.astro
│   ├── contact.astro
│   └── hi/               # Hindi mirror (/hi/...)
└── styles/global.css     # Tailwind v4 + design tokens
```

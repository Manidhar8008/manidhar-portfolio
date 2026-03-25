# Manidhar — Personal AI System Portfolio

This repo contains a **case-study portfolio website** built like a product page.

Positioning:
> I build AI systems that fix human behavior using AI, psychology, and automation.

## Architecture (frontend only)

- **Vite + React + TypeScript + Tailwind**
- Content lives in `src/content/portfolio.ts`
- Page sections live in `src/components/portfolio/*`

## Local run

```bash
npm ci
npm run dev
```

## Build / preview

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml` which deploys on every push to `main`.

1. Push this repo to GitHub.
2. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. Push to `main` again (or run the workflow manually).

### Repo name + Vite base

GitHub Pages serves under `/<repo>/`. This project builds with:

- `base: '/manidhar-portfolio/'` when CI sets `GITHUB_PAGES=true`

If your repo name is different, update `vite.config.ts` accordingly.

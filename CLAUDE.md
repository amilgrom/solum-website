# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for Solum Real Estate Group LLC (solumreg.com), a commercial real estate investment company. Built with Next.js static export hosted on GitHub Pages. The site's primary goal is establishing credibility with lenders.

## Commands

```bash
npm run dev      # Start local dev server at localhost:3000
npm run build    # Build static export to ./out (what gets deployed)
npm run lint     # Run ESLint
```

No test suite exists yet.

## Viewing changes locally

After making changes, always tell the user to run `npm run dev` and open `http://localhost:3000` to preview before pushing. The dev server supports hot reload so changes appear immediately without restarting.

## Deployment

Pushes to `main` automatically trigger GitHub Actions (`.github/workflows/deploy.yml`), which builds and deploys to GitHub Pages. The `./out` directory is the artifact. Custom domain is `solumreg.com` via `CNAME` files in both the root and `public/`.

**Do not push to `main` without explicit user permission.** Every push to main triggers a live deployment to solumreg.com. Always commit locally, show the user what will be pushed, and wait for approval before running `git push origin main`.

## Architecture

**Stack:** Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript. React Compiler is enabled (`reactCompiler: true` in `next.config.ts`).

**Structure:**
- `app/` — Next.js App Router pages and components
- `app/components/` — Shared UI components: `Header`, `Footer`, `Container`, `Card`
- `app/globals.css` — Tailwind v4 `@theme` config + base styles (single source of truth for CSS custom properties)
- `lib/design-tokens.ts` — TypeScript constants mirroring the CSS design tokens (for use in JS logic)

**Design system:** Tailwind v4 with custom `@theme` tokens defined in `globals.css`. Colors follow a two-palette system:
- `primary-*`: Professional blue (main brand, `primary-600 = #2563eb`)
- `secondary-*`: Refined gold accent (`secondary-600 = #ca8a04`)

The `container-responsive` utility class (defined in `globals.css`) provides consistent max-width layout. Use `<Container>` component rather than applying it directly.

**Pages planned (from roadmap):**
- `/` — Home (complete)
- `/about` — Team bios and company story (Phase 2)
- `/approach` — Investment philosophy and market focus (Phase 3)
- `/contact` — Contact form (Phase 4; needs a static-site form service like Formspree)

## Logo & Brand Assets

Source logo files live in `logo/`. The file deployed on the site is `public/logo.png`, which is a copy of `logo/SREG Logo - Transparent Background (Small Margins).png`. See `logo/README.md` for the full inventory and brand color hex codes. If the logo is updated, replace `public/logo.png` with the new transparent-background version.

## Planning System

`.planning/` contains structured project documentation:
- `PROJECT.md` — Business context, requirements, out-of-scope items, key decisions
- `ROADMAP.md` — Phase breakdown with plan status
- `STATE.md` — Current position, decisions, deferred issues

Update these files when completing phases or making architectural decisions.

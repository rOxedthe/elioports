# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server (Next.js, port 3000)
npm run build     # Production build
npm run start     # Serve the production build
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js App Router** portfolio site (no TypeScript, no Tailwind). The stack is Next.js 16, React 19, and plain CSS.

### Key conventions

**Single data source — `app/data.js`**
All page content lives here as named exports: `navItems`, `clientProjects`, `personalProjects`, `services`, `workshopImages`, `workshopDetails`. Pages import from this file rather than co-locating content. When adding or changing portfolio content, edit `app/data.js` only.

**Routing**
Six routes, each a server component under `app/`:
- `/` → `app/page.js` (home — assembles all sections)
- `/work` → `app/work/page.js` (full `clientProjects` list)
- `/proof` → `app/proof/page.js` (AI workshop photo gallery + SEO/SEM summary cards)
- `/services` → `app/services/page.js` (full `services` list)
- `/personal-projects` → `app/personal-projects/page.js` (full `personalProjects` list)
- `/contact` → `app/contact/page.js`

The home page previews sliced subsets (`clientProjects.slice(0, 3)`, `personalProjects.slice(0, 3)`) and links to the full-page versions.

**Single shared component — `app/components/Header.js`**
Every page renders `<Header />` as its first child inside `<main>`. The header is fixed/sticky and driven by `navItems` from `data.js`. There are no other shared components.

**Styling — `app/globals.css`**
All styles live in one file imported by the root layout. The design uses CSS custom properties (defined in `:root`) as the token system:
- `--bg`, `--panel`, `--panel-2` — dark background levels
- `--text`, `--muted` — foreground
- `--cyan`, `--green`, `--coral`, `--gold` — accent colours

CSS class names map directly to semantic section names (`.hero`, `.stats-strip`, `.project-grid`, `.case-card`, `.proof-band`, etc.). There is no CSS Modules or scoping — all selectors are global.

**Images**
All images use the Next.js `<Image>` component with `fill` (no explicit `width`/`height`). The parent element must be `position: relative` with an explicit height or `aspect-ratio`. The `next.config.mjs` enables `avif` and `webp` output formats. Static assets live in `public/projects/` (site screenshots) and `public/workshop/` (AI workshop photos).

**Metadata**
Each page exports a `metadata` object for SEO. The root layout (`app/layout.js`) sets site-wide defaults; page-level exports override them automatically via Next.js conventions.

**No mobile nav / hamburger menu** — on small screens the header stacks vertically and the `<nav>` scrolls horizontally. If adding navigation items, check the `<= 680px` breakpoint in `globals.css`.

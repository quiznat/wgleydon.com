# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Memorial website for Bill Leydon (1945–2024) — poet, librarian, father of Michael Leydon. Hosted at `wgleydon.com`. Static export via Next.js 14.

## Commands

```bash
npm run dev      # local dev server
npm run build    # static export → dist/
npm run start    # serve built output
```

The site exports to `dist/` (not `.next/`). Deploy by copying `dist/` to the host.

## Architecture

Single-page site (`src/app/page.tsx`) with two main components:

- **`ManuscriptViewer`** — the poem browser. Renders the full collection with navigation, search, and reading view.
- **`Hero`** — animated landing section (Framer Motion, Cormorant Garamond serif)

### Poem data

All poems are compiled into **`src/data/poems.ts`** as a typed array of `Poem` objects. This file is the canonical source for the website — it is NOT auto-generated from the markdown files in the life-goals repo.

The source poems live in the **life-goals** repo at `poems/bill-leydon/` as individual `.md` files. When poems are added or edited there, `poems.ts` must be updated manually (or via a sync script).

### Design tokens (Tailwind)

Custom theme in `tailwind.config.ts`:
- `paper-100`, `paper-200` — warm off-white backgrounds
- `ink-dark`, `ink`, `ink-light` — text hierarchy
- `accent` — gold/sepia highlight color
- `font-serif` → Cormorant Garamond, `font-sans` → Inter

## Relationship to life-goals repo

- Source poems: `/Users/quiznat/life-goals/poems/bill-leydon/*.md`
- Website poem data: `src/data/poems.ts` (must be kept in sync manually)
- The life-goals repo previously contained this site at `projects/dad-memorial-site/` — that folder is now gitignored there

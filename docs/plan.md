# Personal Portfolio — Implementation Plan

> Reference: `docs/PRD.md` — read it for full product intent before making decisions.

## What We're Building

A hybrid personal website: engineering leadership journal + lightweight technical portfolio. NOT a traditional portfolio. Authenticity and depth over marketing.

**4 pages (initial scope):** Home, About, Blog, Projects  
**Notes page:** Deferred (add later when content exists)  
**Package manager:** pnpm  
**Deployment:** Vercel + GitHub

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS + `@tailwindcss/typography` |
| Animations | Framer Motion (subtle, <0.5s only) |
| Content | MDX via `next-mdx-remote` (RSC variant) |
| Dark mode | `next-themes` (class strategy) |
| Icons | `lucide-react` |
| Syntax highlighting | `rehype-pretty-code` + `shiki` |
| Fonts | Inter (next/font/google) + JetBrains Mono (self-hosted) |
| Deployment | Vercel |

---

## Design System (from PRD)

### Colors
| Token | Light | Dark |
|---|---|---|
| Background | `#FAFAFA` | `#0B0F19` |
| Primary text | `#111827` | `#F9FAFB` |
| Secondary text | `#6B7280` | `#9CA3AF` |
| Accent | `#2563EB` | `#3B82F6` |
| Borders | `#E5E7EB` | `#1F2937` |

### Typography
- Primary: **Inter** (via `next/font/google`)
- Code: **JetBrains Mono** (self-hosted woff2 in `public/fonts/`)

### Layout
- Max content width: **1100px** (`max-w-content`)
- Reading column width: **672px** (`max-w-2xl`, used for blog/notes body)
- Rounded corners: 8–12px
- Mobile-first responsive

---

## Directory Structure

```
Personal-Porstfolio/
├── docs/
│   ├── PRD.md
│   ├── plan.md               ← you are here
│   └── tasks.md              ← build progress tracker
├── content/                  # MDX content (data, not code — edit freely)
│   ├── blog/                 # one .mdx file per post
│   ├── projects/             # one .mdx file per project
│   └── about.mdx             # About page prose
├── public/
│   └── fonts/                # JetBrains Mono .woff2 files
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout: fonts, ThemeProvider, Navbar, Footer
│   │   ├── page.tsx          # Home
│   │   ├── globals.css       # CSS variables + Tailwind base
│   │   ├── about/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx      # Blog listing
│   │   │   └── [slug]/page.tsx
│   │   └── projects/
│   │       ├── page.tsx      # Projects listing
│   │       └── [slug]/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavMobile.tsx       # "use client" — mobile hamburger
│   │   │   ├── Footer.tsx
│   │   │   ├── PageWrapper.tsx     # centering container (narrow prop for reading)
│   │   │   ├── ThemeProvider.tsx   # "use client" — next-themes wrapper
│   │   │   └── ThemeToggle.tsx     # "use client" — sun/moon toggle
│   │   ├── mdx/
│   │   │   ├── MDXContent.tsx      # renders MDX string (next-mdx-remote/rsc)
│   │   │   └── MDXComponents.tsx   # custom overrides for h1/a/pre/blockquote/img
│   │   ├── blog/
│   │   │   ├── PostCard.tsx
│   │   │   └── CategoryFilter.tsx  # "use client" — category filter tabs
│   │   ├── projects/
│   │   │   └── ProjectCard.tsx
│   │   └── home/
│   │       ├── Hero.tsx            # "use client" — Framer Motion fade-in
│   │       ├── QuickNav.tsx
│   │       └── RecentPosts.tsx
│   ├── lib/
│   │   ├── mdx.ts            # ALL filesystem access goes here
│   │   ├── blog.ts           # blog-specific helpers
│   │   ├── projects.ts       # project-specific helpers
│   │   └── utils.ts          # cn(), formatDate()
│   └── types/
│       ├── blog.ts
│       └── project.ts
├── next.config.ts
├── tailwind.config.ts
└── vercel.json
```

---

## Implementation Phases

### Phase 0 — Scaffold
```bash
pnpm create next-app@latest . \
  --typescript --tailwind --eslint --app --src-dir \
  --import-alias "@/*" --no-turbopack

pnpm add next-mdx-remote gray-matter framer-motion next-themes \
  lucide-react clsx tailwind-merge date-fns reading-time \
  remark-gfm rehype-pretty-code shiki

pnpm add -D @tailwindcss/typography
```
Checkpoint: `pnpm dev` runs without errors.

---

### Phase 1 — Design System
- `globals.css`: CSS custom properties for light/dark (`:root` and `.dark`)
- `tailwind.config.ts`: map CSS vars → Tailwind utilities (`bg-bg`, `text-primary`, `text-accent`, etc.)
- Download JetBrains Mono Regular + Medium `.woff2` into `public/fonts/`

Key decision: using CSS variables instead of `dark:` prefix everywhere — one class works in both modes.

---

### Phase 2 — Dark Mode + Root Layout
- `ThemeProvider.tsx` — thin `"use client"` wrapper, required because next-themes uses context
- `layout.tsx` — Inter font via `next/font/google`, `suppressHydrationWarning` on `<html>`, wraps with ThemeProvider + Navbar + Footer
- `ThemeToggle.tsx` — `useTheme()` + lucide `Sun`/`Moon`

Checkpoint: theme toggle works, no flash on first load.

---

### Phase 3 — Shared Layout Components
- `PageWrapper.tsx` — `max-w-content` (1100px) default, `max-w-2xl` (672px) when `narrow` prop set
- `Navbar.tsx` (server) + `NavMobile.tsx` (client hamburger island)
- `Footer.tsx` — name, year, GitHub link
- `utils.ts` — `cn()` (clsx + tailwind-merge), `formatDate()`, `formatShortDate()`

---

### Phase 4 — MDX Pipeline
`src/lib/mdx.ts` exports:
```typescript
getAllSlugs(type: 'blog' | 'projects'): string[]
getMDXBySlug<T>(type, slug): { meta: T; content: string; readingTime: string }
getAllContent<T>(type): Array<{ meta: T; readingTime: string }>
// getAllContent filters draft:true, sorts by date desc
```

MDX frontmatter contracts:
- **Blog:** `slug, title, date, category ('leadership'|'engineering'|'delivery'|'interview'), summary, tags?, draft?`
- **Project:** `slug, title, date, stack: string[], summary, status ('active'|'complete'|'archived'), draft?`

`MDXContent.tsx` uses `next-mdx-remote/rsc` (RSC variant — zero client JS).  
`rehype-pretty-code` configured with `{ dark: 'github-dark', light: 'github-light' }` for dual-mode syntax highlighting.

Create 1 sample `.mdx` in each content folder to test the pipeline before building pages.

---

### Phase 5 — Home Page
- `Hero.tsx` (`"use client"`) — positioning statement + 2-line summary. Framer Motion: `opacity: 0, y: 16` → `opacity: 1, y: 0`, 0.4s ease-out. Stagger with QuickNav/RecentPosts at +0.1s.
- `QuickNav.tsx` — 3 large linked cards: About, Blog, Projects. Hover: `translateY(-2px)`.
- `RecentPosts.tsx` — 3 PostCards + "View all →"

---

### Phase 6 — About Page
Load from `content/about.mdx`. Sections: intro → Engineering Background → The Transition → What I Own Now → Where I'm Growing.  
Render with `<MDXContent>` inside `<PageWrapper narrow>`.

---

### Phase 7 — Blog Pages
- **Listing:** Server Component passes all posts to `<CategoryFilter>` (client) for in-memory filtering. Categories: All / Leadership / Engineering / Delivery / Interview.
- **`PostCard.tsx`:** category badge, title, date, reading time, summary.
- **Post page:** `generateStaticParams`, `generateMetadata`, `<article className="prose dark:prose-invert">`, `<MDXContent>`.

---

### Phase 8 — Projects Pages
Same pattern as Blog. No category filtering. `ProjectCard.tsx` shows title, stack badges, summary, status.  
Project MDX uses H2 sections: Problem / Approach / Stack / Key Learnings / Tradeoffs.

---

### Phase 9 — SEO + Deployment
- Root `metadata` export in `layout.tsx` (title template, description, OG)
- `next.config.ts` — `pageExtensions`, `images.formats`
- `vercel.json` — pnpm build/install commands, font cache headers

---

## Key Architecture Decisions

| Decision | Reason |
|---|---|
| `next-mdx-remote` over `@next/mdx` | Content lives in `content/` outside `app/` — next-mdx-remote handles arbitrary paths |
| CSS variables, not `dark:` prefixes | One class per utility, future theme changes are a single file edit |
| Server Components by default | Keeps JS bundle tiny; client islands only for: theme toggle, mobile nav, category filter, Framer Motion |
| Narrow reading column (672px) | Optimal line length for long-form reading (~70 chars at 16–18px) |
| `generateStaticParams` on all `[slug]` pages | All content statically generated at build time — no server runtime needed |
| `content/` at repo root | Signals it's data not code; easy to find and edit |

---

## Verification Checklist

- [ ] `pnpm dev` — no TypeScript errors
- [ ] Light/dark toggle — no flash on first load
- [ ] Blog post with code block — syntax highlighting works in both modes
- [ ] `pnpm build` — static generation completes for all slugs
- [ ] Mobile — Navbar collapses to hamburger, reading column comfortable
- [ ] Framer Motion — animations play once on load, not on every nav
- [ ] Vercel deploy — all routes resolve, fonts have immutable cache headers
- [ ] OG tags — `<title>` and description correct per page (view-source)

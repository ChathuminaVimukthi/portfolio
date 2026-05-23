# Build Progress Tracker

Update this file as each task is completed. Status: `[ ]` not started · `[~]` in progress · `[x]` done.

---

## Phase 0 — Scaffold

- [x] Run `pnpm create next-app@latest` with correct flags
- [x] Install runtime dependencies (`next-mdx-remote`, `framer-motion`, `next-themes`, etc.)
- [x] Install dev dependencies (`@tailwindcss/typography`)
- [x] Verify `pnpm dev` runs without errors

---

## Phase 1 — Design System

- [x] `src/app/globals.css` — CSS custom properties (`:root` light + `.dark`)
- [x] `src/app/globals.css` — `@font-face` for JetBrains Mono Regular + Medium
- [x] `tailwind.config.ts` — `darkMode: 'class'`
- [x] `tailwind.config.ts` — color utilities mapped to CSS vars (`bg-bg`, `text-primary`, `text-accent`, etc.)
- [x] `tailwind.config.ts` — font families (`sans`, `mono`)
- [x] `tailwind.config.ts` — `maxWidth.content: '1100px'`
- [x] `tailwind.config.ts` — typography plugin configured with design system overrides
- [x] Download JetBrains Mono Regular `.woff2` → `public/fonts/`
- [x] Download JetBrains Mono Medium `.woff2` → `public/fonts/`

---

## Phase 2 — Dark Mode + Root Layout

- [x] `src/components/layout/ThemeProvider.tsx` — `"use client"` next-themes wrapper
- [x] `src/components/layout/ThemeToggle.tsx` — `"use client"` sun/moon toggle with `useTheme()`
- [x] `src/app/layout.tsx` — Inter font via `next/font/google`
- [x] `src/app/layout.tsx` — `suppressHydrationWarning` on `<html>`
- [x] `src/app/layout.tsx` — ThemeProvider, Navbar, Footer wired in
- [x] `src/app/layout.tsx` — root `metadata` export (title template, description, OG base)
- [x] **Checkpoint:** theme toggle works, no flash on first load

---

## Phase 3 — Shared Layout Components

- [x] `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge)
- [x] `src/lib/utils.ts` — `formatDate()` and `formatShortDate()`
- [x] `src/components/layout/PageWrapper.tsx` — centering container with `narrow` prop
- [x] `src/components/layout/Navbar.tsx` — server component with nav links
- [x] `src/components/layout/NavMobile.tsx` — `"use client"` hamburger menu island
- [x] `src/components/layout/Footer.tsx` — name, year, GitHub link

---

## Phase 4 — MDX Pipeline

- [x] `src/types/blog.ts` — `BlogMeta` interface
- [x] `src/types/project.ts` — `ProjectMeta` interface
- [x] `src/lib/mdx.ts` — `getAllSlugs(type)`
- [x] `src/lib/mdx.ts` — `getMDXBySlug<T>(type, slug)`
- [x] `src/lib/mdx.ts` — `getAllContent<T>(type)` (filters drafts, sorts by date)
- [x] `src/lib/blog.ts` — blog-specific helpers (`getAllPosts`, `getPostsByCategory`)
- [x] `src/lib/projects.ts` — project-specific helpers (`getAllProjects`, `getProject`)
- [x] `src/components/mdx/MDXComponents.tsx` — custom overrides (headings, links, blockquote, img)
- [x] `src/components/mdx/MDXContent.tsx` — RSC renderer (`next-mdx-remote/rsc` + remark/rehype plugins)
- [x] `content/blog/` — create 1 sample blog post `.mdx`
- [x] `content/projects/` — create 1 sample project `.mdx`
- [x] `content/about.mdx` — placeholder About prose
- [x] **Checkpoint:** sample MDX renders correctly with syntax highlighting in both modes

---

## Phase 5 — Home Page

- [x] `src/components/home/Hero.tsx` — `"use client"`, positioning statement, Framer Motion fade-in
- [x] `src/components/home/QuickNav.tsx` — 3 linked cards (About, Blog, Projects)
- [x] `src/components/home/RecentPosts.tsx` — 3 most recent PostCards + "View all →"
- [x] `src/app/page.tsx` — wire Hero, QuickNav, RecentPosts

---

## Phase 6 — About Page

- [x] `content/about.mdx` — write real About content (replace placeholder)
- [x] `src/app/about/page.tsx` — load `content/about.mdx`, render with `<MDXContent>` in `<PageWrapper narrow>`

---

## Phase 7 — Blog Pages

- [x] `src/components/blog/PostCard.tsx` — category badge, title, date, reading time, summary
- [x] `src/components/blog/CategoryFilter.tsx` — `"use client"` filter tabs (All / Leadership / Engineering / Delivery / Interview)
- [x] `src/app/blog/page.tsx` — listing page with CategoryFilter
- [x] `src/app/blog/[slug]/page.tsx` — `generateStaticParams`, `generateMetadata`, post body
- [x] **Checkpoint:** blog listing filters correctly, post page renders MDX with prose styles

---

## Phase 8 — Projects Pages

- [x] `src/components/projects/ProjectCard.tsx` — title, stack badges, summary, status
- [x] `src/app/projects/page.tsx` — listing page
- [x] `src/app/projects/[slug]/page.tsx` — `generateStaticParams`, `generateMetadata`, project body
- [x] **Checkpoint:** projects listing and detail pages render correctly

---

## Phase 9 — SEO + Deployment

- [ ] `next.config.ts` — `pageExtensions`, `images.formats`
- [ ] `vercel.json` — pnpm build/install commands, font cache headers
- [ ] Per-page `generateMetadata` — Blog post, Project detail
- [ ] Push to GitHub
- [ ] Connect repo to Vercel
- [ ] Verify Vercel preview deploy
- [ ] Custom domain configured (if applicable)

---

## Final Verification

- [ ] `pnpm dev` — no TypeScript errors
- [ ] `pnpm build` — completes, all slugs statically generated
- [ ] Light/dark toggle — no flash on first load
- [ ] Code blocks — syntax highlighting correct in both modes
- [ ] Mobile — hamburger nav works, reading column comfortable
- [ ] Framer Motion — animations play once on home load, not on every nav
- [ ] Vercel — all routes resolve, font cache headers present
- [ ] OG tags — correct title + description per page

---

## Content To Write (ongoing)

| Content | Status | Notes |
|---|---|---|
| `content/about.mdx` | [ ] | Sections: intro, Engineering Background, The Transition, What I Own Now, Where I'm Growing |
| First blog post | [ ] | Start with something real — leadership reflection or interview insight |
| First project entry | [ ] | Pick a completed project, follow: Problem / Approach / Stack / Learnings / Tradeoffs |

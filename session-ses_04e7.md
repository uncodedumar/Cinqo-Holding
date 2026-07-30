# Performance optimization suggestions

**Session ID:** ses_04e736936ffeZwLlOfM2HNWTEo
**Created:** 7/30/2026, 10:43:28 AM
**Updated:** 7/30/2026, 10:46:14 AM

---

## User

thoroughly read and understand the project and make a list of changes we can do to boost performance responsiveness a lot more. No code just list each and everything

---

## Assistant

**Tool: task**

---

## Assistant





**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

Let me read all source files thoroughly

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

Now let me read all components and data files:



**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: glob**

**Tool: glob**

**Tool: glob**

**Tool: glob**

**Tool: glob**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant





**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant





**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

Now let me read the remaining sections and data

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant





**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

---

## User

continue

---

## Assistant





**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

---

## Assistant

Now I have a thorough understanding of the entire codebase. Here is the complete performance analysis:

## Performance Improvement Opportunities

### 1. Bundle Size & Code Splitting
- **Heavy animation dual-load**: Both GSAP (~50KB gzipped) + Framer Motion (~30KB gzipped) run on nearly every page. Pick one primary animation engine per section or use tree-shaking — right now `motion` (Framer Motion v12) is also installed alongside `framer-motion` v11, doubling the Framer bundle.
- **No dynamic imports**: Heavy sections (`ThePrinciple` — 277 canvas frames, `Credibility` — video + mouse tracking, `Stack` — complex GSAP timeline, `BrandPortfolio` — many images) are eagerly loaded on every page visit. Use `next/dynamic` with `ssr: false`.
- **flag-icons CSS** (~200KB+) imported globally in `globals.css` but only used on 2 form pages (Contact Us & Careers). Move to page-level import.
- **Duplicate large static arrays**: `countryCodes` array (~200 entries) duplicated identically in both `JoinUs.tsx` (504 lines) and `ContactUs.tsx` (451 lines). Move to shared `data/` file.
- **react-icons/fa6** imported in `NewsFollow.tsx` for just 4 social icons while other pages use inline SVGs — inconsistent, react-icons adds bundle weight.
- **Unused GSAP SplitText plugin**: Registered globally in `lib/gsap.ts` but only used in `AboutUs.tsx`. Could be lazy-loaded only for that section.

### 2. Image Optimization
- **`quality={100}` on all images** in `Hero.tsx`, `Footer.tsx`, `NewsSlugHero.tsx` — unnecessary, default 75 is sufficient.
- **`unoptimized` flag used** on team member images in `Team.tsx` (`unoptimized` on line 103, 142, 173) — bypasses Next.js image optimization entirely.
- **Missing or oversized `sizes` attributes**: Many `fill` images use `sizes="100vw"` when they're within constrained containers (e.g., `About.tsx` image at line 204). Wrong sizes cause Next.js to generate unnecessarily large source sets.
- **No `placeholder="blur"` or `placeholder="empty"`** anywhere — users see blank space while images load.
- **Footer image** (`Footer.tsx:68`) has `priority` set but it is `position: fixed` at `z-[-2]` — it renders on every page but is below the fold; should not be priority.

### 3. Animation Performance
- **Framer Motion `viewport={{ once: false }}`** used in multiple sections (`SubscribeNow`, `DefineUs`, `Capabilities`, `ProfessionalFramework`, `Sectors` components) — animations re-trigger on every scroll intersection, wasting GPU cycles. Switch to `once: true` where possible.
- **Raw scroll listeners without throttling**: `NewsPage.tsx` registers `window.addEventListener("scroll", handleScroll)` updating DOM directly on every frame for parallax. `Navbar.tsx` also uses raw scroll for hide/show. Neither uses `requestAnimationFrame` or passive listeners (though passive is true on Navbar).
- **`useScrollFade` hook** uses `toggleActions: "play none none reverse"` — animations reverse on scroll-up, causing constant recalc. Use `once: true` for one-way reveals.
- **Canvas frame preloading in `ThePrinciple`**: Loads up to 90 frames ahead and keeps 90 in cache. On mobile this means up to 90 WebP images in memory. Could reduce preload window.
- **CSS marquee in `LogosLoop`**: Triples the DOM (`[...logosData, ...logosData, ...logosData]`) and uses `will-change: transform` which creates a compositing layer for all 24+ elements simultaneously. Could use a more performant approach.

### 4. Rendering & Layout
- **All sections are "use client"**: Every single page component and section is client-rendered. No section takes advantage of server components. Content sections (NewsSection, AboutUs, OurCompanies) could be server components or partially server-rendered.
- **Footer is `position: fixed` with `z-[-2]`**: Forces `--footer-height` CSS variable to be set via JS `ResizeObserver`. This means every page calculates layout on mount. The footer also mounts a `<video>` element and a full-bleed `<Image>` with `fill` on every page route.
- **`gsap.ticker.lagSmoothing(0)`** in `SmoothScrollProvider.tsx` disables GSAP's built-in lag compensation, which can cause jank on slower devices.
- **No `React.lazy` or Suspense boundaries** for any section — everything loads in one chunk.

### 5. CSS & Styling
- **flag-icons CSS** imported globally adds ~170KB of CSS for flag sprites used only by 2 pages.
- **`@theme` defines many custom properties** but some are unused (e.g., `--color-cream-50`, `--color-white-50` have identical values).
- **Vendor prefixes hardcoded** (`-webkit-backdrop-filter`) — Tailwind + PostCSS should handle this via autoprefixer.
- **`dangerouslySetInnerHTML`** used in `Projects/Businesses.tsx` for injecting `<style>` tags — could use CSS modules or Tailwind instead.

### 6. Network & Data Fetching
- **Static data loaded as client imports**: All `data/*.ts` files are imported by client components. They could be server-fetched and passed as props for content that doesn't change per user.
- **News page filters in client**: `newsData` is fully loaded, then filtered/reversed/sliced in browser JS. For 13+ items this is trivial, but unnecessary.

### 7. Font Loading
- **Inter font** configured without `display: "swap"` in `layout.tsx` (line 8-11) — only `IBM_Plex_Sans` has it. Inter will cause FOIT (Flash of Invisible Text).
- **Two font families loaded** — Inter (full Latin set) + IBM Plex Sans (4 weights). Could subset fonts or use `font-display: optional` for less critical text.

### 8. Specific Component Issues
- **`ThePrinciple.tsx`**: Canvas rendering at device pixel ratio up to 2x on mobile with full-viewport canvas. Each frame is a full-width WebP decode. The text overlay opacity/transform is computed per frame in the ScrollTrigger `onUpdate` callback (60fps+) directly manipulating style properties.
- **`Credibility.tsx`**: Two separate `useEffect` hooks — one for entrance animations + video breathing, another for mouse tracking with 5+ `gsap.quickTo` instances, 2 spotlight tweens, and per-item `mouseenter`/`mouseleave` listeners. All registered/unregistered manually.
- **`Team.tsx`**: Imports GSAP directly (`import gsap from "gsap"` and `import { ScrollTrigger } from "gsap/dist/ScrollTrigger"`) instead of centralized `@/lib/gsap`, risking double plugin registration.
- **`Text.tsx` (Projects)**: Same issue — imports GSAP directly and registers ScrollTrigger locally.
- **`Stack.tsx` (Projects)**: Same pattern — local GSAP import + plugin registration.
- **`ProjectHighlights.tsx`**: Uses `<Image>` for the right arrow button (`/arrow.svg`) — an SVG icon loaded as a Next.js image with network request when inline SVG would be zero-cost.
- **Same pattern in `OGProjects.tsx` and `CPProjects.tsx`**: Arrow button uses `<Image>` for `/arrow.svg`.

### 9. Web Vitals & UX
- **No `<Suspense>` boundaries**: Heavy sections block the main thread during hydration.
- **All pages lack metadata beyond root layout**: `metadata` is only defined in root `layout.tsx`; inner pages don't export their own `metadata` (they are all client components anyway, so they can't).
- **`generateStaticParams`** only used for `businesses/[slug]` and `news/[slug]` but not for projects.
- **No `loading="lazy"` on iframe** in `Location.tsx` — Google Maps embed could block loading.

### 10. Build & Config
- **`next.config.mjs`** has `remotePatterns: [{ hostname: "**" }]` — allows any external domain, bypassing the security intent of the config.
- **No standalone output mode** (`output: "standalone"`) for Docker/deployment size optimization.
- **No compression middleware** or CDN configuration considered in current setup.

---


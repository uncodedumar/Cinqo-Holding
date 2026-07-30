# Mobile improvements from session file

**Session ID:** ses_04e04bf8bffe4U5XbkH5ZCdKYD
**Created:** 7/30/2026, 12:44:21 PM
**Updated:** 7/30/2026, 12:44:38 PM

---

## User

read the session markdown file to understand the improvements listed and do not code anthing, just tell wht can you do keep desktop exactly as is and apply changes to mobie

---

## Assistant

**Tool: glob**

---

## Assistant

**Tool: read**

---

## Assistant

I've read the session file. Here's what I **can** do while keeping desktop exactly as-is:

**Mobile-only changes (no desktop impact):**
1. Add `@media (max-width: 768px)` CSS overrides to disable GPU-heavy effects (GSAP parallax, Ken Burns zoom, backdrop-filter) on mobile
2. Check if `framer-motion` is actually unused and remove it (benefits both)
3. Serve smaller mobile-specific image sources via `sizes` adjustments (Next.js handles this server-side, desktop unaffected)
4. Add a `poster` image for the Credibility video + defer video load on mobile
5. Inline critical CSS for hero only (benefits both)
6. Preload hero image + preconnect to font origins (benefits both)
7. Enable AVIF/WebP formats in config (benefits both)

**Things I cannot do without touching desktop behavior:**
- Remove `"use client"` from Hero — would alter server-vs-client rendering for all devices
- Change `font-display` to `optional` — applies globally unless we add client-side connection detection
- Split Navbar — would change SSR structure for everyone
- Defer Lenis/GSAP — they're in the root layout, affects all devices unless wrapped in `matchMedia`

**The key constraint:** The most impactful mobile wins (preloading, AVIF, removing unused deps, image downscaling, cache headers) naturally benefit both devices equally — no regression, just shared improvement. The truly mobile-only gains are CSS media queries and JS-based feature detection to disable heavy effects on small screens.

Want me to proceed with implementing any of these?

---


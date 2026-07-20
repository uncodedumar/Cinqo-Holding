import type Lenis from "lenis";

/**
 * Clearance for the fixed header so an anchored section doesn't land
 * underneath it. Roughly the tallest (unscrolled) header height plus breathing
 * room.
 */
export const HEADER_OFFSET = 104;

/** Absolute document position an anchor should scroll to. */
function targetTop(el: HTMLElement): number {
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET);
}

/**
 * Scrolls to an in-page anchor.
 *
 * Lenis drives the scroll position for the whole app, so a native hash jump
 * gets fought back by its internal animation loop — every anchor has to go
 * through `lenis.scrollTo`. It's handed an absolute number rather than the
 * element itself: Lenis resolves elements against its own animated scroll
 * value, which drifts from the real position on pinned/animated pages.
 *
 * @returns whether the target element was found.
 */
export function scrollToHash(lenis: Lenis | null, hash: string): boolean {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  if (lenis) {
    lenis.scrollTo(targetTop(el), {
      duration: 1.1,
      onComplete: () => {
        /*
          Images resolving above the target during the ~1s flight shift the
          page under us. Settle the remainder without re-animating.
        */
        const drift = el.getBoundingClientRect().top - HEADER_OFFSET;
        if (Math.abs(drift) > 24) {
          lenis.scrollTo(targetTop(el), { immediate: true });
        }
      },
    });
  } else {
    window.scrollTo({ top: targetTop(el), behavior: "smooth" });
  }

  return true;
}

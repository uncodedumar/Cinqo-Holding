"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { scrollToHash } from "@/lib/scroll";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Wraps the app in Lenis smooth scrolling and keeps GSAP's ScrollTrigger
 * perfectly in sync by driving both from the same rAF loop.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(instance);

    instance.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const onRefresh = () => instance.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(onTick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <HashScroller lenis={lenis} />
      {children}
    </LenisContext.Provider>
  );
}

/**
 * Honours `#section` in the URL on arrival, and on browser back/forward.
 *
 * Same-page anchor clicks are handled at the link itself (see Navbar) because
 * the App Router pushes those through history without firing `hashchange`.
 */
function HashScroller({ lenis }: { lenis: Lenis | null }) {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    /*
      The target often isn't laid out yet — sections mount with entrance
      animations and images still resolving — so poll briefly for it, then
      correct once more after the page has settled.
    */
    let attempts = 0;
    let pending = 0;

    const tryScroll = () => {
      if (scrollToHash(lenis, hash)) {
        pending = window.setTimeout(() => scrollToHash(lenis, hash), 600);
        return;
      }
      if (attempts++ < 20) pending = window.setTimeout(tryScroll, 100);
    };

    tryScroll();

    return () => window.clearTimeout(pending);
  }, [pathname, lenis]);

  useEffect(() => {
    const onHashChange = () => scrollToHash(lenis, window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [lenis]);

  return null;
}

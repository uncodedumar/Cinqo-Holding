import { useEffect, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface ScrollFadeOptions {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
}

/**
 * Fades + slides an element up into view as it enters the viewport.
 * Usage:
 *   const ref = useRef<HTMLDivElement>(null);
 *   useScrollFade(ref);
 */
export function useScrollFade<T extends HTMLElement>(
  ref: RefObject<T>,
  { y = 40, duration = 0.8, delay = 0, start = "top 85%" }: ScrollFadeOptions = {}
) {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none reverse",
        },
      });
    });
    return () => ctx.revert();
  }, [ref, y, duration, delay, start]);
}

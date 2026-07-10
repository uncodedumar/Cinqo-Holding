/**
 * Central GSAP instance.
 * Import `gsap` and `ScrollTrigger` FROM THIS FILE ONLY so plugins are
 * registered exactly once across the whole app.
 *
 * Usage:
 *   import { gsap, ScrollTrigger } from "@/lib/gsap";
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

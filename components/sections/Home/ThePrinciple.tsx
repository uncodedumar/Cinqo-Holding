"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Cinematic scroll-scrubbed frame sequence ("scroll video").
 *
 * Frames are pre-encoded into two resolution tiers (see
 * public/videos/principle/frames-web[-sm]/, generated from the raw 4K
 * source in public/videos/principle/Frames/ via sharp — see git history /
 * scratch scripts). The desktop tier is 1600px wide, the mobile tier
 * 960px, chosen once on mount to bound decoded-canvas memory on phones.
 */
const TOTAL_FRAMES = 277;
const DESKTOP_DIR = "/videos/principle/frames-web";
const MOBILE_DIR = "/videos/principle/frames-web-sm";
const MOBILE_BREAKPOINT = 768;
const PIN_VH_MULTIPLIER = 6.4; // total pinned scroll runway, in viewport heights

const frameUrl = (dir: string, n: number) => `${dir}/frame-${String(n).padStart(4, "0")}.webp`;

const TEXT_BLOCKS = [
  {
    eyebrow: "GUIDING PRINCIPLES",
    heading: "RELATIONSHIPS BUILT ON TRUST",
    body: "Long-term relationships are built through consistent delivery, transparent communication and accountability.",
  },
  {
    eyebrow: "GUIDING PRINCIPLES",
    heading: "CONTINUOUS IMPROVEMENT",
    body: "Investment in people, technology and systems supports performance and sustainable growth.",
  },
  {
    eyebrow: "GUIDING PRINCIPLES",
    heading: "EXECUTING WITH PRECISION",
    body: "Leadership remains actively involved across operations, ensuring decisions are timely, informed and aligned with Group objectives.",
  },
  {
    eyebrow: "GUIDING PRINCIPLES",
    heading: "CLARITY BEFORE COMMITMENT",
    body: "Every engagement begins with a clear understanding of scope, objectives and responsibilities.",
  },
  {
    eyebrow: "GUIDING PRINCIPLES",
    heading: "DISCIPLINED GROWTH",
    body: "Expansion is guided by capability, operational readiness and long-term sustainability.",
  },
  {
    eyebrow: "GUIDING PRINCIPLES",
    heading: "PRINCIPAL-LED PARTNERSHIPS",
    body: "Relationships with leading international manufacturers are built on performance, market knowledge and commercial integrity.",
  },
];

export default function ThePrinciple() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textBlockRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const dir = isMobile ? MOBILE_DIR : DESKTOP_DIR;
    const preloadAhead = isMobile ? 10 : 24;
    const preloadBehind = isMobile ? 4 : 10;
    const keepRadius = isMobile ? 40 : 90;
    const nearestSearchRadius = isMobile ? 12 : 24;

    const cache = new Map<number, HTMLImageElement>();
    let lastDrawn = -1;
    let currentTarget = 1;

    const isLoaded = (n: number) => {
      const img = cache.get(n);
      return !!img && img.complete && img.naturalWidth > 0;
    };

    const getImage = (n: number) => {
      let img = cache.get(n);
      if (!img) {
        img = new window.Image();
        img.decoding = "async";
        img.src = frameUrl(dir, n);
        cache.set(n, img);
      }
      return img;
    };

    const drawImage = (img: HTMLImageElement) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      if (!iw || !ih) return;

      const imgRatio = iw / ih;
      const canvasRatio = cw / ch;
      let dWidth = cw;
      let dHeight = ch;
      let dx = 0;
      let dy = 0;

      if (imgRatio > canvasRatio) {
        dWidth = ch * imgRatio;
        dx = (cw - dWidth) / 2;
      } else {
        dHeight = cw / imgRatio;
        dy = (ch - dHeight) / 2;
      }

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dWidth, dHeight);
    };

    const findNearestLoaded = (target: number) => {
      if (isLoaded(target)) return target;
      for (let d = 1; d <= nearestSearchRadius; d++) {
        if (isLoaded(target - d)) return target - d;
        if (isLoaded(target + d)) return target + d;
      }
      return null;
    };

    const requestFrame = (target: number) => {
      currentTarget = target;

      for (let i = target - preloadBehind; i <= target + preloadAhead; i++) {
        if (i < 1 || i > TOTAL_FRAMES) continue;
        const img = getImage(i);
        if (i === target && !img.complete) {
          img.onload = () => {
            if (Math.abs(currentTarget - i) <= nearestSearchRadius) {
              drawImage(img);
              lastDrawn = i;
            }
          };
        }
      }

      for (const key of cache.keys()) {
        if (Math.abs(key - target) > keepRadius) cache.delete(key);
      }

      const nearest = findNearestLoaded(target);
      if (nearest !== null && nearest !== lastDrawn) {
        drawImage(cache.get(nearest)!);
        lastDrawn = nearest;
      }
    };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      lastDrawn = -1;
      requestFrame(currentTarget);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    requestFrame(1);

    const ctxGsap = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        end: () => `+=${window.innerHeight * PIN_VH_MULTIPLIER}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate the exact float frame for ultra-smooth sub-frame text interpolation
          const exactFrame = 1 + progress * (TOTAL_FRAMES - 1);
          // Pass integer frame to the canvas drawing logic
          requestFrame(Math.round(exactFrame));

          const segmentLength = TOTAL_FRAMES / TEXT_BLOCKS.length;
          const FADE_IN_DUR = 10; // Frame span for fade in
          const FADE_OUT_DUR = 10; // Frame span for fade out
          const GAP = 1; // Guaranteed empty frames between blocks to absolutely prevent overlaps

          textBlockRefs.current.forEach((el, i) => {
            if (!el) return;

            const startFrame = i * segmentLength;
            const endFrame = (i + 1) * segmentLength;
            const isFirst = i === 0;
            const isLast = i === TEXT_BLOCKS.length - 1;

            // Define interpolation bounds tied perfectly to the scroll frame
            const fadeInStart = isFirst ? -1 : startFrame + GAP;
            const fadeInEnd = isFirst ? 0 : fadeInStart + FADE_IN_DUR;

            const fadeOutEnd = isLast ? TOTAL_FRAMES + FADE_OUT_DUR : endFrame;
            const fadeOutStart = fadeOutEnd - FADE_OUT_DUR;

            let opacity = 0;
            let y = 40;
            let pointerEvents = "none";
            let ariaHidden = "true";

            if (exactFrame < fadeInStart) {
              opacity = 0;
              y = 40;
            } else if (exactFrame >= fadeInStart && exactFrame <= fadeInEnd) {
              // Fading in (power3.out emulation)
              const p = (exactFrame - fadeInStart) / (fadeInEnd - fadeInStart);
              const easeP = 1 - Math.pow(1 - p, 3);
              opacity = easeP;
              y = 40 * (1 - easeP);
            } else if (exactFrame > fadeInEnd && exactFrame < fadeOutStart) {
              // Fully visible
              opacity = 1;
              y = 0;
              pointerEvents = "auto";
              ariaHidden = "false";
            } else if (exactFrame >= fadeOutStart && exactFrame <= fadeOutEnd) {
              // Fading out (power2.inOut emulation)
              const p = (exactFrame - fadeOutStart) / (fadeOutEnd - fadeOutStart);
              const easeP = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
              opacity = 1 - easeP;
              y = -30 * easeP;
            } else if (exactFrame > fadeOutEnd) {
              // Faded out
              opacity = 0;
              y = -30;
            }

            // Apply directly — no time-based tweens means 0% chance of timeline overlaps
            el.style.opacity = opacity.toFixed(3);
            el.style.transform = `translateY(${y.toFixed(2)}px)`;
            el.style.pointerEvents = pointerEvents;
            
            if (ariaHidden === "true") {
              el.setAttribute("aria-hidden", "true");
            } else {
              el.removeAttribute("aria-hidden");
            }
          });
        },
      });
    }, wrap);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctxGsap.revert();
      cache.clear();
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative h-screen w-full bg-black">
      <section className="relative h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />

        {/* Legibility scrim */}
        <div
          aria-hidden
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* Text Container: Locked completely flat centered layout */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="relative w-full max-w-[1290px] h-full flex items-center justify-center mx-auto text-center">
            {TEXT_BLOCKS.map((block, i) => (
              <div
                key={block.heading}
                ref={(el) => {
                  textBlockRefs.current[i] = el;
                }}
                aria-hidden={i === 0 ? undefined : "true"}
                className="absolute w-full flex flex-col items-center justify-center transform"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  transform: i === 0 ? "translateY(0px)" : "translateY(40px)",
                  pointerEvents: i === 0 ? "auto" : "none",
                }}
              >
                <span
                  className="uppercase text-white mb-2 sm:mb-[16px] tracking-[0.12em]"
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "1.2",
                  }}
                >
                  {block.eyebrow}
                </span>

                <h2
                  className="uppercase text-white mb-4 sm:mb-[24px] tracking-tight"
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(32px, 5vw, 64px)",
                    lineHeight: "1.1",
                  }}
                >
                  {block.heading}
                </h2>

                <h3
                  className="uppercase text-white/90 mb-3 sm:mb-[16px] tracking-wide"
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    lineHeight: "1.3",
                  }}
                >
                </h3>

                <p
                  className="text-white/80 max-w-[620px] mx-auto antialiased"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(15px, 1.8vw, 17px)",
                    lineHeight: "1.6",
                  }}
                >
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
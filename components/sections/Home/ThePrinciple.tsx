"use client";

import { useEffect, useRef, useState } from "react";
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
const PIN_VH_MULTIPLIER = 3.2; // total pinned scroll runway, in viewport heights

const frameUrl = (dir: string, n: number) => `${dir}/frame-${String(n).padStart(4, "0")}.webp`;

// Blocks 2 & 3 are placeholder editorial copy in the same voice as the
// original block — swap in final client copy when available.
const TEXT_BLOCKS = [
  {
    eyebrow: "The Principle",
    heading: "Clarity Before Commitment",
    subheading: "Accountability at every level.",
    body: "Every engagement begins with a clear understanding of scope, objectives and responsibilities. Strong outcomes are built on strong foundations.",
  },
  {
    eyebrow: "The Principle",
    heading: "Discipline Behind Every Decision",
    subheading: "Governance that holds at every scale.",
    body: "From first estimate to final handover, every commitment is tracked, tested and honoured — so trust is earned once and kept indefinitely.",
  },
  {
    eyebrow: "The Principle",
    heading: "Built to Outlast the Moment",
    subheading: "Long-term value over short-term wins.",
    body: "We measure success not at delivery, but in the years a project continues to perform — for the people who use it and the partners who return to us.",
  },
];

export default function ThePrinciple() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textBlockRefs = useRef<Array<HTMLDivElement | null>>([]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioButtonRef = useRef<HTMLButtonElement>(null);

  const [audioOn, setAudioOn] = useState(false);
  const audioOnRef = useRef(false);

  useEffect(() => {
    audioOnRef.current = audioOn;
  }, [audioOn]);

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

    // Text-block sequencing — stacked in the DOM, swapped via refs only
    // (no React state), so scroll updates never trigger a re-render.
    let activeBlock = 0;
    const showTextBlock = (index: number) => {
      if (index === activeBlock) return;
      const prevEl = textBlockRefs.current[activeBlock];
      const nextEl = textBlockRefs.current[index];
      activeBlock = index;

      if (prevEl) {
        gsap.to(prevEl, { opacity: 0, y: -30, duration: 0.6, ease: "power2.inOut" });
        prevEl.setAttribute("aria-hidden", "true");
      }
      if (nextEl) {
        gsap.fromTo(
          nextEl,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        );
        nextEl.removeAttribute("aria-hidden");
      }
    };

    const fadeAudio = (target: number, onComplete?: () => void) => {
      const audio = audioRef.current;
      if (!audio) return;
      gsap.to(audio, { volume: target, duration: 0.7, ease: "power1.out", onComplete });
    };

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
          const targetFrame = 1 + Math.round(progress * (TOTAL_FRAMES - 1));
          requestFrame(targetFrame);

          const segment = Math.min(
            TEXT_BLOCKS.length - 1,
            Math.floor(progress * TEXT_BLOCKS.length),
          );
          showTextBlock(segment);
        },
        onEnter: () => {
          if (audioButtonRef.current) {
            gsap.to(audioButtonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
          }
        },
        onLeave: () => {
          if (audioOnRef.current) fadeAudio(0, () => audioRef.current?.pause());
        },
        onEnterBack: () => {
          if (audioOnRef.current) {
            audioRef.current?.play().catch(() => {});
            fadeAudio(0.28);
          }
        },
        onLeaveBack: () => {
          if (audioButtonRef.current) {
            gsap.to(audioButtonRef.current, { opacity: 0, y: 12, duration: 0.4, ease: "power2.in" });
          }
          if (audioOnRef.current) fadeAudio(0, () => audioRef.current?.pause());
        },
      });
    }, wrap);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctxGsap.revert();
      cache.clear();
      audioRef.current?.pause();
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audioOnRef.current) {
      gsap.to(audio, { volume: 0, duration: 0.5, onComplete: () => audio.pause() });
      audioOnRef.current = false;
      setAudioOn(false);
    } else {
      audio.volume = 0;
      audio.play().catch(() => {});
      gsap.to(audio, { volume: 0.28, duration: 0.9 });
      audioOnRef.current = true;
      setAudioOn(true);
    }
  };

  return (
    <div ref={wrapRef} className="relative h-screen w-full bg-black">
      <section className="relative h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />

        {/* Legibility scrim so overlay text stays readable over any frame */}
        <div
          aria-hidden
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="relative w-full max-w-[1290px] mx-auto text-center">
            {TEXT_BLOCKS.map((block, i) => (
              <div
                key={block.heading}
                ref={(el) => {
                  textBlockRefs.current[i] = el;
                }}
                aria-hidden={i === 0 ? undefined : "true"}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center"
                style={i === 0 ? undefined : { opacity: 0, transform: "translate(0, 40px)" }}
              >
                <span
                  className="uppercase text-white mb-2 sm:mb-[16px]"
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "1.2",
                  }}
                >
                  {block.eyebrow}
                </span>

                <h2
                  className="uppercase text-white mb-6 sm:mb-[47px]"
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
                  className="uppercase text-white mb-4 sm:mb-[16px]"
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(18px, 3vw, 24px)",
                    lineHeight: "1.2",
                  }}
                >
                  {block.subheading}
                </h3>

                <p
                  className="text-white max-w-[650px] mx-auto"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(16px, 2vw, 20px)",
                    lineHeight: "1.5",
                  }}
                >
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <audio ref={audioRef} src="/audios/ThePrinciple.mp3" loop preload="none" />

        <button
          ref={audioButtonRef}
          type="button"
          onClick={toggleAudio}
          aria-label={audioOn ? "Mute ambient sound" : "Play ambient sound"}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-white opacity-0 backdrop-blur-md transition-colors duration-300 hover:border-white/50 hover:bg-white/15"
          style={{ transform: "translateX(-50%) translateY(12px)" }}
        >
          {audioOn ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 5 6 9H3v6h3l5 4V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 5 6 9H3v6h3l5 4V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="m16 9 5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em]">
            Sound {audioOn ? "On" : "Off"}
          </span>
        </button>
      </section>
    </div>
  );
}

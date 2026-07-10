"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * "Clarity Before Commitment" — background video's playback position
 * is scrubbed directly by scroll progress through the section
 * (video acts like a scroll-driven timeline, no autoplay).
 */
export default function ThePrinciple() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const onLoaded = () => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          if (video.duration) {
            video.currentTime = self.progress * video.duration;
          }
        },
      });
      return () => trigger.kill();
    };

    video.addEventListener("loadedmetadata", onLoaded);
    return () => video.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  return (
    <section className="relative min-h-[150vh] flex items-center justify-center overflow-hidden text-cream-50 text-center" ref={sectionRef}>
      <video
        ref={videoRef}
        className="bg-media"
        src="/videos/principle/scroll-scrub.mp4"
        muted
        playsInline
        preload="auto"
      />
      <div className="bg-overlay" />

      <div className="container sticky top-0 z-20 min-h-screen flex flex-col items-center justify-center gap-4 max-w-[700px] mx-auto">
        <span className="eyebrow">The Principle</span>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)]">CLARITY BEFORE COMMITMENT</h2>
        <h3 className="text-coral-500 tracking-[0.04em]">ACCOUNTABILITY AT EVERY LEVEL.</h3>
        <p>
          Every engagement begins with a clear understanding of scope,
          objectives and responsibilities. Strong outcomes are built on
          strong foundations.
        </p>
      </div>
    </section>
  );
}

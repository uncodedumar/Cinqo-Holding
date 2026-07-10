"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const STATS = [
  { value: "20+", label: "Years of Delivery", caption: "Two decades of proven execution and transparent commercial operations across Bahrain." },
  { value: "600+", label: "System Operations", caption: "A tightly disciplined workforce managed under unified executive accountability." },
  { value: "200+", label: "Projects Completed", caption: "A diverse portfolio of successful residential, commercial, and industrial landmarks." },
  { value: "5", label: "Companies", caption: "Five specialized companies operating under a single, unified structure." },
  { value: "10", label: "International Brands", caption: "Exclusive and authorized representation of leading global brands." },
];

/**
 * Credibility strip — full-bleed drone-shot background video.
 * Each stat fades in from the bottom as it enters the viewport.
 */
export default function Credibility() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.stat-item').forEach((el, i) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden text-cream-50 py-24" ref={sectionRef}>
      <video
        className="bg-media"
        src="/videos/credibility/drone-shot.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="bg-overlay" />

      <div className="container relative z-20 grid gap-12 grid-cols-2 min-[900px]:grid-cols-5">
        {STATS.map((stat) => (
          <div className="stat-item flex flex-col gap-2 border-l border-white/20 pl-6" key={stat.label}>
            <span className="font-display font-bold text-[clamp(2rem,4vw,3rem)]">{stat.value}</span>
            <span className="text-small uppercase tracking-[0.08em] text-muted-light">{stat.label}</span>
            <p className="text-small text-muted-light max-w-[220px]">{stat.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

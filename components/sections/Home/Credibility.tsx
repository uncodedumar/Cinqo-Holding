"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const STATS = [
  {
    value: "20+",
    label: "Years of Delivery",
    caption:
      "Two decades of proven execution and transparent commercial operations across Bahrain.",
  },
  {
    value: "600+",
    label: "System Operations",
    caption:
      "A tightly disciplined workforce managed under unified executive accountability.",
  },
  {
    value: "200+",
    label: "Projects Completed",
    caption:
      "A diverse portfolio of successful residential, commercial, and industrial landmarks.",
  },
  {
    value: "5",
    label: "Companies",
    caption:
      "Five specialized companies operating under a single, unified structure.",
  },
  {
    value: "10",
    label: "International Brands",
    caption:
      "Exclusive and authorized representation of leading global brands.",
  },
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
      gsap.utils.toArray<HTMLElement>(".stat-item").forEach((el, i) => {
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
    <section
      className="relative overflow-hidden text-cream-50 min-h-screen flex items-center justify-center py-24 font-body"
      ref={sectionRef}
    >
      {/* Uses global .bg-media class for absolute positioning, object-cover, and z-index */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-133 origin-center"
        src="/videos/credibility/CredibilityDrone-shot.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Uses global .bg-overlay class for dark navy gradient overlay */}
      <div className="bg-overlay" />

      {/* Uses global .container class for max-width and responsive padding */}
      <div className="container relative z-10">
        {/* Reduced gap from gap-8 to gap-6 (or gap-4) to give each column MORE width */}
        <div className="grid gap-6 grid-cols-2 min-[1024px]:grid-cols-5 border-y-2 border-line-dark py-10">
          {STATS.map((stat, index) => (
            <div
              className={`stat-item mt-3 flex flex-col gap-2 ${
                index === 0
                  ? "pl-0"
                  : /* Reduced left padding slightly to pl-4 to maximize text space */
                    "pl-6 min-[1024px]:pl-5 border-l-2 border-line-dark"
              }`}
              key={stat.label}
            >
              {/* Removed min-h constraint causing awkward breaks; added whitespace-nowrap on larger screens*/}
              <span className="text-eyebrow uppercase tracking-[0.08em] text-muted-light flex items-start min-[1024px]:min-h-[2.2rem]">
                {stat.label}
              </span>

              {/* Leverages theme --text-h1 for large numbers and --font-display */}
              <span className="font-display font-bold text-h1 mt-3 leading-none">
                {stat.value}
              </span>

              {/*Removed any max-w-[...] classes so text takes 100% of the wider column */}
              <p className="text-[0.75rem] text-muted-light mt-3 leading-normal w-full pr-1">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

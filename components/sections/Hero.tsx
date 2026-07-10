"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { heroSlidesData } from "@/data/hero.data";

const SLIDE_DURATION = 6000; // ms per slide

/**
 * Full-bleed hero with a crossfading background carousel.
 * Each active slide gets a slow Ken Burns zoom-in; GSAP fades the
 * headline/subtext in on mount.
 */
export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const headlineRef = useRef<HTMLDivElement>(null);

  // Carousel autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlidesData.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  // Intro text animation
  useEffect(() => {
    if (!headlineRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current!.children, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });
    }, headlineRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden text-cream-50" id="hero">
      <div className="absolute inset-0 z-0">
        {heroSlidesData.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1.2s] ease-in-out ${i === activeIndex ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              className={`object-cover animate-[kenburns_8s_ease-in-out_infinite_alternate] ${i === activeIndex ? "[animation-play-state:running]" : "[animation-play-state:paused]"}`}
            />
          </div>
        ))}
        <div className="bg-overlay" />
      </div>

      <div className="container relative z-20 pb-24 flex flex-col gap-6 max-w-[900px]" ref={headlineRef}>
        <h1 className="text-hero leading-[1.05]">
          BUILT ON COMMITMENT.
          <br />
          DRIVEN BY PERFORMANCE.
        </h1>
        <p className="max-w-[620px] text-muted-light">
          Built on over two decades of operational excellence, Cinqo Holding
          is a diversified Bahrain-based group operating across construction,
          technical distribution, specialist coatings, facilities management,
          interior fit-out and strategic investments.
        </p>
        <div>
          <a href="#about" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

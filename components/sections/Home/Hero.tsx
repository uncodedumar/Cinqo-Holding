"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { heroSlidesData } from "@/data/hero.data";
import Button from "@/components/ui/Button";

const SLIDE_DURATION = 6000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlidesData.length);
    }, 6000);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      setActiveIndex(index);
      if (intervalRef.current) clearInterval(intervalRef.current);
      startAutoplay();
    },
    [startAutoplay]
  );

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  useEffect(() => {
    imageRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.killTweensOf(el);
      if (i === activeIndex) {
        gsap.set(el, { scale: 1, opacity: 1 });
        gsap.to(el, {
          scale: 1.15,
          duration: 6,
          ease: "none",
        });
      } else {
        gsap.set(el, { scale: 1.15, opacity: 0 });
      }
    });
  }, [activeIndex]);

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
            ref={(el) => { imageRefs.current[i] = el; }}
            className="absolute inset-0"
            style={{ opacity: i === activeIndex ? 1 : 0, zIndex: i === activeIndex ? 1 : 0 }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="bg-overlay" />
      </div>

      <div className="container relative z-20 pb-24 flex flex-col gap-6 !pl-[40px]" ref={headlineRef}>
        <h1 className="text-white text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight">
          BUILT ON COMMITMENT.
          <br />
          DRIVEN BY PERFORMANCE.
        </h1>
        <p className="max-w-[850px] text-white/85 text-base md:text-lg font-normal leading-relaxed">
          Built on over two decades of operational excellence, Cinqo Holding
          is a diversified Bahrain-based group operating across construction,
          technical distribution, specialist coatings, facilities management,
          interior fit-out and strategic investments.
        </p>
        <div className="flex items-center mt-2">
          <Button 
            href="#about" 
            className="bg-transparent border border-white text-white px-5 py-2 rounded-none uppercase text-xs font-semibold tracking-widest hover:bg-white/10 transition-colors"
          >
            Get in Touch &gt;
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlidesData.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import type { HeroSlide, HeroSlideV2 } from "@/types";

const SLIDE_DURATION = 6000;

type HeroProps = {
  slides: (HeroSlide | HeroSlideV2)[];
  cta?: {
    href: string;
    text: string;
  };
  id?: string;
  showDots?: boolean;
  /** "full" = full-viewport home carousel. "compact" = short banner (matches the news article hero). */
  variant?: "full" | "compact";
};


export default function Hero({ slides, cta, id = "hero", showDots = true, variant = "full" }: HeroProps) {
  const isCompact = variant === "compact";
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  }, [slides.length]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setActiveIndex(index);
      if (intervalRef.current) clearInterval(intervalRef.current);
      startAutoplay();
    },
    [activeIndex, startAutoplay]
  );

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  // Image Animation: Ken Burns Zoom-Out
  useEffect(() => {
    imageRefs.current.forEach((el, i) => {
      if (!el) return;
      
      gsap.killTweensOf(el);

      if (i === activeIndex) {
        // High z-index brings active slide forward
        gsap.set(el, { zIndex: 2 });
        // Start zoomed in, transition to scale 1 (zoom-out)
        gsap.fromTo(el, 
          { scale: 1.8, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: SLIDE_DURATION / 1000, 
            ease: "sine.out" 
          }
        );
      } else {
        // Send back and fade out smoothly
        gsap.set(el, { zIndex: 1 });
        gsap.to(el, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out"
        });
      }
    });
  }, [activeIndex]);

  // Content Animation: Text Change Stagger
  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      // Targets the title, subtitle, and action button container
      const targets = contentRef.current?.querySelectorAll(".animate-slide-item");
      if (!targets?.length) return;

      gsap.killTweensOf(targets);

      // Reset and run slick fade-in up stagger
      gsap.fromTo(
        targets,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, [activeIndex]); // Re-runs animation gracefully when slide index updates

  return (
    <section
      className={`relative flex items-end overflow-hidden text-cream-50 ${
        isCompact ? "w-full h-[360px] md:h-[440px] lg:h-[500px]" : "min-h-screen"
      }`}
      id={id}
      ref={containerRef}
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0 bg-black">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            ref={(el) => { imageRefs.current[i] = el; }}
            className="absolute inset-0 will-change-transform"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              quality={100}
              className="object-cover"
              sizes="100vw"
              style={slide.imagePosition ? { objectPosition: slide.imagePosition } : undefined}
            />
          </div>
        ))}
        {/* Subtle, premium linear gradient overlay */}
        <div
          className={`absolute inset-0 z-10 bg-gradient-to-t ${
            isCompact ? "from-black/85 via-black/35 to-black/10" : "from-black/90 via-black/40 to-black/20"
          }`}
        />
      </div>

      {/* Hero Content Container */}
      <div
        className={`container relative z-20 flex flex-col !pl-[40px] select-none ${
          isCompact ? "pb-10 md:pb-14 gap-3" : "pb-24 gap-6"
        }`}
        ref={contentRef}
      >
        {"badge" in slides[activeIndex] && slides[activeIndex].badge && (
          <span className="animate-slide-item text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
            {slides[activeIndex].badge}
          </span>
        )}
        <h1
          className={`animate-slide-item text-white leading-[1.15] tracking-tight ${
            isCompact
              ? "text-2xl md:text-4xl lg:text-[2.75rem] font-bold uppercase max-w-4xl"
              : "text-4xl md:text-5xl lg:text-[4rem] font-semibold"
          }`}
        >
          {slides[activeIndex].headline1}
          {"headline2" in slides[activeIndex] && slides[activeIndex].headline2 && (
            <>
              <br />
              {slides[activeIndex].headline2}
            </>
          )}
        </h1>
       
        
        {slides[activeIndex].subtitle && (
          <p className="animate-slide-item max-w-[850px] text-white/85 text-base md:text-lg font-normal leading-relaxed">
            {slides[activeIndex].subtitle}
          </p>
        )}

        {cta && (
          <div className="animate-slide-item flex items-center mt-2">
            <Button
              href={cta.href}
              className="bg-transparent border border-white text-white px-6 py-3 rounded-none uppercase text-xs font-semibold tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
            >
              {cta.text}
            </Button>
          </div>
        )}

        {/* Carousel Navigation Indicators */}
        {showDots && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="group relative p-2 focus:outline-none"
                aria-label={`Go to slide ${i + 1}`}
              >
                <span
                  className={`block w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out ${
                    i === activeIndex
                      ? "bg-white scale-125"
                      : "bg-white/45 group-hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
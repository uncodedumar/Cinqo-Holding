"use client";

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Image from 'next/image';

const images = [
  "/images/projects/project-1/projectStack1.jpg",
  "/images/projects/project-1/projectStack2.jpeg",
  "/images/projects/project-1/projectStack3.png",
  "/images/projects/project-1/projectStack4.jpeg",
];

const StackedSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".card") as HTMLElement[];

    // 1. Initialization: Push all cards EXCEPT the first one below the viewport
    gsap.set(cards.slice(1), { y: "100vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 800 + 1500}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // 2. Animate cards sliding up and stacking over one another
    cards.forEach((card, i) => {
      if (i > 0) {
        tl.to(card, {
          y: i * 28,
          duration: 1,
          ease: "power2.out",
        }, "-=0.2");
      }
    });

    // 3. Expand the last card to full screen
    const lastCard = cards[cards.length - 1];

    tl.to(lastCard, {
      width: "100vw",
      height: "100vh",
      top: "0vh",     // Move it to the very top of the window
      y: 0,           // Reset the staggered stacking offset
      borderRadius: 0, // Remove rounded corners for a true fullscreen look
      duration: 1.5,
      ease: "power2.inOut",
    }, "+=0.5");

    // 4. Reveal the center-aligned heading and text
    if (textRef.current) {
      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full relative flex justify-center bg-white overflow-hidden">
      {images.map((src, i) => (
        <div
          key={i}
          className="card absolute top-[24vh] sm:top-[18vh] md:top-[15vh] w-[92vw] sm:w-[90vw] max-w-5xl md:max-w-none aspect-[4/3] md:aspect-auto md:h-[75vh] rounded-xl md:rounded-sm overflow-hidden shadow-[0_-15px_40px_-10px_rgba(0,0,0,0.15)] flex items-center justify-center"
          style={{ zIndex: i + 1 }}
        >
          {/* Natural aspect-[4/3] mobile card container ensures 100% edge-to-edge photo fill with zero white/black borders */}
          <Image
            src={src}
            alt={`Project image ${i + 1}`}
            fill
            sizes="(max-width: 768px) 92vw, 90vw"
            className="object-cover p-0"
            priority={i === images.length - 1}
          />

          {/* Conditional text container solely on the last image */}
          {i === images.length - 1 && (
            <div
              ref={textRef}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 translate-y-10 px-6 text-center"
            >
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 md:mb-6 text-center tracking-tight">
                Unbound Potential
              </h2>

              <p className="text-sm sm:text-xl md:text-2xl text-white/90 text-center max-w-2xl px-4 leading-relaxed">
                Keep scrolling down to discover what comes next.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StackedSection;

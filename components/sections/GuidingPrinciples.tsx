"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { principlesData } from "@/data/principles.data";

/**
 * Guiding Principles — cards fade in on scroll; the polygon-mesh SVG
 * background rotates proportionally to scroll progress through the
 * section; cards get a frosted-glass blur on hover.
 */
export default function GuidingPrinciples() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.principle-card').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          delay: i * 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      if (meshRef.current) {
        gsap.to(meshRef.current, {
          rotate: 360,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section bg-navy-900 text-cream-50 text-center overflow-hidden relative" ref={sectionRef}>
      <div 
        ref={meshRef} 
        className="absolute top-1/2 left-1/2 w-[140vw] h-[140vw] -translate-x-1/2 -translate-y-1/2 z-0 opacity-15 rounded-full will-change-transform bg-[repeating-conic-gradient(from_0deg,var(--color-coral-600)_0deg_8deg,transparent_8deg_24deg)]" 
        aria-hidden 
      />

      <div className="container">
        <div className="relative z-10 max-w-[640px] mx-auto mb-12">
          <h2>Guiding Principles</h2>
          <p className="text-muted">
            The principles that guide our decisions, shape our culture and
            define how we create lasting value for our clients, partners and
            stakeholders.
          </p>
        </div>

        <div className="relative z-10 grid gap-6 text-left min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3">
          {principlesData.map((principle) => (
            <div key={principle.id} className="principle-card relative overflow-hidden rounded-md min-h-[280px] isolate glass-frost-hover">
              <Image
                src={principle.image}
                alt={principle.title}
                fill
                className="object-cover -z-20"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/10 to-navy-950/85" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1">
                <h4 className="text-body uppercase tracking-[0.04em]">{principle.title}</h4>
                <p className="text-small text-muted-light">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

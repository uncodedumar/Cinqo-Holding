"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { principlesData } from "@/data/principles.data";

const cardImages = [
  "/images/principles/1.png",
  "/images/principles/2.jpg",
  "/images/principles/3.jpg",
  "/images/principles/4.jpg",
  "/images/principles/5.png",
  "/images/principles/6.jpeg",
];

export default function GuidingPrinciples() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".principle-card").forEach((el, i) => {
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

      if (svgRef.current) {
        gsap.to(svgRef.current, {
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
    <section
      className="section text-ink text-center overflow-hidden relative"
      ref={sectionRef}
    >
      <div
        ref={svgRef}
        className="absolute inset-0 z-0 will-change-transform"
        aria-hidden
        style={{
          background: "linear-gradient(to right, #F5333F, transparent)",
          WebkitMaskImage: 'url("/pattern.svg")',
          WebkitMaskSize: "80%",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: 'url("/pattern.svg")',
          maskSize: "80%",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          opacity: 0.5,
        }}
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
          {principlesData.map((principle, i) => (
            <div
              key={principle.id}
              className={`principle-card relative overflow-hidden rounded-md h-[500px] isolate glass-frost-hover ${i % 3 === 1 ? "translate-y-5" : ""}`}
            >
              <Image
                src={cardImages[i] || principle.image}
                alt={principle.title}
                fill
                className="object-cover -z-20"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-navy-950/90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1">
                <h4 className="text-white uppercase text-sm tracking-[0.04em]">
                  {principle.title}
                </h4>
                <p className="text-white/70 text-xs">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

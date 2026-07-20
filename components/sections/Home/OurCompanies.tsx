"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { companiesData } from "@/data/companies.data";

/**
 * Our Companies — premium photo-backed cards, 3 per row.
 * Cards rise into alignment as the section scrolls into view; on hover the
 * backdrop softens into a blur, the coral divider extends, and the company
 * name grows seamlessly.
 */
export default function OurCompanies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Entrance: heading reveal + scroll-synced "rise" of the card row
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".companies-eyebrow", {
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".companies-eyebrow", start: "top 90%" },
      });
      gsap.from(".companies-heading", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        delay: 0.05,
        ease: "power3.out",
        scrollTrigger: { trigger: ".companies-heading", start: "top 90%" },
      });
      gsap.from(".companies-subheading", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".companies-subheading", start: "top 90%" },
      });

      // Wide scroll range + a stagger that roughly equals each card's own
      // duration, so one card finishes rising before the next one starts.
      gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 88%",
          end: "bottom 25%",
          scrub: 1.2,
        },
      }).from(".company-card", {
        y: 220,
        opacity: 0,
        duration: 1,
        stagger: 1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Hover: card lift, background blur, and element scaling
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(".company-card");
    const cleanups = cards.map((card) => {
      const bg = card.querySelector<HTMLElement>(".company-bg-img");
      const overlay = card.querySelector<HTMLElement>(".company-overlay");
      const innerContent = card.querySelector<HTMLElement>(".company-inner-content");
      const nameEl = card.querySelector<HTMLElement>(".company-name");
      const descEl = card.querySelector<HTMLElement>(".company-desc");
      const arrowEl = card.querySelector<HTMLElement>(".company-arrow");
      const underlineEl = card.querySelector<HTMLElement>(".company-underline");

      const tl = gsap.timeline({ paused: true });

      // Animate the inner content instead of the card container to completely avoid the ScrollTrigger collision
      if (innerContent) {
        tl.to(innerContent, { y: -8, scale: 1.02, duration: 0.55, ease: "power3.out" }, 0);
      }
      
      if (bg) tl.to(bg, { scale: 1, filter: "blur(9px)", duration: 0.65, ease: "power3.out" }, 0);
      if (overlay) tl.to(overlay, { opacity: 1, duration: 0.5, ease: "power2.out" }, 0);
      
      // Safe guard layout-altering properties
      if (nameEl) {
        const baseFontSize = parseFloat(getComputedStyle(nameEl).fontSize);
        tl.to(nameEl, { fontSize: baseFontSize * 1.22, duration: 0.55, ease: "power3.out" }, 0);
      }
      if (underlineEl) tl.to(underlineEl, { width: 64, duration: 0.5, ease: "power3.out" }, 0.05);
      if (descEl) tl.to(descEl, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, 0.08);
      if (arrowEl) tl.to(arrowEl, { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }, 0.12);

      const onEnter = () => tl.play();
      const onLeave = () => tl.reverse();
      
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      
      return () => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
        tl.kill();
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <section className="section bg-white -mt-4" id="companies" ref={sectionRef}>
      <div className="container">
        
        <h2 className="companies-heading">Our Companies</h2>
        <p className="companies-subheading text-h3 mt-2 text-muted">
          Five operating Companies. Governed by one unified structure.
        </p>
<br />
        <div ref={gridRef} className="mt-2 grid gap-6 grid-cols-1 sm:grid-cols-3">
          {companiesData.map((company) => (
            <Link
              href={company.href}
              key={company.id}
              className="company-card group relative isolate block aspect-square w-full overflow-hidden rounded-sm border border-white/10 will-change-transform hover:border-coral-500/60 transition-colors duration-500 shadow-[0_10px_30px_-15px_rgba(10,26,36,0.4)] hover:shadow-[0_30px_60px_-18px_rgba(10,26,36,0.55)]"
            >
              {/* Background photo */}
              <Image
                src={company.bgImage}
                alt=""
                fill
                sizes="(min-width: 640px) 33vw, 90vw"
                className="company-bg-img absolute inset-0 object-cover scale-105"
              />

              {/* Legibility scrim */}
              <div
                className="company-overlay absolute inset-0 opacity-90"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(134, 134, 134, 0.35) 35%, rgba(10,26,36,0.88) 100%)",
                }}
              />

              {/* Added 'company-inner-content' layout wrapper to seamlessly separate interactive translation from the scroll matrix */}
              <div className="company-inner-content relative z-10 flex h-full w-full flex-col justify-between p-6 will-change-transform">
                {/* Logo */}
                <div className="flex justify-start">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={200}
                    height={100}
                    className="h-40 w-auto object-contain sm:h-14"
                  />
                </div>

                {/* Name + description */}
                <div className="flex flex-col min-h-[200px]">
                  <div className="mt-auto">
                  <p className=" line-clamp-6 text-[0.9rem] leading-relaxed text-white ">
                      {company.name}
                    </p>
                    <p className="company-desc mt-6 line-clamp-6 text-[0.9rem] leading-relaxed text-white translate-y-1">
                      {company.description}
                    </p>
                    <span className="company-arrow mt-3 inline-flex items-center gap-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-coral-500 opacity-0 -translate-x-1.5">
                      View Company
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/home" },
      { label: "About", href: "/about" },
      { label: "Companies", href: "/companies" },
      { label: "Cinqo News", href: "/news" },
      { label: "Careers", href: "/careers" },
      { label: "Projects", href: "/projects" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { label: "Cinqo Holding Investments", href: "/businesses/cinqo-holding-investments" },
      { label: "Cinqo Contracting", href: "/businesses/cinqo-contracting" },
      { label: "Cinqo Flooring & Coating Technologies", href: "/businesses/cinqo-flooring-coating-technologies" },
      { label: "Cinqo Trading", href: "/businesses/cinqo-trading" },
      { label: "THC Facilities Management", href: "/businesses/thc-facilities-management" },
      { label: "THC Fitout", href: "/businesses/cinqo-fitout" },
    ],
  },
];

/**
 * Universal footer for every page. Fixed to the bottom of the viewport at a
 * negative z-index so the page content (given a solid background and a
 * margin-bottom matching this footer's real height, see app/layout.tsx)
 * scrolls over it and reveals it only once the user reaches the bottom.
 */
export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const setHeightVar = () => {
      document.documentElement.style.setProperty("--footer-height", `${el.offsetHeight}px`);
    };

    setHeightVar();

    const observer = new ResizeObserver(setHeightVar);
    observer.observe(el);
    window.addEventListener("resize", setHeightVar);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", setHeightVar);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="fixed inset-x-0 bottom-0 z-[-2] max-h-screen overflow-y-auto overflow-x-hidden bg-navy-950 text-cream-50 isolate flex flex-col"
    >
      <Image
        src="/videos/footer/image.webp"
        alt=""
        fill
        className="bg-media object-cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 z-[1] bg-black/25" />

      <div className="container relative z-20 grid gap-10 pt-16 pb-10 md:pt-20 lg:pt-[120px] grid-cols-1 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logos/image.webp"
            alt="Cinqo"
            width={150}
            height={52}
            className="object-contain"
          />
          <p className="text-base text-cream-50">
            Built on commitment. Driven by performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:justify-items-end">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm uppercase tracking-[0.08em] mb-4 text-cream-50 font-semibold">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-base text-cream-50 opacity-85 transition-opacity duration-300 ease-out hover:opacity-100">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <div className="container relative z-20 pb-4">
          <div className="flex justify-center sm:justify-end">
            <div className="flex items-center gap-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream-50 hover:opacity-80 transition-opacity" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream-50 hover:opacity-80 transition-opacity" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cream-50 hover:opacity-80 transition-opacity" aria-label="X (formerly Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M20 4l-6.768 6.768"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cream-50 hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container relative z-20 border-t border-white/20 pt-4 pb-6 text-sm text-cream-50">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Cinqo Holding. All rights reserved.</span>
            <span className="text-cream-50">Designed and developed by Bricklix (PVT) LTD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

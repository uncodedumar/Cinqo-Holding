"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Companies", href: "/companies" },
      { label: "News & Insights", href: "/news" },
      { label: "Careers", href: "/careers" },
      { label: "Projects", href: "/projects" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { label: "Cinqo Contracting", href: "/companies/cinqo-contracting" },
      { label: "Cinqo Trading", href: "/companies/cinqo-trading" },
      { label: "Cinqo Coatings & Coating Technologies", href: "/companies/cinqo-coatings" },
      { label: "THC Facilities Management", href: "/companies/thc-facilities" },
      { label: "THC Fitout", href: "/companies/thc-fitout" },
    ],
  },
];

/**
 * Footer is a static (non-parallax) section, z-index 0 relative to
 * everything above it. Background video plays only on hover.
 */
export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playPromise = useRef<Promise<void> | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      playPromise.current = videoRef.current.play();
      if (playPromise.current !== undefined) {
        playPromise.current.catch(() => {
          // Auto-play was prevented or interrupted
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      if (playPromise.current !== undefined && playPromise.current !== null) {
        playPromise.current.then(() => {
          videoRef.current?.pause();
        }).catch(() => {
          // ignore
        });
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <footer
      className="relative z-0 overflow-hidden bg-navy-950 text-cream-50 isolate h-[620px] flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="bg-media opacity-100"
        src="/videos/footer/footer-bg.mp4"
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="container relative z-20 grid gap-16 pt-[175px] pb-0 min-[900px]:grid-cols-[1fr_2fr] flex-1">
        <div className="flex flex-col gap-4 mt-[75px]">
          <Image
            src="/images/logos/image.webp"
            alt="Cinqo"
            width={120}
            height={40}
            className="object-contain"
          />
          <p className="text-cream-50">
            Built on commitment. Driven by performance.
          </p>
        </div>

        <div className="flex justify-end">
          {FOOTER_COLUMNS.map((col, i) => (
            <div key={col.title} className={i === 0 ? "mr-[100px]" : ""}>
              <h4 className="text-small uppercase tracking-[0.08em] mb-4 text-muted-light">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-small opacity-85 transition-opacity duration-300 ease-out hover:opacity-100">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="-translate-y-[92px]">
        <div className="container relative z-20 pb-1 text-small text-muted-light">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream-50 hover:opacity-80 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream-50 hover:opacity-80 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cream-50 hover:opacity-80 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M20 4l-6.768 6.768"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cream-50 hover:opacity-80 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container relative z-20 border-t border-white/20 pt-1 pb-[25px] text-small text-muted-light">
          <div className="flex items-center justify-between">
            <span>© {new Date().getFullYear()} Cinqo Holding. All rights reserved.</span>
            <span className="text-muted-light">Designed and developed by Bricklix (PVT) LTD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

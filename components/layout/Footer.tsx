"use client";

import { useRef } from "react";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "News & Insights", href: "/news" },
      { label: "Careers", href: "/careers" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { label: "Cinqo Contracting", href: "/companies/cinqo-contracting" },
      { label: "Cinqo Trading", href: "/companies/cinqo-trading" },
      { label: "Cinqo Coatings & Coating Technologies", href: "/companies/cinqo-coatings" },
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

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => videoRef.current?.pause();

  return (
    <footer
      className="relative z-0 overflow-hidden bg-navy-950 text-cream-50 isolate"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="bg-media opacity-[0.35]"
        src="/videos/footer/footer-bg.mp4"
        muted
        loop
        playsInline
        preload="none"
      />
      <div className="bg-overlay" />

      <div className="container relative z-20 grid gap-16 pt-24 pb-12 min-[900px]:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-4">
          {/* TODO: swap for <Image> logo mark */}
          <span className="font-bold tracking-[0.08em] text-h3">CINQO</span>
          <p className="text-muted">
            Built on commitment. Driven by performance.
          </p>
        </div>

        <div className="grid gap-12 grid-cols-2">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
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

      <div className="container relative z-20 border-t border-white/20 py-6 text-small text-muted-light">
        <span>© {new Date().getFullYear()} Cinqo Holding. All rights reserved.</span>
      </div>
    </footer>
  );
}

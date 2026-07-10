"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Companies", href: "/companies" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Projects", href: "/projects" },
];

/**
 * Sticky, glassmorphic navbar.
 * TODO: add scroll-direction hide/show + active-route highlighting.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] border-none transition-all duration-300 ease-out glass ${scrolled ? "bg-navy-900/55" : "bg-navy-900/25"}`}>
      <div className={`container flex items-center justify-between py-4`}>
        <Link href="/" className="font-bold tracking-[0.08em] text-cream-50">
          {/* TODO: swap for <Image> logo mark */}
          CINQO
        </Link>

        <nav className="hidden min-[900px]:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-small text-cream-50 opacity-85 transition-opacity duration-300 ease-out hover:opacity-100">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className={`btn btn-outline text-cream-50 border-white/20`}>
          Contact
        </Link>
      </div>
    </header>
  );
}

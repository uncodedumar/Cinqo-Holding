"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import { businesses } from "@/data/businesses.data";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { scrollToHash } from "@/lib/scroll";

type DropdownLink = { label: string; href: string };
type NavLink = { label: string; href: string; dropdown?: DropdownLink[] };

// Anchors below must match the section ids on /about and /projects.
const ABOUT_DROPDOWN: DropdownLink[] = [
  { label: "About Us", href: "/about#about-us" },
  { label: "Governance, Compliance & HSEQ", href: "/about#governance" },
  { label: "Chairman's Message", href: "/about#chairmans-message" },
  { label: "Directors", href: "/about#directors" },
  { label: "Executive Management", href: "/about#executives" },
];

const PROJECTS_DROPDOWN: DropdownLink[] = [
  { label: "Ongoing Projects", href: "/projects#ongoing-projects" },
  { label: "Completed Projects", href: "/projects#completed-projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const pathname = usePathname();
  const lenis = useLenis();

  const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about", dropdown: ABOUT_DROPDOWN },
    {
      label: "Companies",
      href: "/companies",
      dropdown: businesses.map((b) => ({ label: b.name, href: `/businesses/${b.slug}` })),
    },
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: "Projects", href: "/projects", dropdown: PROJECTS_DROPDOWN },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Evaluate scroll threshold for glassmorphism density
      setScrolled(currentScrollY > 24);

      // 2. Scroll-direction hide/show engine
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // User scrolling down past header zone -> Hide
        setVisible(false);
      } else {
        // User scrolling up -> Reveal
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
    setOpenAccordion(null);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const menuRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLSpanElement>(null);
  const midBarRef = useRef<HTMLSpanElement>(null);
  const bottomBarRef = useRef<HTMLSpanElement>(null);
  const isFirstRender = useRef(true);

  // Hamburger <-> close icon morph + full-screen menu reveal
  useGSAP(() => {
    if (!menuRef.current || !panelRef.current) return;

    // Skip the very first run: the menu is already closed via its Tailwind
    // classes, so there's nothing to animate from until the user toggles it.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const items = linksRef.current?.querySelectorAll(".mobile-nav-item");
    const tl = gsap.timeline();

    if (mobileOpen) {
      tl.set(menuRef.current, { pointerEvents: "auto" })
        .fromTo(menuRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, ease: "power2.out" })
        .fromTo(
          panelRef.current,
          { xPercent: 6, autoAlpha: 0 },
          { xPercent: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" },
          "-=0.25"
        )
        .fromTo(
          items ?? [],
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.06, ease: "power3.out" },
          "-=0.3"
        );

      gsap.to(topBarRef.current, { y: 6, rotate: 45, duration: 0.35, ease: "power2.inOut" });
      gsap.to(midBarRef.current, { autoAlpha: 0, duration: 0.2 });
      gsap.to(bottomBarRef.current, { y: -6, rotate: -45, duration: 0.35, ease: "power2.inOut" });
    } else {
      tl.to(menuRef.current, {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(menuRef.current, { pointerEvents: "none" });
        },
      });

      gsap.to(topBarRef.current, { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" });
      gsap.to(midBarRef.current, { autoAlpha: 1, duration: 0.2, delay: 0.1 });
      gsap.to(bottomBarRef.current, { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" });
    }
  }, [mobileOpen]);

  const toggleAccordion = (label: string) => {
    setOpenAccordion((prev) => (prev === label ? null : label));
  };

  /*
    Anchor clicks that stay on the current page have to be driven manually:
    the App Router pushes the new hash through history without firing
    `hashchange`, and Lenis would fight a native jump anyway. Cross-page
    anchors fall through to normal navigation and are picked up on arrival by
    HashScroller in SmoothScrollProvider.
  */
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileOpen(false);

    // Companies entries are plain routes — nothing to intercept.
    const [path, hash] = href.split("#");
    if (!hash || path !== pathname) return;

    e.preventDefault();
    window.history.replaceState(null, "", href);
    scrollToHash(lenis, hash);
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-[100] border-0 transition-all duration-500 ease-out glass will-change-transform
        ${scrolled ? "bg-navy-900/60 shadow-lg shadow-black/10 py-2.5" : "bg-navy-900/10 py-4"}
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12 relative">

        {/* Left: Aligned completely to the left margin */}
        <div className="flex z-10">
          <Link
            href="/home"
            className="flex items-center transition-transform duration-200 hover:scale-103"
            aria-label="Cinqo Holdings Home"
          >
            <svg
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8.5 w-auto"
            >
              <path d="M24.096 24.2551L45.0002 24.2551L24.096 45.3189L24.096 24.2551Z" fill="#231F20"/>
              <path d="M24.096 21.1562L45.0002 21.1562L24.096 0.09238L24.096 21.1562Z" fill="#808285"/>
              <path d="M20.904 24.3351L-0.000227384 24.3352L20.904 45.399L20.904 24.3351Z" fill="#808285"/>
              <path d="M20.904 21.0761L-0.000227384 21.0761L20.904 0.0123018L20.904 21.0761Z" fill="#231F20"/>
              <path d="M32 22.0006C32 27.5234 27.7467 32.0006 22.5 32.0006C17.2533 32.0006 13 27.5234 13 22.0006C13 16.4777 17.2533 12.0006 22.5 12.0006C27.7467 12.0006 32 16.4777 32 22.0006Z" fill="#FB333E"/>
              <path d="M31.5231 22.5006C31.5231 17.4965 27.4833 13.44 22.5 13.44C17.5167 13.44 13.4769 17.4965 13.4769 22.5006C13.4769 27.5046 17.5167 31.5612 22.5 31.5612C27.4833 31.5612 31.5231 27.5046 31.5231 22.5006ZM34 22.5006C34 28.807 28.8964 34.0006 22.5 34.0006C16.1036 34.0006 11 28.807 11 22.5006C11 16.1942 16.1036 11.0006 22.5 11.0006C28.8964 11.0006 34 16.1942 34 22.5006Z" fill="white"/>
            </svg>
          </Link>
        </div>

        {/* Center: True Screen Absolute Layout Center with custom target gap spacing */}
        <nav className="hidden min-[900px]:flex items-center gap-7 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.label === "Companies" && pathname.startsWith("/businesses/"));

            if (link.dropdown) {
              return (
                <div key={link.href} className="group relative py-2">
                  <Link
                    href={link.href}
                    className={`text-[11px] font-semibold tracking-[0.16em] uppercase text-cream-50 transition-all duration-300 ease-out relative py-1 flex items-center gap-1.5
                      ${isActive ? "opacity-100" : "opacity-75 group-hover:opacity-100"}`}
                  >
                    {link.label}
                    <svg className="w-2.5 h-2.5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    {/* Active route accent underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-cream-50 motion-safe:animate-fade-in" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-[120%] left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[200]">
                    <div className="bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 py-3 rounded-sm min-w-[300px] flex flex-col">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={(e) => handleAnchorClick(e, item.href)}
                          className="px-6 py-3 text-[10px] font-semibold tracking-[0.15em] uppercase text-navy-900 hover:bg-gray-50 hover:text-red-500 transition-colors text-left whitespace-nowrap"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] font-semibold tracking-[0.16em] uppercase text-cream-50 transition-all duration-300 ease-out relative py-1
                  ${isActive ? "opacity-100" : "opacity-75 hover:opacity-100"}`}
              >
                {link.label}
                {/* Active route accent underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-cream-50 motion-safe:animate-fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Contact CTA on desktop, hamburger toggle on mobile */}
        <div className="flex items-center z-10 gap-4">
          <div className="hidden min-[900px]:flex">
            <Button href="/contact">
              Contact
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex min-[900px]:hidden relative w-[28px] h-[18px] flex-col justify-between"
          >
            <span ref={topBarRef} className="block h-[2px] w-full rounded-full bg-cream-50 origin-center" />
            <span ref={midBarRef} className="block h-[2px] w-full rounded-full bg-cream-50 origin-center" />
            <span ref={bottomBarRef} className="block h-[2px] w-full rounded-full bg-cream-50 origin-center" />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile full-screen menu (rendered outside <header> so its fixed
          positioning is relative to the viewport, not the header's own
          will-change-transform containing block) */}
      <div
        ref={menuRef}
        className="invisible opacity-0 fixed inset-0 z-[150] min-[900px]:hidden pointer-events-none"
      >
        <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-md" onClick={() => setMobileOpen(false)} />

        <div
          ref={panelRef}
          className="relative h-full w-full flex flex-col overflow-y-auto px-6 pt-24 pb-10"
        >
          {/* Explicit close affordance — the hamburger morphs into an X behind
              the overlay, so the panel needs its own visible dismiss target. */}
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="absolute top-7 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-cream-50 transition-colors hover:bg-white/10 active:bg-white/15"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div ref={linksRef} className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.label === "Companies" && pathname.startsWith("/businesses/"));

              if (link.dropdown) {
                const isOpen = openAccordion === link.label;
                return (
                  <div key={link.href} className="mobile-nav-item border-b border-white/10">
                    <div className="flex items-center justify-between py-4">
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`text-2xl font-semibold uppercase tracking-wide text-cream-50 ${isActive ? "opacity-100" : "opacity-85"}`}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleAccordion(link.label)}
                        aria-label={`Toggle ${link.label} submenu`}
                        aria-expanded={isOpen}
                        className="p-2 -mr-2 text-cream-50"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <MobileAccordion isOpen={isOpen}>
                      <div className="flex flex-col gap-1 pb-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleAnchorClick(e, item.href)}
                            className="py-2.5 pl-4 text-sm font-medium uppercase tracking-[0.1em] text-cream-50/75 hover:text-cream-50 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </MobileAccordion>
                  </div>
                );
              }

              return (
                <div key={link.href} className="mobile-nav-item border-b border-white/10">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-4 text-2xl font-semibold uppercase tracking-wide text-cream-50 ${isActive ? "opacity-100" : "opacity-85"}`}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mobile-nav-item mt-10">
            <Button href="/contact" className="w-full justify-center text-center">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileAccordion({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useGSAP(() => {
    if (!contentRef.current) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    gsap.to(contentRef.current, {
      height: isOpen ? "auto" : 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, [isOpen]);

  return (
    <div ref={contentRef} className="overflow-hidden h-0">
      {children}
    </div>
  );
}

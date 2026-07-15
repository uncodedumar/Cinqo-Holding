"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { businesses } from "@/data/businesses.data";

const NAV_LINKS = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Companies", href: "/companies" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] border-0 transition-all duration-500 ease-out glass will-change-transform
        ${scrolled ? "bg-navy-900/60 shadow-lg shadow-black/10 py-1.5" : "bg-navy-900/10 py-2.5"} 
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
            const isActive = pathname === link.href || (link.label === "Companies" && pathname.startsWith("/businesses/"));
            
            if (link.label === "Companies") {
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
                    <div className="bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 py-3 rounded-sm min-w-[280px] flex flex-col">
                      {businesses.map((b) => (
                        <Link 
                          key={b.slug}
                          href={`/businesses/${b.slug}`}
                          className="px-6 py-3 text-[10px] font-semibold tracking-[0.15em] uppercase text-navy-900 hover:bg-gray-50 hover:text-red-500 transition-colors text-left whitespace-nowrap"
                        >
                          {b.name}
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

        {/* Right: Aligned completely to the right margin */}
        <div className="flex z-10">
          <Button href="/contact">
            Contact
          </Button>
        </div>

      </div>
    </header>
  );
}
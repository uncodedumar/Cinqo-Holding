"use client";

import Image from "next/image";
import Link from "next/link";
import { companiesData } from "@/data/companies.data";
import { useEffect, useRef, useState } from "react";

export default function OurCompanies() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger the "rise up" animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it has animated
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="companies"
      // Added transition classes for the rise-up effect
      className={`section bg-white -mt-4 transition-all duration-1000 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`} 
    >
      <div className="container">
        <h2 className="text-4xl font-bold">Our Companies</h2>
        <p className="text-h3 mt-2 text-muted">
          Five operating Companies. Governed by one unified structure.
        </p>
        <br />
        
        {/* Added stretch to ensure grid items match height */}
        <div className="mt-2 grid gap-6 grid-cols-1 sm:grid-cols-3 items-stretch">
          {companiesData.map((company) => (
            <Link
              href={company.href}
              key={company.id}
              // Removed `aspect-square`. Added `h-full`, `min-h-[400px]`, and `flex` to dynamically adjust to content.
              className="group relative isolate flex flex-col w-full min-h-[400px] overflow-hidden rounded-sm border border-white/10 transition-all duration-500 hover:border-coral-500/60 shadow-[0_10px_30px_-15px_rgba(10,26,36,0.4)] hover:shadow-[0_30px_60px_-18px_rgba(10,26,36,0.55)]"
            >
              {/* Background photo */}
              <Image
                src={company.bgImage}
                alt=""
                fill
                sizes="(min-width: 640px) 33vw, 90vw"
                className="absolute inset-0 object-cover scale-105 transition-all duration-500 group-hover:scale-100 group-hover:blur-[6px] -z-10"
              />

              {/* Legibility scrim */}
              <div
                className="absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100 -z-10"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(37, 37, 37, 0.55) 0%, rgba(0, 0, 0, 0.35) 35%, rgba(10,26,36,0.88) 100%)",
                }}
              />

              {/* Inner Content Layout */}
              <div className="relative z-10 flex h-full w-full flex-col justify-between p-6 transition-transform duration-500 group-hover:-translate-y-2">
                
                {/* Logo */}
                <div className="flex justify-start mb-8">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={240}
                    height={120}
                    className="h-24 w-auto object-contain sm:h-20"
                  />
                </div>

                {/* Name + description */}
                <div className="flex flex-col mt-auto">
                  {/* Removed line-clamp-6 so all text displays perfectly */}
                  <p className="text-[1rem] font-medium leading-relaxed text-white transition-all duration-500 group-hover:text-[1.15rem]">
                    {company.name}
                  </p>
                  {/* Removed line-clamp-6 here as well */}
                  <p className="mt-4 text-[0.9rem] leading-relaxed text-white/90">
                    {company.description}
                  </p>
                  
                  {/* Arrow / View Button */}
                  <span className="mt-6 inline-flex items-center gap-1 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-coral-500 opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    View Company
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
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
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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
      className={`section bg-slate-50/60 transition-all duration-1000 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`} 
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Companies</h2>
          <p className="text-base sm:text-lg mt-3 text-gray-600">
            Five operating Companies. Governed by one unified structure.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {companiesData.map((company) => (
            <Link
              href={company.href}
              key={company.id}
              className="group flex flex-col w-full bg-white rounded-2xl border border-gray-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden hover:-translate-y-1.5"
            >
              {/* Top Photo Banner */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-100">
                <Image
                  src={company.bgImage}
                  alt={company.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlapping White Logo Badge */}
              <div className="relative z-10 -mt-10 mx-auto bg-white rounded-xl shadow-md border border-gray-100/90 px-4 py-2 flex items-center justify-center min-w-[120px] max-w-[150px] h-14 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={130}
                  height={55}
                  className="max-h-10 max-w-[110px] w-auto object-contain"
                />
              </div>

              {/* Card Content Body */}
              <div className="flex-1 flex flex-col justify-between pt-4 pb-5 px-6 text-center">
                <div>
                  {/* Company Name */}
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug mb-3 group-hover:text-coral-600 transition-colors">
                    {company.name}
                  </h3>

                  {/* Company Description */}
                  <p className="text-xs sm:text-[0.875rem] text-gray-600 leading-relaxed font-normal">
                    {company.description}
                  </p>
                </div>

                {/* Footer section with divider line */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-coral-600 transition-colors">
                    View Company
                  </span>
                  <span className="text-coral-600 transition-transform duration-300 group-hover:translate-x-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
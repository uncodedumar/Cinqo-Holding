"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Data ---
const directors = [
  { name: "Junaid Usman", image: "/images/about/JunaidUsman.png" },
  { name: "Sufyan Usman", image: "/images/about/SufyanUsman.png" },
  { name: "Uzair Usman", image: "/images/about/UzairUsman.png" },
];

const executives = [
  { name: "Siby", designation: "General Manager – Cinqo Contracting", image: "/images/about/Siby.png" },
  { name: "Salman", designation: "Operations Manager – Cinqo Contracting", image: "/images/about/Salman.png" },
  { name: "Ranjith", designation: "General Manager – Cinqo Trading", image: "/images/about/Ranjith.png" },
  { name: "Mohd Ali", designation: "General Manager – THC Facilities Management", image: "/images/about/Ali.png" },
  { name: "Collins", designation: "General Manager – THC Fit Out", image: "/images/about/Collins.png" },
  { name: "Prakash", designation: "Group Finance Manager", image: "/images/about/Prakash.png" },
  { name: "Satish", designation: "Group HR Manager", image: "/images/about/Satish.png" },
  { name: "Alok", designation: "Group Business Development Manager", image: "/images/about/Alok.png" },
  { name: "Selina", designation: "Group Admin Manager", image: "/images/about/Selina.png" },
];

// --- Icons ---
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-colors duration-500">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Smooth Rise-Up Reveal Animation
    gsap.utils.toArray<HTMLElement>(".reveal-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // 2. Professional Parallax on the wrapper instead of the image directly
    gsap.utils.toArray<HTMLElement>(".parallax-wrapper").forEach((wrapper) => {
      gsap.fromTo(
        wrapper,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 px-6 max-w-[1400px] mx-auto font-sans bg-white">
      
      {/* ================= DIRECTORS SECTION ================= */}
      <h2 id="directors" className="text-2xl font-bold text-gray-900 mb-8 tracking-wide scroll-mt-28">Directors</h2>
      
      {/* Directors Grid */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
        {directors.map((director, index) => (
          <div key={index} className="reveal-card group cursor-pointer flex flex-col gap-4">
            
            {/* Clean Container Without Blue Background */}
            <div className="relative w-full aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              {/* Separate Parallax node to avoid GSAP/Tailwind conflict */}
              <div className="parallax-wrapper absolute inset-0 w-full h-full">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="scale-[1.25] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.3]"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10 z-10 pointer-events-none" />
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[1.1rem] font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                  {director.name}
                </h3>
              </div>
              <div className="text-gray-400 transition-colors duration-300 group-hover:text-blue-700">
                <LinkedInIcon />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DIVIDER ================= */}
      <hr className="border-t border-gray-200 my-16" />

      {/* ================= EXECUTIVE MANAGEMENT SECTION ================= */}
      <h2 id="executives" className="text-2xl font-bold text-gray-900 mb-8 tracking-wide scroll-mt-28">Executive Management</h2>
      
      {/* First 8 Executives Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {executives.slice(0, 8).map((exec, index) => (
          <div key={index} className="reveal-card group cursor-pointer flex flex-col gap-4">
            <div className="relative w-full aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="parallax-wrapper absolute inset-0 w-full h-full">
                <Image
                  src={exec.image}
                  alt={exec.name}
                  fill
                  className="scale-[1.25] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.3]"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10 z-10 pointer-events-none" />
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[1.05rem] font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                  {exec.name}
                </h3>
                <p className="text-[0.8rem] text-gray-500 mt-1 transition-colors duration-300 group-hover:text-gray-700">
                  {exec.designation}
                </p>
              </div>
              <div className="text-gray-400 mt-1 transition-colors duration-300 group-hover:text-blue-700">
                <LinkedInIcon />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Last Executive (Selina) */}
      <div className="flex justify-center mt-12">
        <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
          <div className="reveal-card group cursor-pointer flex flex-col gap-4">
            <div className="relative w-full aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="parallax-wrapper absolute inset-0 w-full h-full">
                <Image
                  src={executives[8].image}
                  alt={executives[8].name}
                  fill
                  className="scale-[1.25] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.3]"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10 z-10 pointer-events-none" />
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[1.05rem] font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                  {executives[8].name}
                </h3>
                <p className="text-[0.8rem] text-gray-500 mt-1 transition-colors duration-300 group-hover:text-gray-700">
                  {executives[8].designation}
                </p>
              </div>
              <div className="text-gray-400 mt-1 transition-colors duration-300 group-hover:text-blue-700">
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
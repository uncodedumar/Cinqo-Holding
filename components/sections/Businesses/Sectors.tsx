"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image'; // 1. Import Next.js Image
import { SectorShowcaseItem } from '@/data/businesses.data';

// Increased width and height for bigger cards
const cardStyle: React.CSSProperties = {
  width: '320px', 
  height: '420px',
  overflow: 'hidden',
  position: 'relative',
  flexShrink: 0,
  borderRadius: '8px'
};

export default function Sectors({ 
  sectorShowcase,
}: { 
  sectorShowcase: SectorShowcaseItem[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Setup GSAP animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-rise-up",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-white text-ink font-sans p-4 md:p-8 pb-16 md:pb-24">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Sectors Header + Cards */}
        {/* Increased gap from gap-6 to gap-12 to add more space between heading and cards */}
        <div className="flex flex-col gap-8 md:gap-12">
          
        {/* Sectors Header */}
        {/* Added mb-6 for additional space below the header */}
        <div className="text-center pt-4 mb-6 gsap-rise-up" style={{ opacity: 0 }}>
          <h1 className="font-['Inter'] text-xl font-medium tracking-widest uppercase">Sectors</h1>
        </div>

        {/* Sectors Grid */}
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-2 mx-4">
          {sectorShowcase.map((s: SectorShowcaseItem) => (
          <div 
            key={s.title} 
            className="group border border-muted transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer gsap-rise-up" 
            style={{ 
              ...cardStyle, 
              opacity: 0
            }}
          >
            {/* 2. Replaced <img> with Next.js <Image> */}
            <Image 
              src={s.image} 
              alt={s.title}
              fill
              sizes="280px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
            
            {/* Card Content */}
            <div className="absolute bottom-0 left-0 w-full px-[12px] pt-3 pb-[12px] text-white transform transition-transform duration-500">
              <h2 className="font-['Inter'] text-[18px] font-normal uppercase tracking-wider drop-shadow-md whitespace-pre-line leading-tight min-h-[3.5rem] md:min-h-[4.5rem]">
                {s.title}
              </h2>
              <p className="font-['Inter'] text-[15px] font-light leading-snug opacity-90 drop-shadow-sm mt-1 min-h-[4.5rem] md:min-h-[5.5rem]">
                {s.description}
              </p>
            </div>
          </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
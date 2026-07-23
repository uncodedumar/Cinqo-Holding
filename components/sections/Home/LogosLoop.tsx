"use client";
import Image from "next/image";
import { logosData } from "@/data/logos.data";

export default function TrustedBySection() {
  return (
    <section 
      className="bg-white py-6 flex flex-col items-center w-full px-4 md:px-10 overflow-hidden"
      aria-labelledby="trusted-by-heading"
    >
      {/* 1. Header Text Container */}
      <div className="w-full max-w-[1400px] flex flex-col items-start mb-3 px-2">
        <div className="relative">
          <p id="trusted-by-heading" className="text-md font-light text-slate-900">
            Exclusive and authorized representation of leading global manufacturers, delivering world-class technical solutions across coatings, chemicals, and infrastructure.
          </p>
        </div>
      </div>

      {/* Reduced container height to keep the loop concise */}
      <div 
        className="relative w-full max-w-[1400px] py-4 md:py-8 overflow-hidden flex flex-col justify-center"
      >

        {/* Row: Smooth Marquee */}
        <div 
          className="relative z-10 flex overflow-x-hidden group w-full"
          role="region" 
          aria-label="Scrolling brand logos"
        >
          <div className="animate-marquee flex whitespace-nowrap gap-6 md:gap-10 items-center">
            {[...logosData, ...logosData, ...logosData].map((logoItem, i) => (
              <div 
                key={`logo-${logoItem.id}-${i}`} 
                className="relative h-12 md:h-20 w-36 md:w-56 flex-shrink-0"
              >
                <Image 
                  src={logoItem.logo} 
                  alt={`${logoItem.name} logo`}
                  fill
                  sizes="(max-width: 768px) 144px, 224px"
                  className="object-contain" 
                  priority={i < logosData.length}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: no-preference) {
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            overflow-x: auto;
            white-space: normal;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";

const timelineData = [
  {
    title: "COMMERCIAL DUE DILIGENCE",
    description:
      "Assessment of market opportunity, competitive positioning and commercial viability.",
  },
  {
    title: "OPERATIONAL EVALUATION",
    description:
      "Review of management capability, operational efficiency and scalability.",
  },
  {
    title: "FINANCIAL ANALYSIS",
    description:
      "Evaluation of cash flow, capital requirements, return expectations and downside protection.",
  },
  {
    title: "RISK ASSESSMENT",
    description:
      "Analysis of regulatory, operational and commercial risks affecting long-term sustainability.",
  },
  {
    title: "GOVERNANCE ALIGNMENT",
    description:
      "Assessment of compatibility with the Group’s governance, reporting and financial control standards.",
  },
  {
    title: "STRATEGIC FIT",
    description:
      "Evaluation of long-term relevance, potential synergies and contribution to the Group’s portfolio.",
  },
];

const investmentsData = [
  {
    logoAlt: "Procural",
    logoSrc: "/images/investments/procural.png",
    description:
      "A digital B2B procurement and tendering platform connecting buyers and suppliers through smarter and transparent procurement.",
    url: "https://www.procural.com",
  },
  {
    logoAlt: "AROOJ development company",
    logoSrc: "/images/investments/arooj.png",
    description:
      "Developing planned residential communities that combine quality construction, functional design and comfortable living.",
    logoSizeClass: "w-[90%] h-24",
    logoScaleClass: "scale-[0.9]",
  },
  {
    logoAlt: "ilium composites",
    logoSrc: "/images/investments/ilium.png",
    description:
      "A Bahrain based manufacturer of advanced glass-fibre reinforcements for composite manufacturing across global industrial markets.",
    url: "https://www.iliumcomposites.com",
  },
  {
    logoAlt: "Al Rashid Health Center",
    logoSrc: "/images/investments/Rashid_Health-Centre.png",
    description:
      "Providing accessible, patient-focused healthcare services with an emphasis on quality, professional care and community wellbeing.",
    url: "https://www.rashidcenter.com",
    logoSizeClass: "w-[95%] h-32",
    logoScaleClass: "scale-125",
  },
];

const TimelineItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Detects when the item reaches roughly the vertical center of the viewport
  const isInView = useInView(itemRef, { margin: "-45% 0px -45% 0px" });

  return (
    <motion.div
      ref={itemRef}
      initial={false}
      animate={{
        x: isInView ? 0 : -20,
        opacity: isInView ? 1 : 0.3,
      }}
      whileHover={{ x: 10, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mb-16 origin-left pl-16 md:pl-24 cursor-pointer group"
    >
      {/* Interactive Card Wrapper */}
      <div 
        className={`p-6 rounded-2xl transition-all duration-500 border ${
          isInView 
            ? "bg-gray-50 border-gray-200 shadow-sm" 
            : "bg-transparent border-transparent"
        }`}
      >
        <h3 className="text-[15px] font-semibold text-black uppercase tracking-wide mb-2 group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-700 text-base leading-relaxed max-w-xl group-hover:text-black transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function GovernanceTimelineAndInvestments() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress specifically within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the scroll progress to prevent jittering, especially on mobile touch devices
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map the smooth scroll progress (0 to 1) to the vertical position (0% to 100%)
  const markerPosition = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* ======================= */}
      {/* TIMELINE SECTION        */}
      {/* ======================= */}
      <section className="w-full pt-12 pb-10 md:py-32 px-6 flex flex-col items-center overflow-hidden">
        {/* Top Heading */}
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-10 md:mb-24 text-center text-black">
          Governance & Oversight
        </h2>

        {/* Main Timeline Container */}
        <div
          ref={containerRef}
          className="relative flex max-w-4xl w-full"
        >
          {/* Shared Axis Wrapper for Perfect Centering */}
          <div className="absolute left-[15px] md:left-[30px] top-0 bottom-0 flex justify-center w-0 z-10">
            {/* Background Track Line */}
            <div className="absolute top-0 bottom-0 w-[2px] bg-gray-100 rounded-full" />
            
            {/* Active Animated Track Line */}
            <motion.div 
              style={{ height: markerPosition }}
              className="absolute top-0 w-[2px] bg-red-600 rounded-full origin-top" 
            />

            {/* The Scrolling Image Marker */}
            <motion.div
              style={{ top: markerPosition }}
              className="absolute -translate-y-1/2 w-12 h-12 flex items-center justify-center "
            >
<Image
                src="/images/logos/Circle.webp"
                alt="Scroll Marker Indicator"
                width={48}
                height={48}
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* The Text Content List */}
          <div className="w-full flex flex-col py-8 relative z-0">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======================= */}
      {/* INVESTMENTS SECTION     */}
      {/* ======================= */}
      <section className="w-full pt-4 pb-12 md:py-24 px-6 flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-8 md:mb-16 text-center text-black">
          Investments
        </h2>

        {/* 
          Grid Container: 
          Using Flex with wrap and justify-center naturally achieves the 
          3 top / 2 bottom perfectly centered layout if max-width is constrained.
        */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-2 max-w-full w-full">
          {investmentsData.map((investment, index) => {
            const className =
              "bg-[#c8cccf] w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-0.375rem)] max-w-[260px] md:max-w-[300px] lg:max-w-none aspect-square flex flex-col items-center justify-center p-5 md:p-6 rounded-sm text-center mx-auto";

            const cardContent = (
              <>
                {/* Logo Wrapper */}
                <div className="flex-1 flex items-end justify-center pb-6 w-full">
                  {/* Fallback styling for when images aren't loaded yet. 
                      Will automatically use the img tag when paths are correct. */}
                  <div className={`relative ${investment.logoScaleClass || ""} ${investment.logoSizeClass || "w-[80%] h-16"} flex items-center justify-center`}>
                    <Image
                      src={investment.logoSrc}
                      alt={investment.logoAlt}
                      fill
                      className="object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                        const fallback = document.createElement('span');
                        fallback.className = 'font-bold text-xl text-black';
                        fallback.textContent = investment.logoAlt;
                        e.currentTarget.parentElement?.appendChild(fallback);
                      }}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 flex items-start pt-2">
                  <p className="text-gray-700 text-[13px] leading-relaxed">
                    {investment.description}
                  </p>
                </div>
              </>
            );

            if (investment.url) {
              return (
                <a key={index} href={investment.url} target="_blank" rel="noopener noreferrer" className={className}>
                  {cardContent}
                </a>
              );
            }

            return (
              <div key={index} className={className}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
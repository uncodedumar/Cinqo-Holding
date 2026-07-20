"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

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
    logoAlt: "ilium composites",
    logoSrc: "/images/investments/ilium.png", // Update these paths with your actual logo files
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    logoAlt: "Procural",
    logoSrc: "/images/investments/procural.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    logoAlt: "AROOJ development company",
    logoSrc: "/images/investments/arooj.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    logoAlt: "Al Rashid Health Center",
    logoSrc: "/images/investments/al-rashid.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    logoAlt: "ETSMA",
    logoSrc: "/images/investments/etsma.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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

  // Map the scroll progress (0 to 1) to the vertical position (0% to 100%)
  const markerPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* ======================= */}
      {/* TIMELINE SECTION        */}
      {/* ======================= */}
      <section className="w-full py-32 px-6 flex flex-col items-center overflow-hidden">
        {/* Top Heading */}
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-24 text-center text-black">
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
              <img 
                src="/images/logos/Circle.webp" 
                alt="Scroll Marker Indicator" 
                className="w-full h-full object-contain "
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
      <section className="w-full py-24 px-6 flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-16 text-center text-black">
          Investments
        </h2>

        {/* 
          Grid Container: 
          Using Flex with wrap and justify-center naturally achieves the 
          3 top / 2 bottom perfectly centered layout if max-width is constrained.
        */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-full w-full">
          {investmentsData.map((investment, index) => (
            <div 
              key={index}
              className="bg-[#c8cccf] w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] max-w-[320px] aspect-square flex flex-col items-center justify-center p-8 rounded-sm text-center"
            >
              {/* Logo Wrapper */}
              <div className="flex-1 flex items-end justify-center pb-6 w-full">
                {/* Fallback styling for when images aren't loaded yet. 
                    Will automatically use the img tag when paths are correct. */}
                <div className="relative w-[80%] h-16 flex items-center justify-center">
                  <img 
                    src={investment.logoSrc} 
                    alt={investment.logoAlt}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback text if image path is broken temporarily
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-xl text-black">${investment.logoAlt}</span>`;
                    }}
                  />
                </div>
              </div>

              {/* Dummy Text */}
              <div className="flex-1 flex items-start pt-2">
                <p className="text-gray-700 text-[13px] leading-relaxed">
                  {investment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
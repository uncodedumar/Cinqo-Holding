"use client";

import { BusinessData } from "@/data/businesses.data";
import Hero from "@/components/sections/reusable/Hero";
import type { HeroSlideV2 } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro({ business }: { business: BusinessData }) {
  const heroSlide: HeroSlideV2 = {
    id: business.slug,
    image: business.heroImage,
    alt: business.name,
    headline1: business.name,
    imagePosition: business.heroImagePosition || (business.slug === "cinqo-holding-investments" ? "50% 100%" : "center center"),
  };

  // Animation configuration for the "rise up" effect
  const riseUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full flex flex-col">
      <Hero slides={[heroSlide]} showDots={false} variant="compact" />

      {/* Intro Text Section */}
      <div className="relative w-full py-16 md:py-24 overflow-hidden">
        
        {/* Background Handling: Video with Image Fallback */}
        <div className="absolute inset-0 z-0">
          {business.introBgVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={business.introBgImage}
              className="absolute inset-0 w-full h-full object-cover brightness-100 saturate-[0.5] contrast-[0.95]"
            >
              <source src={business.introBgVideo} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={business.introBgImage}
              alt={`${business.name} Background`}
              fill
              className="object-cover brightness-100 saturate-[0.5] contrast-[0.95]"
              sizes="100vw"
            />
          )}
          {/* Light overlay to wash out the background and ensure text legibility */}
          <div className="absolute inset-0 bg-white/80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          
          {/* Two-column layout mimicking the reference image exactly */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
            
            {/* Left side: Heading */}
            <motion.div 
              className="w-full md:w-1/4 pt-1" // pt-1 ensures crisp alignment with paragraph top
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={riseUpVariants}
            >
              {business.introHeading && (
                <h2 className="text-base md:text-lg font-semibold text-black uppercase whitespace-pre-line tracking-wide">
                  {business.introHeading}
                </h2>
              )}
            </motion.div>

            {/* Right side: Descriptive Text */}
            <motion.div 
              className="w-full md:w-3/4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.8, ease: "easeOut", delay: 0.15 } // slight delay for a cascading feel
                }
              }}
            >
              <p className="text-[1.375rem] text-black/80 leading-relaxed font-light whitespace-pre-line">
                {business.introText}
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
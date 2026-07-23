"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const governanceCards = [
  {
    title: "ETHICAL CONDUCT\n& COMPLIANCE",
    description:
      "The Group operates within a defined regulatory and ethical framework. Compliance, transparency and responsible conduct guide all commercial and operational activities.",
    image: "/images/about/conImp.jpeg", // Replace with your image paths
  },
  {
    title: "DELEGATION &\nAPPROVALS",
    description:
      "Procurement, subcontracting, commercial decisions & financial commitments operate within documented approval frameworks designed to maintain accountability and alignment with Group policy.",
    image: "/images/about/delegation.jpeg",
  },
  {
    title: "QUALITY\nASSURANCE",
    description:
      "Quality is supported through documented procedures, inspection protocols and performance monitoring systems. Materials, workmanship and service delivery are evaluated against established standards and project requirements.",
    image: "/images/about/QA.jpeg",
  },
  {
    title: "HEALTH, SAFETY &\nENVIRONMENT (HSE)",
    description:
      "Health, Safety and Environment principles are embedded throughout the organization. From planning and procurement to execution and handover, the Group remains committed to protecting people, property & the environment while delivering work to the highest professional standards.",
    image: "/images/about/health.jpeg",
  },
  {
    title: "CERTIFICATIONS",
    description:
      "Operating systems are aligned with recognised industry and OEM standards. Certifications reflect the discipline, technical capability and quality standards maintained across the Group.",
    image: "/images/about/certification.jpeg",
  },
  {
    title: "RISK MANAGEMENT",
    description:
      "The Group applies structured risk assessment and mitigation processes across commercial and operational activities. Regular reviews support informed decision making, business continuity and the protection of stakeholder interest.",
    image: "/images/about/Risk.jpeg",
  },
];

export default function GovernanceGrid() {
  const sectionRef = useRef(null);

  // Parallax Scroll setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle Parallax for Cards & Stronger Parallax for the Tower Image
  const cardParallaxY = useTransform(scrollYProgress, [0, 1], ["-5%", "50%"]);
  const towerParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      id="governance"
      ref={sectionRef}
      className="bg-white py-12 md:py-16 overflow-hidden scroll-mt-28"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-8 [font-family:var(--font-display)] font-medium text-[20px] md:text-[24px] tracking-normal text-ink uppercase">
            GOVERNANCE, COMPLIANCE AND HSEQ
          </h2>
        </motion.div>

        {/* Main Section Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Block: Compact 2-Column Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {governanceCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-sm overflow-hidden flex flex-col justify-between min-h-[320px] sm:min-h-[380px] lg:min-h-[auto] cursor-default"
              >
                {/* Background Image with Parallax & Hover Scale */}
                <motion.div 
                  style={{ y: cardParallaxY }}
                  className="absolute inset-0 -top-[10%] h-[120%] z-0"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                </motion.div>

                {/* Heavy Gradient Overlay for 100% Text Visibility */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-black/40 transition-colors duration-500 group-hover:bg-black/50" />

                {/* Card Content */}
                <div className="relative z-20 px-5 py-[10%] flex flex-col justify-between h-full transform transition-transform duration-500 group-hover:-translate-y-1">
                  {/* Section Title Anchor */}
                  <h3 className="[font-family:var(--font-body)] font-medium text-[15px] md:text-[16px] leading-[1.3] text-white tracking-wide whitespace-pre-line drop-shadow-md">
                    {card.title}
                  </h3>
                  <br /><br />
                  {/* Description Copy Anchor */}
                  <p className="[font-family:var(--font-body)] font-normal text-[12.5px] md:text-[13px] leading-[1.5] text-gray-200 tracking-normal antialiased drop-shadow-sm">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Block: Domineering Column Banner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative min-h-[500px] lg:min-h-full rounded-[2px] overflow-hidden"
          >
            {/* Parallax Container for Tower - Sized larger to allow vertical panning without clipping */}
            <motion.div 
              style={{ y: towerParallaxY }} 
              className="absolute inset-0 w-full h-[124%] -top-[12%]"
            >
              <Image
                src="/images/about/YusafBinKanoo.jpg"
                alt="Kanoo Tower Architecture"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
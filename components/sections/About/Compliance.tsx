"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const governanceCards = [
  {
    title: "ETHICAL CONDUCT & COMPLIANCE",
    description:
      "The Group operates within a defined regulatory and ethical framework. Compliance, transparency and responsible conduct guide all commercial and operational activities.",
  },
  {
    title: "DELEGATION & APPROVALS",
    description:
      "Procurement, subcontracting, commercial decisions & financial commitments operate within documented approval frameworks designed to maintain accountability and alignment with Group policy.",
  },
  {
    title: "QUALITY ASSURANCE",
    description:
      "Quality is supported through documented procedures, inspection protocols and performance monitoring systems. Materials, workmanship and service delivery are evaluated against established standards and project requirements.",
  },
  {
    title: "HEALTH, SAFETY & ENVIRONMENT (HSE)",
    description:
      "Health, Safety and Environment principles are embedded throughout the organization. From planning and procurement to execution and handover, the Group remains committed to protecting people, property & the environment while delivering work to the highest professional standards.",
  },
  {
    title: "CERTIFICATIONS",
    description:
      "Operating systems are aligned with recognised industry and OEM standards. Certifications reflect the discipline, technical capability and quality standards maintained across the Group.",
  },
  {
    title: "RISK MANAGEMENT",
    description:
      "The Group applies structured risk assessment and mitigation processes across commercial and operational activities. Regular reviews support informed decision making, business continuity and the protection of stakeholder interest.",
  },
];

export default function GovernanceGrid() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-12 md:mb-16 [font-family:var(--font-display)] font-bold text-h2 tracking-tight text-ink">
            GOVERNANCE, COMPLIANCE AND HSEQ
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 min-h-[90vh]">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 auto-rows-fr">
            {governanceCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -6,
                  borderColor: "var(--color-coral-500)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
                }}
                className="bg-white border border-line rounded-sm px-4 pt-3 pb-3 flex flex-col justify-between gap-1 aspect-[4/4.4] cursor-default"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.1 }}
                  className="[font-family:var(--font-body)] font-normal text-[20px] leading-[24px] text-ink tracking-normal min-h-[48px]"
                >
                  {card.title}
                </motion.h3>
                <p className="[font-family:var(--font-body)] font-normal text-[14px] leading-[21px] tracking-normal text-muted">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[280px] lg:min-h-[90vh] rounded-md overflow-hidden"
          >
            <Image
              src="/images/about/tower.png"
              alt="Cinqo Tower"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
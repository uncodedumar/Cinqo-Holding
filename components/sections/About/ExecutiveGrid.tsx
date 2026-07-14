"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { executives } from "./about.data";

export default function ExecutiveGrid() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTitle className="mb-12">Executive Management</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {executives.map((exec, i) => (
            <motion.div
              key={`${exec.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="bg-white border border-[#e5e5e5] rounded-[12px] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={exec.image}
                  alt={exec.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-[var(--font-body)] font-bold text-[15px] tracking-normal text-[#1d1d1d]">
                    {exec.name}
                  </h3>
                  <p className="font-[var(--font-body)] font-normal text-[13px] leading-[18px] tracking-normal text-[#6f6f6f] mt-0.5">
                    {exec.position}
                  </p>
                </div>
                <svg className="w-4 h-4 text-[#6f6f6f] shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </motion.div>
          ))}
          {executives.length % 4 !== 0 && Array.from({ length: 4 - (executives.length % 4) }).map((_, i) => (
            <div key={`placeholder-${i}`} className="hidden lg:block" />
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { governanceCards } from "./about.data";

export default function GovernanceGrid() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTitle className="mb-12 md:mb-16">
            GOVERNANCE, COMPLIANCE AND HSEQ
          </SectionTitle>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 min-h-[100vh]">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
            {governanceCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="bg-white border border-[#e5e5e5] rounded-sm px-2 pt-[10px] pb-[10px] flex flex-col justify-between gap-1 aspect-[4/5]"
              >
                <h3 className="font-[var(--font-body)] font-normal text-[26px] leading-[27.8px] text-[#1d1d1d] tracking-normal min-h-[56px]">
                  {card.title}
                </h3>
                <p className="font-[var(--font-body)] font-normal text-[16px] leading-[24px] tracking-normal text-[#6f6f6f]">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative min-h-[300px] lg:min-h-[100vh] rounded-[12px] overflow-hidden"
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
      </Container>
    </section>
  );
}

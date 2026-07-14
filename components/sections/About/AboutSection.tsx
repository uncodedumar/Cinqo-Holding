"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";
import { aboutParagraphs } from "./about.data";

export default function AboutSection() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative min-h-[550px] flex items-center"
          >
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/images/about/structure.png"
                alt=""
                fill
                className="object-cover opacity-20"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative z-10 p-8 md:p-10">
              <span className="text-[72px] md:text-[96px] font-bold text-[#d71920] leading-none block">
                20+
              </span>
              <span className="font-[var(--font-body)] font-normal text-[26px] leading-[27.8px] tracking-normal align-middle text-[#6f6f6f] mt-3 block">
                Years Of Experience
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="space-y-5"
          >
            {aboutParagraphs.map((text, i) => (
              <p key={i} className="font-[var(--font-body)] font-normal text-[26px] leading-[27.8px] tracking-normal align-middle text-[#6f6f6f]">
                {text}
              </p>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

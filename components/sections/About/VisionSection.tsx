"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="bg-white pb-24 md:pb-28">
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[16/9] w-full rounded-[12px] overflow-hidden shadow-xl"
        >
          <Image
            src="/images/about/maserati.jpg"
            alt="Featured Project"
            fill
            className="object-cover"
            sizes="(max-width: 1000px) 100vw, 1000px"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="font-[var(--font-body)] font-normal text-[40px] leading-[45.8px] tracking-normal align-middle text-[#6f6f6f] text-center max-w-[850px] mx-auto mt-12 md:mt-16"
        >
          <strong className="text-[#1d1d1d] font-semibold">
            While firmly rooted in Bahrain, Cinqo
          </strong>{" "}
          continues to expand its presence across the GCC
          through sustainable growth, strategic partnerships and opportunities aligned with its strengths and long-term vision.
        </motion.p>
      </div>
    </section>
  );
}

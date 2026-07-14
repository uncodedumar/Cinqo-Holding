"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { directors } from "./about.data";

export default function DirectorsGrid() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTitle className="mb-12">Directors</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, i) => (
            <motion.div
              key={`${director.name}-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-[12px] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-[var(--font-body)] font-bold text-[18px] tracking-normal text-[#1d1d1d]">
                  {director.name}
                </h3>
                <p className="font-[var(--font-body)] font-normal text-[14px] leading-[20px] tracking-normal text-[#6f6f6f] mt-1">
                  {director.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

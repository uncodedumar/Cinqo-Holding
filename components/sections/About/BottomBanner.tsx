"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./Container";

export default function BottomBanner() {
  return (
    <section className="relative h-[420px] flex items-end overflow-hidden bg-black">
      <Image
        src="/images/worker.jpg"
        alt="Building Excellence"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55 z-10" />
      <Container className="relative z-20 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] mb-6">
            <Image
              src="/images/logo.png"
              alt="Cinqo Logo"
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
          <h2 className="text-white text-[36px] md:text-[48px] font-bold leading-tight max-w-[700px]">
            Building Excellence Across Bahrain
          </h2>
          <p className="text-white/80 text-[16px] md:text-[18px] max-w-[600px] mt-4 leading-relaxed">
            Delivering quality, safety, and performance across every project — shaping the landscape of Bahrain and the GCC.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

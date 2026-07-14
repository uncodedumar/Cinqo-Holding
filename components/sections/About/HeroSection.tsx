"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden bg-black">
      <Image
        src="/images/about/about-head.png"
        alt="About Cinqo"
        fill
        className="object-contain"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/35 z-10" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-[1280px] mx-auto px-6 md:px-12"
      >
        <h1 className="text-white text-[56px] md:text-[56px] font-bold leading-tight">
          ABOUT CINQO
        </h1>
      </motion.div>
    </section>
  );
}

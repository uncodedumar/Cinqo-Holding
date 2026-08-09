"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BusinessData } from "@/data/businesses.data";

export default function DefineUs({
  definesUs,
  title = "What Defines Us",
}: {
  definesUs: BusinessData["definesUs"];
  /** Investments reuses this grid to present its investment areas. */
  title?: string;
}) {
  if (!definesUs || definesUs.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full pt-12 pb-6 md:py-28 bg-cream-50"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-12 md:mb-16 text-center [font-family:var(--font-display)] font-semibold text-[20px] md:text-[24px] tracking-[0.05em] text-ink uppercase">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          {definesUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -10, // Increased lift for premium feel
                borderColor: "var(--color-coral-500)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)", // Softer, wider premium shadow
              }}
              className="group relative overflow-hidden bg-white border border-line rounded-sm px-5 pb-6 flex flex-col h-full min-h-[380px] lg:min-h-[420px] cursor-default"
            >
              {/* Premium Background Image Layer */}
              {item.bgimage && (
                <>
                  <Image
                    src={item.bgimage}
                    alt={item.title}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover z-0 transform-gpu [backface-visibility:hidden] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                </>
              )}

              <div className="relative z-10 flex flex-col gap-0.5 mt-auto">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.1 }}
                  className="[font-family:var(--font-body)] flex items-center font-semibold text-[14px] md:text-[15px] xl:text-[16px] leading-snug text-white tracking-wide uppercase transition-colors duration-300 group-hover:text-white min-h-[3.5rem] md:min-h-[4.5rem]"
                >
                  {item.title}
                </motion.h3>
                <p className="[font-family:var(--font-body)] font-normal text-[13px] md:text-[14px] leading-relaxed text-white drop-shadow-sm transition-colors duration-300 group-hover:text-white/90 min-h-[5rem] md:min-h-[6rem]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Leadership() {
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle parallax effect on the entire section contents
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Animation variants for the line-by-line slow rise up
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section
      id="chairmans-message"
      ref={sectionRef}
      className="bg-white py-12 md:py-24 overflow-hidden scroll-mt-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          style={{ y }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[46%_1fr] lg:gap-14 items-stretch"
        >
          {/* Left Side: Image container that stretches to exactly match the text height on desktop */}
          <div className="relative w-full h-[450px] lg:h-auto lg:min-h-full rounded-sm overflow-hidden">
            <Image
              src="/images/about/chairman.jpeg"
              alt="Chairman of Cinqo Holding"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Right Side: Text content pushing top and bottom perfectly */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col justify-between py-1"
          >
            <div>
              <motion.p
                variants={itemVariants}
                className="mb-4 text-[17px] font-semibold tracking-wide text-[#222222] [font-family:var(--font-body)]"
              >
                Leadership
              </motion.p>

              <motion.h2
                variants={itemVariants}
                className="mb-8 text-2xl font-medium leading-[1.2] tracking-wider text-[#111111] md:text-3xl xl:text-[32px] [font-family:var(--font-display)] uppercase"
              >
                CHAIRMAN&rsquo;S MESSAGE
              </motion.h2>

              <div className="max-w-[720px] space-y-6 text-left text-[16px] md:text-[17px] leading-[1.8] text-[#6A6A6A] [font-family:var(--font-body)]">
                <motion.p variants={itemVariants}>
                  At Cinqo, we do not see ourselves as a collection of{" "}
                  <strong className="font-semibold text-[#333333]">
                    separate businesses.
                  </strong>{" "}
                  We operate as one organisation built on a simple principle:
                  take responsibility for what we commit, plan properly and
                  execute with discipline. When these foundations hold, results
                  follow.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Cinqo Holding was established to reinforce this structure. It
                  ensures clarity in scope, communication and accountability
                  across the organisation. Whether we are constructing a tower,
                  maintaining an industrial facility, supplying technical
                  products or assessing a new investment, the expectations remain
                  the same: deliver work that is technically sound and
                  commercially responsible.
                </motion.p>
                <motion.p variants={itemVariants}>
                  We are a Bahrain-born group with regional ambition, but our
                  growth is measured and purposeful. We prioritise stability,
                  long-term relationships and outcomes that retain their value.
                  This is why we invest in engineering capability, ERP-enabled
                  transparency, safety systems and practical governance. These
                  elements safeguard our clients, our teams and the Group&rsquo;s
                  investments.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Across all divisions, our culture is consistent: accountability,
                  disciplined operations and long-term customer commitment. We
                  value clarity over complication and substance over appearance.
                  On behalf of the Board, I thank our clients, partners and teams
                  for their continued trust. Our responsibility is to uphold that
                  trust through consistent and reliable execution.
                </motion.p>
              </div>
            </div>

            <motion.p
              variants={itemVariants}
              className="mt-10 lg:mt-0 text-[20px] font-semibold text-[#111111] [font-family:var(--font-body)]"
            >
              Mohammad Usman
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./Container";
import { chairmanParas } from "./about.data";

export default function ChairmanMessage() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-full min-h-[400px] max-h-[90vh] rounded-[12px] overflow-hidden"
          >
            <Image
              src="/images/about/chairman.png"
              alt="Chairman"
              fill
              className="object-cover -scale-x-100"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[14px] font-semibold text-[#d71920] uppercase tracking-[0.15em] block mb-4">
              Leadership
            </span>
            <h2 className="text-[40px] font-bold text-[#1d1d1d] leading-tight mb-8">
              CHAIRMAN&rsquo;S MESSAGE
            </h2>
            <div className="space-y-4">
              {chairmanParas.map((para, i) => (
                <p key={i} className="font-[var(--font-body)] font-normal text-base leading-relaxed tracking-normal text-[#6f6f6f]">
                  {i === 0 ? (
                    <>
                      <strong className="font-semibold text-[#1d1d1d]">
                        At Cinqo, we do not see ourselves as a collection of separate businesses.
                      </strong>{" "}
                      {para.slice("At Cinqo, we do not see ourselves as a collection of separate businesses.".length)}
                    </>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-[#e5e5e5]">
              <p className="font-[var(--font-body)] font-bold text-[15px] tracking-normal text-[#1d1d1d]">
                Mohammad Usman
              </p>
              <p className="font-[var(--font-body)] font-normal text-[13px] tracking-normal text-[#6f6f6f]">
                Chairman
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

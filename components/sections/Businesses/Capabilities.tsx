"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { BusinessData } from "@/data/businesses.data";

export default function Capabilities({ capabilities }: { capabilities: BusinessData["capabilities"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!capabilities || capabilities.length === 0) return null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 md:py-28 bg-white">
      {/* Header constrained to max-width */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="mb-12 md:mb-16 text-center [font-family:var(--font-display)] font-semibold text-[18px] md:text-[20px] tracking-[0.05em] text-ink uppercase">
          Capabilities
        </h2>
      </div>
      
      {/* Accordion container spanning full width */}
      <div className="flex flex-col border-t border-gray-200 w-full">
        {capabilities.map((item, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              className="w-full border-b border-gray-200 overflow-hidden hover:bg-[#71797E] group transition-colors duration-300"
            >
              {/* Inner content constrained to match the header alignment */}
              <div className="max-w-[1200px] mx-auto px-6 md:px-12">
                <div 
                  onClick={() => toggleAccordion(index)}
                  className="py-4 md:py-5 flex items-center justify-between cursor-pointer"
                >
                  <h3 className="m-0 [font-family:var(--font-body)] font-bold text-[14px] md:text-[15px] xl:text-[16px] text-ink group-hover:text-white transition-colors duration-300 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <div className="relative w-6 h-6 flex items-center justify-center text-ink/70 group-hover:text-white transition-colors duration-300">
                    <motion.span 
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute text-xl font-light leading-none flex items-center justify-center h-full w-full"
                    >
                      +
                    </motion.span>
                  </div>
                </div>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="pb-10 pt-2">
                        <motion.p 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                          className="[font-family:var(--font-body)] text-[16px] md:text-[18px] text-ink/80 group-hover:text-white transition-colors duration-300 leading-relaxed font-normal"
                        >
                          {item.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
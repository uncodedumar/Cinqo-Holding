"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/projects.data";

export default function ProjectHighlights() {
  // Filter projects to only show those flagged for the home page carousel
  const [projects, setProjects] = useState(
    PROJECTS.filter((p) => p.highlighted)
  );

  const handleNext = useCallback(() => {
    setProjects((prev) => {
      const copy = [...prev];
      const first = copy.shift();
      if (first) copy.push(first);
      return copy;
    });
  }, []);

  const handlePrev = useCallback(() => {
    setProjects((prev) => {
      const copy = [...prev];
      const last = copy.pop();
      if (last) copy.unshift(last);
      return copy;
    });
  }, []);

  const activeProject = projects[0];
  const thumbnails = projects.slice(1);

  if (!activeProject) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 bg-white font-sans select-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Large Featured Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={activeProject.image}
                alt={activeProject.name}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Content and Thumbnails */}
        <div className="flex flex-col justify-between h-full py-4 min-h-[450px]">
          <div>
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-4xl font-bold text-black tracking-tight">
                Project Highlights
              </h2>
              <Link href="/projects" className="group text-right flex-shrink-0">
                <span className="block text-small text-muted tracking-widest font-semibold group-hover:text-ink transition-colors">
                  View all
                </span>
                <svg
                  className="w-10 h-3 mt-1 ml-auto text-muted group-hover:text-ink transition-colors"
                  viewBox="0 0 40 12"
                  fill="none"
                >
                  <path
                    d="M0 6h33M33 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </Link>
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              {activeProject.description}
            </p>
          </div>

          <div className="mt-12 lg:mt-auto">
            <h3 className="text-2xl font-semibold text-black mb-4 transition-colors duration-300">
              {activeProject.name}
            </h3>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <motion.div layout className="flex items-center gap-3">
                {thumbnails.map((project) => (
                  <motion.div
                    key={project.id}
                    layoutId={`thumb-${project.id}`}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 24,
                    }}
                    className="relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer shadow-sm bg-gray-200 flex-shrink-0"
                    onClick={() => {
                      const index = projects.findIndex((p) => p.id === project.id);
                      setProjects((prev) => {
                        const copy = [...prev];
                        const itemsToMove = copy.splice(0, index);
                        return [...copy, ...itemsToMove];
                      });
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 active:scale-95 transition-all"
                  aria-label="Previous project"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="h-10 px-5 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 active:scale-95 transition-all"
                  aria-label="Next project"
                >
                  
  <Image 
    src="/arrow.svg" /* Replace with your actual image path */
    alt="Right arrow" 
    width={20} 
    height={20} 
    className="w-5 h-5" /* Optional: keeps the exact same styling footprint */
  />

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/data/projects.data";

export default function OngoingProjects() {
  // Filter data to only show "ongoing" projects
  const ongoingProjects = PROJECTS.filter((project) => project.status === "ongoing");
  
  // Track which accordion row is open
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="ongoing-projects"
      className="w-full max-w-7xl mx-auto px-6 py-16 bg-white font-sans scroll-mt-28"
    >
      <h2 className="text-2xl font-bold mb-6 text-black">Ongoing Projects</h2>
      
      <div className="border-t border-gray-200">
        {ongoingProjects.map((project) => {
          const isOpen = openId === project.id;

          return (
            <div key={project.id} className="border-b border-gray-200 overflow-hidden">
              
              {/* ACCORDION HEADER (Clickable Row) */}
              <div
                onClick={() => toggleRow(project.id)}
                className={`group grid grid-cols-12 gap-4 items-center py-5 px-4 cursor-pointer transition-colors duration-300 ${
                  isOpen 
                    ? "bg-white text-black" 
                    : "bg-white text-black hover:bg-[#71797E] hover:text-white"
                }`}
              >
                {/* Heading */}
                <div className="col-span-12 md:col-span-4 font-bold text-lg md:text-xl truncate">
                  {project.name}
                </div>

                {/* Subheading (Hidden on open state to match image, or adjusts nicely) */}
                <div className={`col-span-12 md:col-span-5 text-sm md:text-base truncate transition-opacity duration-300 ${
                  isOpen ? "opacity-0 hidden md:block" : "opacity-100"
                }`}>
                  <span className={`${isOpen ? "text-transparent" : "text-gray-500 group-hover:text-gray-200"}`}>
                    {project.subheading}
                  </span>
                </div>

                {/* Date */}
                <div className="col-span-10 md:col-span-2 text-right text-sm md:text-base font-medium">
                  {project.date}
                </div>

                {/* Rotating Plus / Close Icon */}
                <div className="col-span-2 md:col-span-1 flex justify-end items-center">
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-2xl font-light leading-none"
                  >
                    +
                  </motion.div>
                </div>
              </div>

              {/* ACCORDION CONTENT (Expanded state) */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
                      
                      {/* Left Side: Large Project Image */}
                      <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Right Side: Text, Logo, and Gallery */}
                      <div className="flex flex-col h-full py-4">
                        
                        {/* Logo */}
                        {project.logo && (
                          <div className="relative w-32 h-16 mb-6">
                            <Image
                              src={project.logo}
                              alt={`${project.name} Logo`}
                              fill
                              className="object-contain object-left"
                            />
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Bullet Points */}
                        {project.bullets && (
                          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                            {project.bullets.map((bullet, idx) => (
                              <li key={idx}>{bullet}</li>
                            ))}
                          </ul>
                        )}

                        {/* Bottom Thumbnail Gallery & Controls */}
                        <div className="mt-auto flex justify-between items-end gap-4 flex-wrap">
                          {/* Thumbnails */}
                          {project.thumbnails && (
                            <div className="flex gap-3">
                              {project.thumbnails.map((thumb, idx) => (
                                <div key={idx} className="relative w-20 h-20 rounded-xl overflow-hidden shadow-sm">
                                  <Image
                                    src={thumb}
                                    alt={`Thumbnail ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Arrows (Static for styling purposes as requested) */}
                          <div className="flex items-center gap-3">
                            <button className="w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button className="h-10 px-6 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors">
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
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          );
        })}
      </div>
    </section>
  );
}
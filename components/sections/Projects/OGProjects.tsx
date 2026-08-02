"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/data/projects.data";

function groupByCompany(projects: typeof PROJECTS): [string, typeof PROJECTS][] {
  const order: string[] = [];
  const groups: Record<string, typeof PROJECTS> = {};
  for (const project of projects) {
    const company = project.company || "Cinqo Trading";
    if (!groups[company]) {
      groups[company] = [];
      order.push(company);
    }
    groups[company].push(project);
  }
  return order.map((name) => [name, groups[name]]);
}

export default function OngoingProjects() {
  // Filter data to only show "ongoing" projects
  const ongoingProjects = PROJECTS.filter((project) => project.status === "ongoing");
  const grouped = groupByCompany(ongoingProjects);
  
  // Track which company group is open
  const [openCompany, setOpenCompany] = useState<string | null>(null);

  // Track which accordion row is open
  const [openId, setOpenId] = useState<string | null>(null);

  // Track active image index per project for circular gallery
  const [activeIndex, setActiveIndex] = useState<Record<string, number>>({});

  const toggleRow = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const toggleCompany = (company: string) => {
    setOpenCompany((prev) => (prev === company ? null : company));
  };

  return (
    <section
      id="ongoing-projects"
      className="w-full max-w-7xl mx-auto px-6 py-16 bg-white font-sans scroll-mt-28"
    >
      <h2 className="text-2xl font-bold mb-6 text-black">Ongoing Projects</h2>
      
      <div className="border-t border-gray-200">
        {grouped.map(([company, projects]) => {
          const companyOpen = openCompany === company;
          return (
        <div key={company}>
        <div
          onClick={() => toggleCompany(company)}
          className={`font-ibm-plex text-xl md:text-2xl font-bold uppercase tracking-[0.06em] py-5 px-4 border-b border-gray-200 flex items-center justify-between gap-3 cursor-pointer transition-colors duration-300 ${
            companyOpen ? "text-navy-900 bg-gray-50" : "text-navy-900 hover:bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-coral-600" aria-hidden="true" />
            {company}
          </div>
          <motion.span
            animate={{ rotate: companyOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-3xl md:text-4xl font-light leading-none"
          >
            +
          </motion.span>
        </div>
        <AnimatePresence>
        {companyOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
        {projects.map((project) => {
          const isOpen = openId === project.id;
          const allImages = [project.image, ...(project.thumbnails || [])];
          const currIdx = activeIndex[project.id] || 0;
          const total = allImages.length;

          const handlePrev = () => {
            setActiveIndex((prev) => ({
              ...prev,
              [project.id]: ((prev[project.id] || 0) - 1 + total) % total,
            }));
          };

          const handleNext = () => {
            setActiveIndex((prev) => ({
              ...prev,
              [project.id]: ((prev[project.id] || 0) + 1) % total,
            }));
          };

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
                <div className={`col-span-12 md:col-span-3 text-sm md:text-base truncate transition-opacity duration-300 ${
                  isOpen ? "opacity-0 hidden md:block" : "opacity-100"
                }`}>
                  <span className={`${isOpen ? "text-transparent" : "text-gray-500 group-hover:text-gray-200"}`}>
                    {project.subheading}
                  </span>
                </div>

                {/* Date */}
                <div className="col-span-10 md:col-span-3 text-right text-sm md:text-base font-medium">
                  {project.date}
                </div>

                {/* Rotating Plus / Close Icon */}
                <div className="col-span-2 md:col-span-2 flex justify-end items-center">
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
                    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10">
                      
                      {/* Left Side: Large Project Image */}
                      <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={allImages[currIdx]}
                            alt={project.name}
                            fill
                            className="object-cover"
                          />
                      </div>

                      {/* Right Side: Text, Logo, and Gallery */}
                      <div className="flex flex-col h-full py-4">
                        
                        {/* Logo */}
                        {project.logo && (
                          <div className="relative w-32 h-16 mb-3 lg:mb-6">
                            <Image
                              src={project.logo}
                              alt={`${project.name} Logo`}
                              fill
                              className="object-contain object-left"
                            />
                          </div>
                        )}

                        {/* Description */}
                        <div className="text-gray-700 leading-relaxed mb-4 lg:mb-6 space-y-2 lg:space-y-4">
                          {project.description.split('\n\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>

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
                          {allImages.length > 1 && (
                            <div className="flex gap-3">
                              {allImages.map((thumb, idx) =>
                                idx !== currIdx ? (
                                  <div key={idx} className="relative w-20 h-20 rounded-xl overflow-hidden shadow-sm">
                                    <Image
                                      src={thumb}
                                      alt={`Thumbnail ${idx + 1}`}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                ) : null
                              )}
                            </div>
                          )}

                          {/* Arrows */}
                          <div className="flex items-center gap-3">
                            <button
                              onClick={handlePrev}
                              className="w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              onClick={handleNext}
                              className="h-10 px-6 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
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
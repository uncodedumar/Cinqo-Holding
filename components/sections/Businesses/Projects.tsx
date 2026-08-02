"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BusinessData } from "@/data/businesses.data";

const EASE = [0.16, 1, 0.3, 1] as const;

/** How long each project holds before the showcase advances to the next one. */
const AUTOPLAY_MS = 5000;

/** Parent of the hover overlay — drives the stagger of every revealed element. */
const overlay: Variants = {
  rest: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  hover: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/** Masked line: the wrapper clips, this slides up from underneath it. */
const line: Variants = {
  rest: { y: "110%" },
  hover: { y: "0%", transition: { duration: 0.7, ease: EASE } },
};

export default function ShowcaseSection({ data }: { data: BusinessData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const projects = data.showcaseProjects ?? [];
  const activeProject = projects[activeIndex];

  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const fade: Variants = {
    rest: { opacity: 0, y: 15 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On mobile, keep hover state active so showcase details and marquee are continuously active.
  useEffect(() => {
    if (!isMobile) return;
    setIsHovered(true);
  }, [isMobile, activeIndex]);

  /*
    Auto-advance every AUTOPLAY_MS. 
    On desktop, rotation pauses while hovered so the reveal isn't pulled out from under the reader.
    On mobile, it continues to auto-advance since hover is forced on.
  */
  useEffect(() => {
    if ((isHovered && !isMobile) || projects.length < 2) return;

    const timer = window.setTimeout(
      () => setActiveIndex((i) => (i + 1) % projects.length),
      isMobile ? 12000 : AUTOPLAY_MS
    );

    return () => window.clearTimeout(timer);
  }, [activeIndex, isHovered, isMobile, projects.length]);

  if (!activeProject) return null;

  // Thumbnails are duplicated 4 times so the marquee row never runs out of items on any screen width.
  const loopedThumbnails = [
    ...activeProject.hoverThumbnails,
    ...activeProject.hoverThumbnails,
    ...activeProject.hoverThumbnails,
    ...activeProject.hoverThumbnails,
  ];

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row w-full bg-white overflow-hidden font-sans pb-6 lg:pb-0"
    >
      {/*
        LEFT COLUMN (STATIC)
        Sticky for the duration of the section only; nothing scrolls inside it,
        so it stays put until the section itself scrolls out of view.
      */}
      <div className="w-full lg:w-[28%] xl:w-1/4 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between pt-4 pb-2 px-6 md:p-10 lg:p-14 shrink-0 bg-white z-10">
        {/* Top text — identical for every project */}
        <p className="text-ink/80 text-h2 leading-snug max-w-[26ch] font-bold text-center w-full mx-auto">
          {data.showcaseText}
        </p>

        {/* Project switcher + CTA */}
        <div className="flex flex-col gap-6 mt-6 lg:mt-0">
          <ul className="flex flex-col gap-3 text-[15px] font-semibold uppercase tracking-wide">
            {projects.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <li key={`${project.title}-${idx}`}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-current={isActive}
                    className={`group/item relative text-left transition-colors duration-300 ${
                      isActive ? "text-black" : "text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    {project.title}
                    {/* Underline grows in on the active item */}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-black transition-all duration-500 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover/item:w-full group-hover/item:bg-gray-400"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <Link href="/projects" className="px-6 py-3 border border-gray-400 text-sm font-semibold tracking-wider hover:bg-black hover:text-white hover:border-black transition-all self-start text-center">
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>

      {/*
        RIGHT COLUMN
        Shows exactly one project at a time — whichever is active — with a
        crossfade between projects and a hover reveal layered on top.
      */}
      <div
        className="relative w-full lg:flex-1 h-[70vh] min-h-[460px] lg:h-screen overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Main image — scales up slightly while hovered */}
            <motion.img
              src={activeProject.mainImage}
              alt={activeProject.title}
              animate={{ scale: isHovered ? 1.06 : 1 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* HOVER OVERLAY — lives outside AnimatePresence so it never re-mounts */}
        <motion.div
          variants={overlay}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
          className="absolute inset-0 flex flex-col justify-between pointer-events-none z-10"
        >
          {/* Softening veil so the copy stays legible over any photograph */}
          <motion.div
            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
            transition={{ duration: 0.5, ease: EASE }}
            className="absolute inset-0 bg-white/70"
          />

          {/* Top-left title */}
          <div className="relative overflow-hidden p-5 sm:p-8 lg:p-14 pb-0">
            <motion.h2
              variants={line}
              className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-black uppercase line-clamp-1"
            >
              {activeProject.title}
            </motion.h2>
          </div>

          {/* Centre band — continuously looping thumbnail marquee spanning 100% full width to the extreme right edge */}
          <motion.div
            variants={fade}
            className="relative w-full overflow-hidden shrink-0 py-2"
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: isMobile ? 20 : 28,
                  ease: "linear",
                },
              }}
              className="flex items-center w-max"
            >
              {loopedThumbnails.map((thumb, tIdx) => (
                <div
                  key={`${activeProject.title}-${tIdx}`}
                  className="w-36 sm:w-48 md:w-64 lg:w-72 aspect-[4/3] relative shrink-0 pr-3 sm:pr-4"
                >
                  <Image
                    src={thumb}
                    alt={`${activeProject.title} thumbnail ${
                      (tIdx % activeProject.hoverThumbnails.length) + 1
                    }`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-sm shadow-md"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom description */}
          <div className="relative overflow-hidden p-5 sm:p-8 lg:p-14 pt-0 pb-10 sm:pb-14 lg:pb-20">
            <motion.p
              variants={line}
              className="text-black font-semibold text-sm sm:text-base md:text-lg max-w-3xl leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none"
            >
              {activeProject.hoverDescription}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
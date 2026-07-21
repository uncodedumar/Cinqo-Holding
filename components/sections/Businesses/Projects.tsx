"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
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

const fade: Variants = {
  rest: { opacity: 0, x: "150%" },
  hover: { opacity: 1, x: "0%", transition: { duration: 0.6, ease: EASE } },
};

export default function ShowcaseSection({ data }: { data: BusinessData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const projects = data.showcaseProjects ?? [];
  const activeProject = projects[activeIndex];

  /*
    Auto-advance every AUTOPLAY_MS. Keying the timer on activeIndex means a
    manual click restarts the countdown rather than cutting it short, and the
    rotation pauses while hovered so the reveal isn't pulled out from under
    the reader.
  */
  useEffect(() => {
    if (isHovered || projects.length < 2) return;

    const timer = window.setTimeout(
      () => setActiveIndex((i) => (i + 1) % projects.length),
      AUTOPLAY_MS
    );

    return () => window.clearTimeout(timer);
  }, [activeIndex, isHovered, projects.length]);

  if (!activeProject) return null;

  // Thumbnails are duplicated back-to-back so the marquee can loop seamlessly.
  const loopedThumbnails = [
    ...activeProject.hoverThumbnails,
    ...activeProject.hoverThumbnails,
  ];

  return (
    <section className="relative flex flex-col lg:flex-row w-full bg-white overflow-hidden font-sans">
      {/*
        LEFT COLUMN (STATIC)
        Sticky for the duration of the section only; nothing scrolls inside it,
        so it stays put until the section itself scrolls out of view.
      */}
      <div className="w-full lg:w-[28%] xl:w-1/4 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between p-8 md:p-10 lg:p-14 shrink-0 bg-white z-10">
        {/* Top text — identical for every project */}
        <p className="text-ink/80 text-h2 leading-snug pr-4 max-w-[26ch]">
          {data.showcaseText}
        </p>

        {/* Project switcher + CTA */}
        <div className="flex flex-col gap-8 mt-10 lg:mt-0">
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

          <button className="px-6 py-3 border border-gray-400 text-sm font-semibold tracking-wider hover:bg-black hover:text-white hover:border-black transition-all self-start">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>

      {/*
        RIGHT COLUMN
        Shows exactly one project at a time — whichever is active — with a
        crossfade between projects and a hover reveal layered on top.
      */}
      {/* `lg:flex-1` only — in the mobile column layout a plain `flex-1` zeroes
          out the height via flex-basis and collapses the image. */}
      <div
        className="relative w-full lg:flex-1 h-[65vh] lg:h-screen overflow-hidden"
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
          className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 lg:p-14 pointer-events-none"
        >
          {/* Softening veil so the copy stays legible over any photograph */}
          <motion.div
            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
            transition={{ duration: 0.5, ease: EASE }}
            className="absolute inset-0 bg-white/70"
          />

          {/* Top-left title */}
          <div className="relative overflow-hidden">
            <motion.h2
              variants={line}
              className="text-xl md:text-2xl font-medium tracking-wide text-black uppercase"
            >
              {activeProject.title}
            </motion.h2>
          </div>

          {/* Centre band — continuously looping thumbnail marquee */}
          <motion.div
            variants={fade}
            className="relative overflow-hidden -mx-8 md:-mx-10 lg:-mx-14 pl-8 md:pl-10 lg:pl-14 w-[calc(100%+4rem)] md:w-[calc(100%+5rem)] lg:w-[calc(100%+7rem)]"
          >
            {/* Spacing comes from per-item padding, not `gap`, so the -50%
                loop point lands exactly on the duplicate. */}
            <div className="flex items-center w-max animate-projects-marquee">
              {loopedThumbnails.map((thumb, tIdx) => (
                <div
                  key={`${activeProject.title}-${tIdx}`}
                  className="w-32 md:w-44 aspect-[4/3] relative shrink-0 pr-3"
                >
                  <Image
                    src={thumb}
                    alt={`${activeProject.title} thumbnail ${
                      (tIdx % activeProject.hoverThumbnails.length) + 1
                    }`}
                    width={400}
                    height={300}
                    unoptimized
                    className="w-full h-full object-cover rounded-sm shadow-md"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom description */}
          <div className="relative overflow-hidden">
            <motion.p
              variants={line}
              className="text-black font-semibold text-base md:text-lg max-w-3xl leading-relaxed"
            >
              {activeProject.hoverDescription}
            </motion.p>
          </div>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes projects-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-projects-marquee {
          animation: projects-marquee 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-projects-marquee { animation: none; }
        }
      `,
        }}
      />
    </section>
  );
}
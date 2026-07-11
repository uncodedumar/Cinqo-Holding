"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects.data";

export default function ProjectHighlights() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [crossfadeSrc, setCrossfadeSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromise = useRef<Promise<void> | null>(null);
  const prevSrcRef = useRef<string | null>(null);

  const project = projectsData[activeProjectIndex];
  const activeThumb = project.gallery[activeImageIndex];
  const currentSrc = activeThumb?.src ?? project.heroImage;
  const totalProjects = projectsData.length;

  useEffect(() => {
    if (prevSrcRef.current && prevSrcRef.current !== currentSrc) {
      setCrossfadeSrc(prevSrcRef.current);
      const timer = setTimeout(() => setCrossfadeSrc(null), 500);
      prevSrcRef.current = currentSrc;
      return () => clearTimeout(timer);
    }
    prevSrcRef.current = currentSrc;
  }, [currentSrc]);

  const goToProject = (index: number) => {
    const next = (index + totalProjects) % totalProjects;
    setActiveProjectIndex(next);
    setActiveImageIndex(0);
  };

  const handleThumbClick = (index: number) => {
    if (index === activeImageIndex) return;
    setActiveImageIndex(index);
  };

  const handleMouseEnter = () => {
    setHovering(true);
    if (videoRef.current) {
      playPromise.current = videoRef.current.play();
      if (playPromise.current !== undefined) {
        playPromise.current.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setHovering(false);
    if (videoRef.current) {
      if (playPromise.current !== undefined && playPromise.current !== null) {
        playPromise.current.then(() => {
          videoRef.current?.pause();
        }).catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section className="section bg-cream-100" id="projects">
      <div className="container grid gap-12 items-start min-[900px]:grid-cols-[1.1fr_0.9fr]">
        <div
          className="relative aspect-[4/3] rounded-[20px] overflow-hidden bg-cream-100"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {crossfadeSrc && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={crossfadeSrc} alt="" fill className="object-cover" />
            </motion.div>
          )}
          <motion.div
            key={`${activeProjectIndex}-${activeImageIndex}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={currentSrc}
              alt={activeThumb?.alt ?? project.name}
              fill
              className={`object-cover ${hovering && project.heroVideo ? "opacity-0" : ""}`}
            />
          </motion.div>
          {project.heroVideo && (
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${hovering ? "opacity-100" : "opacity-0"}`}
              src={project.heroVideo}
              muted
              loop
              playsInline
            />
          )}
        </div>

        <div className="flex flex-col gap-6">
          <h2>Project Highlights</h2>
          <p className="text-muted">
            A portfolio of projects that demonstrates our commitment to
            excellence, innovation and successful delivery across diverse
            sectors.
          </p>

          <div className="flex flex-col gap-2 mt-6">
            <span className="font-semibold">{project.name}</span>
            <div className="flex gap-2">
              {project.gallery.map((img, i) => (
                <button
                  key={img.src}
                  className={`relative w-[72px] h-[56px] rounded-sm overflow-hidden border-2 transition-all duration-300 hover:opacity-100 ${
                    i === activeImageIndex
                      ? "opacity-100 border-coral-600"
                      : "opacity-60 border-transparent"
                  }`}
                  onClick={() => handleThumbClick(i)}
                  aria-label={img.alt}
                >
                  <Image src={img.src} alt={img.alt} fill />
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => goToProject(activeProjectIndex - 1)}
              className="px-5 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
              aria-label="Previous project"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => goToProject(activeProjectIndex + 1)}
              className="px-5 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
              aria-label="Next project"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

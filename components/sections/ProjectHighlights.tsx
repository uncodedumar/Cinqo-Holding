"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { projectsData } from "@/data/projects.data";

/**
 * Project Highlights — the large hero image swaps to a looping video
 * on hover. Clicking a thumbnail animates it into the hero position
 * while the previous hero image slots back into the thumbnail row
 * (position-replacing animation via GSAP Flip-style tween).
 */
export default function ProjectHighlights() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromise = useRef<Promise<void> | null>(null);

  const project = projectsData[activeProjectIndex];
  const activeThumb = project.gallery[activeImageIndex];

  const handleThumbClick = (index: number) => {
    if (index === activeImageIndex) return;

    // Simple crossfade "replace" animation — swap in a GSAP Flip
    // integration here for a true position-swap between hero <-> thumb.
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0.2, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
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
          className="relative aspect-[4/3] rounded-[20px] overflow-hidden bg-navy-800"
          ref={heroRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={activeThumb?.src ?? project.heroImage}
            alt={activeThumb?.alt ?? project.name}
            fill
            className={`object-cover transition-opacity duration-700 ease-out ${hovering ? "opacity-0" : ""}`}
          />
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
            <span className="font-semibold">Project Name</span>
            <div className="flex gap-2">
              {project.gallery.map((img, i) => (
                <button
                  key={img.src}
                  className={`relative w-[72px] h-[56px] rounded-sm overflow-hidden border-2 transition-all duration-300 ease-out hover:opacity-100 ${
                    i === activeImageIndex ? "opacity-100 border-coral-600" : "opacity-60 border-transparent"
                  }`}
                  onClick={() => handleThumbClick(i)}
                  aria-label={img.alt}
                >
                  <Image src={img.src} alt={img.alt} fill />
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            {projectsData.map((_, i) => (
              <button
                key={i}
                className={`h-2 transition-all duration-300 ease-out ${
                  i === activeProjectIndex ? "w-[22px] rounded-pill bg-coral-600" : "w-2 rounded-full bg-line"
                }`}
                onClick={() => {
                  setActiveProjectIndex(i);
                  setActiveImageIndex(0);
                }}
                aria-label={`Show project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

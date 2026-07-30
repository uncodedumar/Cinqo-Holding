"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ScrollRevealText() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Split text into individual word spans
    const text = element.innerText;
    element.innerHTML = text
      .split(" ")
      .map((word) => `<span class="word">${word} </span>`)
      .join("");

    const words = element.querySelectorAll(".word");

    // GSAP Animation
    gsap.fromTo(
      words,
      { color: "#d1d5db" }, // Tailwind gray-300 (starting light)
      {
        color: "#000000",   // Full black
        stagger: 0.1,       // Reveal speed
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Starts animating when text hits 80% of viewport
          end: "top 20%",   // Finishes when text hits 20%
          scrub: true,      // Links animation to scroll position
        },
      }
    );
  }, []);

  return (
    <div className="max-w-[95%] mx-auto py-20 px-6">
      <p
        ref={textRef}
        className="text-4xl font-light leading-relaxed"
      >
        Our portfolio reflects the breadth of the Group&apos;s capabilities across
        contracting, facilities management, distribution and specialist services.
        Each project is delivered with the professionalism, governance and
        technical expertise that define the Cinqo standard.
      </p>
    </div>
  );
}
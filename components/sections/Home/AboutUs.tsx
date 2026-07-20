"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, SplitText } from "@/lib/gsap";

const MISSION_TEXT =
  "To build and operate each business within the Group to a standard that retains clients, protects capital and delivers consistent results across market conditions — while fostering an environment where our teams are developed, empowered and held to the same standard of excellence.";
const VISION_TEXT =
  "To build a group of enduring businesses recognised for performance, trust and sustainable growth.";

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLHeadingElement>(null);
  const missionTextRef = useRef<HTMLParagraphElement>(null);
  const visionTextRef = useRef<HTMLParagraphElement>(null);

  // Hover animations for the typography text fragments
  const hoverSpanClass =
    "inline relative z-0 transition-all duration-300 hover:z-10 hover:font-bold hover:italic hover:scale-105 cursor-default origin-center";

  useEffect(() => {
    if (!sectionRef.current) return;

    const splits: InstanceType<typeof SplitText>[] = [];

    const ctx = gsap.context(() => {
      // Hero paragraph cross-viewport fade/scale scroll effect
      if (heroTextRef.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })
          .fromTo(
            heroTextRef.current,
            { scale: 0.92, opacity: 0.4 },
            { scale: 1.09, opacity: 1, duration: 1, ease: "none" },
          )
          .to(heroTextRef.current, { scale: 0.98, opacity: 0.4, duration: 1, ease: "none" });
      }

      // Section top eyebrow title entrance
      if (eyebrowRef.current) {
        gsap.from(eyebrowRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eyebrowRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Word-by-word fade and blur reveals for Mission and Vision copies
      [missionTextRef.current, visionTextRef.current].forEach((el, i) => {
        if (!el) return;
        const split = new SplitText(el, { type: "words" });
        splits.push(split);
        gsap.fromTo(
          split.words,
          { opacity: 0, y: 16, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
            stagger: 0.025,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => {
      splits.forEach((split) => split.revert());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full pb-20 pt-8 md:pt-16 px-4 bg-white flex flex-col items-center overflow-hidden"
    >
      <div className="w-full flex flex-col items-center max-w-6xl">
        
        {/* Section Heading */}
        <h2
          ref={eyebrowRef}
          className="text-black font-semibold text-[24px] mb-8 tracking-wide font-[var(--font-ibm-plex)]"
        >
          About Us
        </h2>

        {/* Hero Typography */}
        <div
          ref={heroTextRef}
          className="text-center text-[32px] leading-[1.6] font-light text-[#737373] mb-20 w-full tracking-tight font-['Inter',_sans-serif]"
        >
          <span className={hoverSpanClass}>With a team of over</span>{" "}
          <span className={`${hoverSpanClass} text-black font-normal`}>600 employees</span>{" "}
          <span className={hoverSpanClass}>and a portfolio of specialized</span>{" "}
          <br className="hidden md:block" />
          <span className={hoverSpanClass}>industries,</span>{" "}
          <span className={`${hoverSpanClass} text-black font-normal`}>
            Cinqo is recognized for delivering industry
          </span>

          

          <span className={hoverSpanClass}> leading</span>{" "}
          <br className="hidden md:block" />
          <span className={hoverSpanClass}>solutions, exceptional service and sustained value across</span>{" "}
          <span className={`${hoverSpanClass} text-black font-normal`}>
            public and private sectors
          </span>
        </div>
 {/* Vision Content Block styled exactly like About Us */}
 <div className="text-center text-[32px] leading-[1.6] font-light text-[#737373] w-full tracking-tight font-['Inter',_sans-serif]">
          <h3 className="text-black font-semibold text-[24px] mb-6 tracking-wide font-[var(--font-ibm-plex)] uppercase">
            Vision
          </h3>
          <p ref={visionTextRef} className="max-w-4xl mx-auto">
            {VISION_TEXT.split(" ").map((word, index) => (
              <span key={index} className={hoverSpanClass}>
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
        {/* Mission Content Block styled exactly like About Us */}
        <div className="text-center text-[32px] leading-[1.6] font-light text-[#737373] mb-20 w-full tracking-tight font-['Inter',_sans-serif]">
          <h3 className="text-black font-semibold text-[24px] mb-6 tracking-wide font-[var(--font-ibm-plex)] uppercase">
            Mission
          </h3>
          <p ref={missionTextRef} className="max-w-4xl mx-auto">
            {MISSION_TEXT.split(" ").map((word, index) => (
              <span key={index} className={hoverSpanClass}>
                {word}{" "}
              </span>
            ))}
          </p>
        </div>

       

      </div>
    </section>
  );
}
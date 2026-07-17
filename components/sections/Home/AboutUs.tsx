"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";

const MISSION_TEXT =
  "To build and operate each business within the Group to a standard that retains clients, protects capital and delivers consistent results across market conditions — while fostering an environment where our teams are developed, empowered and held to the same standard of excellence.";
const VISION_TEXT =
  "To build a group of enduring businesses recognised for performance, trust and sustainable growth.";

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLHeadingElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);

  const missionCardRef = useRef<HTMLDivElement>(null);
  const visionCardRef = useRef<HTMLDivElement>(null);
  const missionIconRef = useRef<HTMLSpanElement>(null);
  const visionIconRef = useRef<HTMLSpanElement>(null);
  const missionHeadingRef = useRef<HTMLHeadingElement>(null);
  const visionHeadingRef = useRef<HTMLHeadingElement>(null);
  const missionTextRef = useRef<HTMLParagraphElement>(null);
  const visionTextRef = useRef<HTMLParagraphElement>(null);
  const missionNumeralRef = useRef<HTMLSpanElement>(null);
  const visionNumeralRef = useRef<HTMLSpanElement>(null);

  // Swapped inline-block to inline & added z-index adjustments on hover to prevent overlapping artifacts
  const hoverSpanClass =
    "inline relative z-0 transition-all duration-300 hover:z-10 hover:font-bold hover:italic hover:scale-105 cursor-default origin-center";

  // Scroll-driven entrance choreography + ambient motion for the whole section
  useEffect(() => {
    if (!sectionRef.current) return;

    const splits: InstanceType<typeof SplitText>[] = [];

    const ctx = gsap.context(() => {
      // Hero paragraph: breathing scale/opacity as it crosses the viewport
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

      // Eyebrow heading
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

      // Mission / Vision panel unfolds into view
      if (panelRef.current) {
        gsap.fromTo(
          panelRef.current,
          { opacity: 0, y: 70, rotateX: 8 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panelRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // Ambient glow blobs drift slowly for a living-background feel
        if (glow1Ref.current) {
          gsap.to(glow1Ref.current, {
            x: 24,
            y: 18,
            duration: 7,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        }
        if (glow2Ref.current) {
          gsap.to(glow2Ref.current, {
            x: -20,
            y: -16,
            duration: 9,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 0.5,
          });
        }

        // Parallax on the giant background numerals
        gsap.to([missionNumeralRef.current, visionNumeralRef.current], {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: panelRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Divider line draws downward once the panel is in view
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1,
            ease: "power2.out",
            transformOrigin: "top",
            scrollTrigger: {
              trigger: panelRef.current,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Icons pop in with a springy overshoot
      gsap.fromTo(
        [missionIconRef.current, visionIconRef.current],
        { scale: 0, opacity: 0, rotate: -35 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: panelRef.current,
            start: "top 76%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Headings slide up
      gsap.fromTo(
        [missionHeadingRef.current, visionHeadingRef.current],
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panelRef.current,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Paragraph copy reveals word-by-word with a soft blur-in
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

  // Pointer-driven tilt for a tactile, interactive card feel (desktop only)
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cards = [missionCardRef.current, visionCardRef.current].filter(
      (el): el is HTMLDivElement => Boolean(el),
    );
    if (cards.length === 0) return;

    const cleanups = cards.map((card) => {
      const setRotateX = gsap.quickTo(card, "rotateX", { duration: 0.6, ease: "power3.out" });
      const setRotateY = gsap.quickTo(card, "rotateY", { duration: 0.6, ease: "power3.out" });
      const setLift = gsap.quickTo(card, "y", { duration: 0.6, ease: "power3.out" });

      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        setRotateX(py * -8);
        setRotateY(px * 10);
        setLift(-4);
      };

      const onLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setLift(0);
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      return () => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
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

        {/* Hero Typography with Scroll-Sync Animation */}
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

          {/* Inline Pill Image */}
          <span className="inline-block align-middle mx-3 w-[140px] h-[52px] relative rounded-[40px] overflow-hidden shadow-sm -mt-2 transition-transform duration-300 hover:scale-110">
            <Image
              src="/images/about/image_7a5798.png"
              alt="Cinqo Facility"
              fill
              className="object-cover"
              priority
            />
          </span>

          <span className={hoverSpanClass}>leading</span>{" "}
          <br className="hidden md:block" />
          <span className={hoverSpanClass}>solutions, exceptional service and sustained value across</span>{" "}
          <span className={`${hoverSpanClass} text-black font-normal`}>
            public and private sectors
          </span>
        </div>

        {/* Mission & Vision — dark showcase panel */}
        <div className="w-full" style={{ perspective: "1400px" }}>
          <div
            ref={panelRef}
            className="relative w-full rounded-[28px] md:rounded-[36px] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 overflow-hidden isolate shadow-[0_30px_80px_-30px_rgba(10,26,36,0.55)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Ambient glow blobs */}
            <div
              ref={glow1Ref}
              aria-hidden
              className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-coral-600/25 blur-[90px] pointer-events-none"
            />
            <div
              ref={glow2Ref}
              aria-hidden
              className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-navy-800/70 blur-[100px] pointer-events-none"
            />

            {/* Faint repeating pattern for texture */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'url("/pattern.svg")',
                backgroundSize: "480px",
                backgroundRepeat: "repeat",
              }}
            />

            <div className="relative grid md:grid-cols-2">
              {/* Center divider (desktop only) */}
              <div
                ref={dividerRef}
                aria-hidden
                className="hidden md:block absolute top-12 bottom-12 left-1/2 w-px bg-white/15"
              />

              {/* Mission */}
              <div
                ref={missionCardRef}
                className="relative px-8 py-16 md:px-16 md:py-20 flex flex-col items-center md:items-start text-center md:text-left gap-6 will-change-transform"
              >
                <span
                  ref={missionNumeralRef}
                  aria-hidden
                  className="absolute -top-2 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 text-[110px] md:text-[150px] font-display font-bold text-white/[0.04] leading-none select-none pointer-events-none"
                >
                  01
                </span>

                <span
                  ref={missionIconRef}
                  className="relative z-10 inline-flex items-center justify-center w-16 h-16 md:w-[68px] md:h-[68px] rounded-full bg-coral-600/15 ring-1 ring-coral-500/40 text-coral-500"
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
                  </svg>
                </span>

                <h3
                  ref={missionHeadingRef}
                  className="relative z-10 text-cream-50 font-display uppercase tracking-[0.16em] text-xl md:text-2xl"
                >
                  Mission
                </h3>

                <p
                  ref={missionTextRef}
                  className="relative z-10 text-white/70 text-[17px] md:text-xl leading-[1.7] max-w-md font-[var(--font-ibm-plex)]"
                >
                  {MISSION_TEXT}
                </p>
              </div>

              {/* Vision */}
              <div
                ref={visionCardRef}
                className="relative px-8 py-16 md:px-16 md:py-20 flex flex-col items-center md:items-start text-center md:text-left gap-6 border-t md:border-t-0 border-white/10 will-change-transform"
              >
                <span
                  ref={visionNumeralRef}
                  aria-hidden
                  className="absolute -top-2 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 text-[110px] md:text-[150px] font-display font-bold text-white/[0.04] leading-none select-none pointer-events-none"
                >
                  02
                </span>

                <span
                  ref={visionIconRef}
                  className="relative z-10 inline-flex items-center justify-center w-16 h-16 md:w-[68px] md:h-[68px] rounded-full bg-coral-600/15 ring-1 ring-coral-500/40 text-coral-500"
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>

                <h3
                  ref={visionHeadingRef}
                  className="relative z-10 text-cream-50 font-display uppercase tracking-[0.16em] text-xl md:text-2xl"
                >
                  Vision
                </h3>

                <p
                  ref={visionTextRef}
                  className="relative z-10 text-white/70 text-[17px] md:text-xl leading-[1.7] max-w-md font-[var(--font-ibm-plex)]"
                >
                  {VISION_TEXT}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

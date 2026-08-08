"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const textContent =
  "While firmly rooted in Bahrain, Cinqo continues to expand its presence across the GCC through sustainable growth, strategic partnerships and opportunities aligned with its strengths and long-term vision.";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  // New Refs for animations
  const countRef = useRef<HTMLSpanElement>(null);
  const textRiseRef = useRef<HTMLDivElement>(null);
  const centerTextRef = useRef<HTMLDivElement>(null);
  const scrollTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrap = imageWrapRef.current;
    const overlay = overlayRef.current;
    
    const ctx = gsap.context(() => {
      // 1. Text Rise Up Animation (First Section)
      if (textRiseRef.current) {
        gsap.fromTo(
          textRiseRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRiseRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 2. Count Up Animation (First Section)
      if (countRef.current) {
        gsap.fromTo(
          countRef.current,
          { innerText: 0 },
          {
            innerText: 20,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: countRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 3. Fullscreen Scroll Reveal & Center Text Animation (Second Section)
      if (section && wrap && overlay) {
        const scaleX = window.innerWidth / wrap.offsetWidth;
        const scaleY = window.innerHeight / wrap.offsetHeight;
        const scale = Math.max(scaleX, scaleY) * 1.05;

        // Set initial state for center text
        if (centerTextRef.current) {
          gsap.set(centerTextRef.current, { y: 30, opacity: 0 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "center center",
            end: `+=${window.innerHeight * 2}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Zoom in: scale up, melt corners, lift shadow away, fade overlay in
        tl.to(wrap, {
          scale,
          borderRadius: "0px",
          boxShadow: "0 0 0 0 rgba(0,0,0,0)",
          duration: 0.48,
          ease: "power2.inOut",
        })
        .to(overlay, { opacity: 0.4, duration: 0.48, ease: "power2.inOut" }, "<");

        // Reveal text in the center
        if (centerTextRef.current) {
          tl.to(centerTextRef.current, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }, "-=0.24");
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 4. Fade in / Color Reveal animation for Section 3 (Matching Projects/Text.tsx style)
  useEffect(() => {
    const element = scrollTextRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const text = element.innerText;
      element.innerHTML = text
        .split(/\s+/)
        .map((word) => `<span class="word inline-block">${word}&nbsp;</span>`)
        .join("");

      const words = element.querySelectorAll(".word");

      gsap.fromTo(
        words,
        { color: "#d1d5db", opacity: 0.3 },
        {
          color: "#000000",
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      {/* SECTION 1 */}
      <section
        id="about-us"
        className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden py-12 md:py-24 scroll-mt-28"
      >
        {/* Video Background with Image Fallback via 'poster' */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/about/a2.jpeg"
            className="w-full h-full object-cover opacity-75"
          >
            <source src="/videos/your-background-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text readability while keeping the background image crisp */}
          <div className="absolute inset-0 bg-white/50 sm:bg-white/65" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center">
          
          {/* Left Column: 20+ Years */}
          <div className="md:col-span-5 flex justify-center md:justify-end font-[var(--font-ibm-plex)]">
            <div className="flex flex-col items-center">
              <h2 className="text-[100px] md:text-[160px] leading-[0.8] font-normal text-black tracking-tighter">
                <span ref={countRef}>0</span>+
              </h2>
              <p className="text-[20px] md:text-[22px] font-semibold text-black tracking-wide mt-3">
                Years Of Delivery
              </p>
            </div>
          </div>

          {/* Right Column: Paragraph Text */}
          <div ref={textRiseRef} className="md:col-span-7 flex flex-col gap-4 md:gap-6 text-[16px] sm:text-[17px] md:text-[19px] leading-[1.6] text-black/80">
            <p>
              Since its inception, Cinqo Holding has evolved from a construction-focused business into a diversified group of more than 1200 professionals serving clients across Bahrain&rsquo;s public and private sectors.
            </p>
            <p>
              The Group comprises one holding company and five specialised companies operating under a unified framework of governance, financial oversight and strategic direction, enabling each business to maintain its technical focus while benefiting from shared leadership and systems.
            </p>
            <p>
              Growth is pursued selectively, guided by capability, operational readiness and long-term sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Fullscreen Image Growth */}
      <section ref={sectionRef} className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <div
          ref={imageWrapRef}
          className="relative w-[75%] h-[500px] z-10 rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
        >
          <Image
            src="/images/about/9add3f66-e635-4034-8524-da355a9df816.jpeg"
            alt="Cinqo Holding"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div ref={overlayRef} className="absolute inset-0 bg-black opacity-0 z-10 pointer-events-none" />
        </div>
        
        {/* Center Text Reveal (Overlays the zoomed-in image) */}
        <div ref={centerTextRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 pointer-events-none px-4">
          <Image
            src="/images/logos/NewFooterLogo.png"
            alt="Cinqo Holding logo"
            width={200}
            height={80}
            className="drop-shadow-lg"
            sizes="200px"
          />
          <h2 className="text-5xl md:text-7xl text-white font-black tracking-wider text-center uppercase drop-shadow-lg">
            Cinqo Holding
          </h2>
        </div>
      </section>

      {/* SECTION 3 - Fade-in Scroll Text */}
      <section className="relative flex items-center justify-center bg-white px-6 py-12 md:py-32 z-30 min-h-[40vh] md:min-h-[50vh]">
        <p
          ref={scrollTextRef}
          className="max-w-4xl text-center text-[22px] sm:text-[24px] md:text-[2.5rem] leading-relaxed font-light text-black/80"
        >
          {textContent}
        </p>
      </section>
    </div>
  );
}
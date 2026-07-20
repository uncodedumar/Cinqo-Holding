"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useLenis } from "@/components/providers/SmoothScrollProvider";

const textContent =
  "While firmly rooted in Bahrain, Cinqo continues to expand its presence across the GCC through sustainable growth, strategic partnerships and opportunities aligned with its strengths and long-term vision.";

const words = textContent.split(/\s+/);

export default function About() {
  const lenis = useLenis();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  
  // New Refs for animations
  const countRef = useRef<HTMLSpanElement>(null);
  const textRiseRef = useRef<HTMLDivElement>(null);
  const centerTextRef = useRef<HTMLDivElement>(null);

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
      if (!section || !wrap || !overlay) return;

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
      .to(overlay, { opacity: 0.4, duration: 0.48, ease: "power2.inOut" }, "<")

      // Reveal text in the center
      if (centerTextRef.current) {
        tl.to(centerTextRef.current, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }, "-=0.24");
      }
      // `section` is nullable; gsap's scope param takes an element or nothing.
    }, section ?? undefined);

    return () => ctx.revert();
  }, []);

  // -- EXISTING UNTOUCHED LOGIC FOR 3RD SECTION --
  useEffect(() => {
    if (!lenis) return;

    const section = textSectionRef.current;
    const spans = wordRefs.current.filter(Boolean) as HTMLSpanElement[];
    if (!section || spans.length === 0) return;

    const tl = gsap.timeline({ paused: true })
      .to(spans, { fontWeight: 600, stagger: 1, duration: 1.5, ease: "power2.out" });

    let locked = false;
    let animationProgress = 0;
    let canLock = true;
    let touchStartY = 0;
    const sensitivity = 0.0005;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!locked) return;

      const step = e.deltaY * sensitivity;
      const next = Math.max(0, Math.min(1, animationProgress + step));

      tl.progress(next);

      if ((next >= 1 && e.deltaY > 0) || (next <= 0 && e.deltaY < 0)) {
        release();
        return;
      }

      animationProgress = next;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (!locked) return;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!locked) return;
      e.preventDefault();

      const dy = touchStartY - e.touches[0].clientY;
      const step = dy * sensitivity;
      const next = Math.max(0, Math.min(1, animationProgress + step));

      tl.progress(next);

      if ((next >= 1 && dy > 0) || (next <= 0 && dy < 0)) {
        release();
        return;
      }

      animationProgress = next;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {};

    const KEY_STEP: Record<string, number> = {
      ArrowDown: 0.05, ArrowUp: -0.05,
      PageDown: 0.2, PageUp: -0.2,
      " ": 0.1,
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!locked) return;
      const step = KEY_STEP[e.key];
      if (step === undefined) return;
      e.preventDefault();

      const next = Math.max(0, Math.min(1, animationProgress + step));
      tl.progress(next);

      if ((next >= 1 && step > 0) || (next <= 0 && step < 0)) {
        release();
        return;
      }

      animationProgress = next;
    };

    const lock = (dir: "down" | "up") => {
      if (locked || !canLock) return;
      stopObservers();
      locked = true;
      canLock = false;
      animationProgress = dir === "up" ? 1 : 0;
      tl.progress(animationProgress);
      lenis.stop();
      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onTouchEnd);
      window.addEventListener("keydown", onKeyDown);
    };

    const release = () => {
      if (!locked) return;
      locked = false;
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      lenis.start();

      canLock = false;
      const exitObserver = new IntersectionObserver(
        ([e]) => {
          if (!e.isIntersecting) {
            exitObserver.disconnect();
            canLock = true;
            startObservers();
          }
        },
        { threshold: 0, rootMargin: "-50% 0px -50% 0px" },
      );
      exitObserver.observe(section);
    };

    let centerObserver: IntersectionObserver | null = null;
    let scrollListener: (() => void) | null = null;

    const startObservers = () => {
      stopObservers();
      
      let lastScrollY = window.scrollY;
      scrollListener = () => { lastScrollY = window.scrollY; };
      window.addEventListener("scroll", scrollListener, { passive: true });

      centerObserver = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting && !locked && canLock) {
            stopObservers();
            const isScrollingDown = window.scrollY >= lastScrollY;
            lock(isScrollingDown ? "down" : "up");
          }
        },
        { threshold: 0, rootMargin: "-50% 0px -50% 0px" },
      );
      
      centerObserver.observe(section);
    };

    const stopObservers = () => {
      centerObserver?.disconnect();
      centerObserver = null;
      if (scrollListener) {
        window.removeEventListener("scroll", scrollListener);
        scrollListener = null;
      }
    };

    startObservers();

    return () => {
      if (locked) {
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", onTouchEnd);
        window.removeEventListener("keydown", onKeyDown);
        lenis.start();
      }
      stopObservers();
      tl.kill();
    };
  }, [lenis]);

  return (
    <div className="bg-white">
      {/* SECTION 1 - Refactored to match image_8647e4.jpg EXACTLY */}
      <section
        id="about-us"
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24 scroll-mt-28"
      >
        {/* Video Background with Image Fallback via 'poster' */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/about/a2.jpeg"
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/videos/your-background-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text readability matches the light tone of the image */}
          <div className="absolute inset-0 bg-[#f8f8f8]/85" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          
          {/* Left Column: 20+ Years */}
          <div className="md:col-span-5 flex justify-center md:justify-end font-[var(--font-ibm-plex)]">
            <div className="flex flex-col items-center">
              <h2 className="text-[140px] md:text-[160px] leading-[0.8] font-normal text-black tracking-tighter">
                <span ref={countRef}>0</span>+
              </h2>
              <p className="text-[20px] md:text-[22px] font-semibold text-black tracking-wide mt-3">
                Years Of Delivery
              </p>
            </div>
          </div>

          {/* Right Column: Paragraph Text */}
          <div ref={textRiseRef} className="md:col-span-7 flex flex-col gap-6 text-[17px] md:text-[19px] leading-[1.6] text-black/80">
            <p>
              Since its inception, Cinqo Holding has evolved from a construction-focused business into a diversified group of more than 600 professionals serving clients across Bahrain&rsquo;s public and private sectors.
            </p>
            <p>
              The Group comprises five specialised operating companies operating under a unified framework of governance, financial oversight and strategic direction, enabling each business to maintain its technical focus while benefiting from shared leadership and systems.
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
        
        {/* NEW Center Text Reveal (Overlays the zoomed-in image) */}
        <div ref={centerTextRef} className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <h2 className="text-4xl md:text-6xl text-white font-bold tracking-wider text-center px-4 drop-shadow-lg">
            Cinqo Holding
          </h2>
        </div>
      </section>

      {/* SECTION 3 - Untouched Highlight Scroll Text */}
      <section ref={textSectionRef} className="relative flex items-start justify-center bg-white px-6 py-24 z-30">
        <p className="max-w-3xl text-center text-[2rem] leading-relaxed text-black/80">
          {words.map((word, i) => (
            <span key={i}>
              <span className="relative inline-block">
                <span className="invisible font-semibold">{word}</span>
                <span
                  ref={(el) => { wordRefs.current[i] = el; }}
                  className="absolute left-[50%] top-0 -translate-x-1/2 w-full text-center"
                >
                  {word}
                </span>
              </span>
              {" "}
            </span>
          ))}
        </p>
      </section>
    </div>
  );
}
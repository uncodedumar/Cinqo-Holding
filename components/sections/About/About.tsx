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

  useEffect(() => {
    const section = sectionRef.current;
    const wrap = imageWrapRef.current;
    const overlay = overlayRef.current;
    if (!section || !wrap || !overlay) return;

    const ctx = gsap.context(() => {
      const scaleX = window.innerWidth / wrap.offsetWidth;
      const scaleY = window.innerHeight / wrap.offsetHeight;
      const scale = Math.max(scaleX, scaleY) * 1.05;

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
      .to(overlay, { opacity: 0.15, duration: 0.48, ease: "power2.inOut" }, "<")

      // Brief hold at fullscreen
      .to({}, { duration: 0.04 })

      // Zoom out: scale back, restore corners, restore shadow, fade overlay out
      .to(wrap, {
        scale: 1,
        borderRadius: "16px",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        duration: 0.48,
        ease: "power2.inOut",
      })
      .to(overlay, { opacity: 0, duration: 0.48, ease: "power2.inOut" }, "<");
    }, section);

    return () => ctx.revert();
  }, []);

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

      // Wait for the section to leave the viewport center before re-arming
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
      <section className="relative pt-12 pb-2 min-h-[600px] overflow-hidden">
        <Image
          src="/images/about/a2.jpeg"
          alt="About Cinqo Holding"
          fill
          className="object-cover brightness-100 saturate-[0.5] contrast-[0.85]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/75" />
        <div className="absolute inset-0 z-10 flex items-center pt-10">
          <div className="ml-66 text-center font-[var(--font-ibm-plex)]">
            <h2 className="text-[124px] font-normal mb-[-24px] text-black">20+</h2>
            <p className="text-[30px] tracking-normal text-black font-bold pl-2">Years Of Deilvery</p>
          </div>
        </div>
        <div className="relative z-20 px-6 md:px-12 max-w-[1440px] mx-auto pt-10 flex justify-end">
          <div className="max-w-xl mr-4">
            <p className="text-xl leading-relaxed text-black/80">
              Since its inception, Cinqo Holding has evolved from a construction-focused business into a diversified group of more than 600 professionals serving clients across Bahrain&rsquo;s public and private sectors.
              <br />
              <br />
              The Group comprises five specialised operating companies operating under a unified framework of governance, financial oversight and strategic direction, enabling each business to maintain its technical focus while benefiting from shared leadership and systems.
              <br />
              <br />
              Growth is pursued selectively, guided by capability, operational readiness and long-term sustainability.
            </p>
          </div>
        </div>
      </section>
      <section ref={sectionRef} className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <div
          ref={imageWrapRef}
          className="relative w-[75%] h-[500px] z-50 rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
        >
          <Image
            src="/images/about/a3.jpeg"
            alt="Cinqo Holding"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div ref={overlayRef} className="absolute inset-0 bg-black opacity-0 z-10 pointer-events-none" />
        </div>
      </section>
      <section ref={textSectionRef} className="relative flex items-start justify-center bg-white px-6 pt-12 z-30">
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

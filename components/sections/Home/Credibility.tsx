"use client";

import { useEffect, useRef } from "react";

import { gsap, ScrollTrigger } from "@/lib/gsap";

const STATS = [
  {
    target: 20,

    suffix: "+",

    label: "Years of Delivery",

    caption:
      "Two decades of proven execution and transparent commercial operations across Bahrain.",
  },

  {
    target: 600,

    suffix: "+",

    label: "Employees",

    caption:
      "A tightly disciplined workforce managed under unified executive accountability.",
  },

  {
    target: 200,

    suffix: "+",

    label: "Projects Completed",

    caption:
      "A diverse portfolio of successful residential, commercial, and industrial landmarks.",
  },

  {
    target: 6,

    suffix: "",

    label: "Companies",

    caption:
      "Five specialized companies operating under a single, unified structure.",
  },

  {
    target: 10,

    suffix: "",

    label: "International Brands",

    caption:
      "Exclusive and authorized representation of leading global brands.",
  },
];

/**

 * Credibility strip — full-bleed drone-shot video billboard.

 * Numbers wipe in, count up and grow into place on scroll; the video,

 * a cursor-tracking spotlight, and each stat tile react live to the pointer.

 */

export default function Credibility() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  const spotlightRef = useRef<HTMLDivElement>(null);

  // Entrance choreography: wipe reveal -> count up -> grow into resting size

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".stat-item");

      items.forEach((item, i) => {
        const numberEl = item.querySelector<HTMLElement>(".stat-number");

        const wipeEl = item.querySelector<HTMLElement>(".stat-wipe");

        const wrapEl = item.querySelector<HTMLElement>(".stat-number-wrap");

        const underlineEl = item.querySelector<HTMLElement>(".stat-underline");

        if (!numberEl || !wipeEl || !wrapEl) return;

        const target = Number(item.dataset.target ?? 0);

        const suffix = item.dataset.suffix ?? "";

        const counter = { val: 0, scale: 0.55 };

        numberEl.textContent = `0${suffix}`;

        gsap.set(wrapEl, { overflow: "hidden" });

        gsap.set(numberEl, { opacity: 0, transformOrigin: "left bottom" });

        const tl = gsap.timeline({
          delay: i * 0.09,

          scrollTrigger: { trigger: item, start: "top 85%", once: true },
        });

        tl.fromTo(
          item,

          { y: 50, opacity: 0 },

          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        )

          .fromTo(
            wipeEl,

            { scaleX: 1 },

            {
              scaleX: 0,
              duration: 0.55,
              ease: "power4.inOut",
              transformOrigin: "right",
            },

            0.15,
          )

          .to(numberEl, { opacity: 1, duration: 0.2 }, 0.25)

          .add(() => gsap.set(wrapEl, { overflow: "visible" }), 0.55)

          .to(
            counter,

            {
              val: target,

              scale: 1.1,

              duration: 1.1,

              ease: "power2.out",

              onUpdate: () => {
                numberEl.textContent = `${Math.round(counter.val)}${suffix}`;

                numberEl.style.transform = `scale(${counter.scale})`;
              },
            },

            0.5,
          )

          .to(counter, {
            scale: 1,

            duration: 0.35,

            ease: "power2.inOut",

            onUpdate: () => {
              numberEl.style.transform = `scale(${counter.scale})`;
            },
          });

        if (underlineEl) {
          tl.fromTo(
            underlineEl,

            { scaleX: 0 },

            {
              scaleX: 1,
              duration: 0.5,
              ease: "power3.out",
              transformOrigin: "left",
            },

            "<",
          );
        }
      });

      // Ambient breathing zoom on the drone footage for a living backdrop

      if (
        videoRef.current &&
        window.matchMedia("(prefers-reduced-motion: no-preference)").matches
      ) {
        gsap.to(videoRef.current, {
          scale: 1.42,

          duration: 14,

          ease: "sine.inOut",

          yoyo: true,

          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Pointer-driven life: cursor spotlight, video parallax, and per-tile tilt

  useEffect(() => {
    if (!sectionRef.current) return;

    if (!window.matchMedia("(pointer: fine)").matches) return;

    const section = sectionRef.current;

    const video = videoRef.current;

    const spotlight = spotlightRef.current;

    const items = Array.from(
      section.querySelectorAll<HTMLElement>(".stat-item"),
    );

    if (spotlight) gsap.set(spotlight, { xPercent: -50, yPercent: -50 });

    const setSpotX = spotlight
      ? gsap.quickTo(spotlight, "x", { duration: 0.45, ease: "power3.out" })
      : null;

    const setSpotY = spotlight
      ? gsap.quickTo(spotlight, "y", { duration: 0.45, ease: "power3.out" })
      : null;

    const setVideoX = video
      ? gsap.quickTo(video, "x", { duration: 1.1, ease: "power3.out" })
      : null;

    const setVideoY = video
      ? gsap.quickTo(video, "y", { duration: 1.1, ease: "power3.out" })
      : null;

    const onSectionMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();

      setSpotX?.(e.clientX - rect.left);

      setSpotY?.(e.clientY - rect.top);

      const px = (e.clientX - rect.left) / rect.width - 0.5;

      const py = (e.clientY - rect.top) / rect.height - 0.5;

      setVideoX?.(px * -18);

      setVideoY?.(py * -14);
    };

    const onSectionEnter = () =>
      gsap.to(spotlight, { opacity: 1, duration: 0.4 });

    const onSectionLeave = () => {
      gsap.to(spotlight, { opacity: 0, duration: 0.6 });

      setVideoX?.(0);

      setVideoY?.(0);
    };

    section.addEventListener("mousemove", onSectionMove);

    section.addEventListener("mouseenter", onSectionEnter);

    section.addEventListener("mouseleave", onSectionLeave);

    const itemCleanups = items.map((item) => {
      const numberEl = item.querySelector<HTMLElement>(".stat-number");

      const underlineEl = item.querySelector<HTMLElement>(".stat-underline");

      const setRotateX = gsap.quickTo(item, "rotateX", {
        duration: 0.5,
        ease: "power3.out",
      });

      const setRotateY = gsap.quickTo(item, "rotateY", {
        duration: 0.5,
        ease: "power3.out",
      });

      const setLift = gsap.quickTo(item, "y", {
        duration: 0.5,
        ease: "power3.out",
      });

      const onMove = (e: MouseEvent) => {
        const rect = item.getBoundingClientRect();

        const px = (e.clientX - rect.left) / rect.width - 0.5;

        const py = (e.clientY - rect.top) / rect.height - 0.5;

        setRotateX(py * -10);

        setRotateY(px * 10);

        setLift(-4);
      };

      const onEnter = () => {
        gsap.to(numberEl, {
          color: "#ea5a42",
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(underlineEl, {
          scaleX: 1.4,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        setRotateX(0);

        setRotateY(0);

        setLift(0);

        gsap.to(numberEl, {
          color: "#ffffff",
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(underlineEl, { scaleX: 1, duration: 0.4, ease: "power2.out" });
      };

      item.addEventListener("mousemove", onMove);

      item.addEventListener("mouseenter", onEnter);

      item.addEventListener("mouseleave", onLeave);

      return () => {
        item.removeEventListener("mousemove", onMove);

        item.removeEventListener("mouseenter", onEnter);

        item.removeEventListener("mouseleave", onLeave);
      };
    });

    return () => {
      section.removeEventListener("mousemove", onSectionMove);

      section.removeEventListener("mouseenter", onSectionEnter);

      section.removeEventListener("mouseleave", onSectionLeave);

      itemCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden text-cream-50 flex items-center justify-center py-12 min-[1024px]:py-24 font-body"
      ref={sectionRef}
    >
      {/* Uses global .bg-media class for absolute positioning, object-cover, and z-index */}

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 scale-133 origin-center will-change-transform brightness-50"
        src="/videos/credibility/CredibilityDrone-shot.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Cinematic vignette overlay */}

      <div className="absolute -inset-px  pointer-events-none z-[1]" />

      {/* Cursor-tracking spotlight for a live, reactive feel */}

      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-[2] h-[420px] w-[420px] rounded-full opacity-0 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(234,90,66,0.35), rgba(234,90,66,0) 70%)",

          filter: "blur(10px)",
        }}
      />

      {/* Uses global .container class for max-width and responsive padding */}

      <div className="container relative z-10">
        <div
          className="grid gap-6 grid-cols-2 min-[1024px]:grid-cols-5 border-y-2 border-line-dark py-16"
          style={{ perspective: "1200px" }}
        >
          {STATS.map((stat, index) => (
            <div
              className={`stat-item mt-3 flex flex-col gap-2 will-change-transform ${
                index === 0
                  ? "pl-0"
                  : "pl-6 min-[1024px]:pl-5 border-l-2 border-line-dark"
              }`}
              style={{ transformStyle: "preserve-3d" }}
              data-target={stat.target}
              data-suffix={stat.suffix}
              key={stat.label}
            >
              <span className="text-eyebrow uppercase tracking-[0.08em] text-muted-light flex items-start min-[1024px]:min-h-[2.2rem]">
                {stat.label}
              </span>

              <span className="stat-number-wrap relative inline-block mt-3 leading-none">
                <span className="stat-number font-display font-bold text-h1 leading-none inline-block">
                  {stat.target}

                  {stat.suffix}
                </span>

                <span
                  aria-hidden
                  className="stat-wipe absolute inset-0 bg-coral-600"
                  style={{ transformOrigin: "right" }}
                />
              </span>

              <span className="stat-underline block h-[2px] w-10 bg-coral-600 scale-x-0" />

              <p className="text-[0.75rem] text-muted-light mt-1 leading-normal w-full pr-1">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

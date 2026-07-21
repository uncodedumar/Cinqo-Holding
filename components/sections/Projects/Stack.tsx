"use client";

import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from 'next/image'; // 1. Import Next.js Image



gsap.registerPlugin(ScrollTrigger);



const images = [

  "/images/Projects/project-1/projectStack1.jpg",

  "/images/Projects/project-1/projectStack2.jpg",

  "/images/Projects/project-1/projectStack3.jpg",

  "/images/Projects/project-1/projectStack4.jpg",

];



const StackedSection = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  const textRef = useRef<HTMLDivElement>(null);



  useEffect(() => {

    const cards = gsap.utils.toArray(".card") as HTMLElement[];



    // 1. Initialization: Push all cards EXCEPT the first one below the viewport

    gsap.set(cards.slice(1), { y: "100vh" });



    const tl = gsap.timeline({

      scrollTrigger: {

        trigger: containerRef.current,

        start: "top top",

        // Extended the scroll distance to allow time for the fullscreen & text animations

        end: `+=${cards.length * 800 + 1500}`,

        scrub: 1,

        pin: true,

        anticipatePin: 1,

      },

    });



    // 2. Animate cards sliding up and stacking over one another

    cards.forEach((card, i) => {

      if (i > 0) {

        tl.to(card, {

          y: i * 40,

          duration: 1,

          ease: "power2.out",

        }, "-=0.2");

      }

    });



    // 3. Expand the last card to full screen

    const lastCard = cards[cards.length - 1];

   

    tl.to(lastCard, {

      width: "100vw",

      height: "100vh",

      top: "0vh",     // Move it to the very top of the window

      y: 0,           // Reset the staggered stacking offset

      borderRadius: 0, // Remove rounded corners for a true fullscreen look

      duration: 1.5,

      ease: "power2.inOut",

    }, "+=0.5"); // Small buffer so the user can register the completed stack before it expands



    // 4. Reveal the center-aligned heading and text

    if (textRef.current) {

      tl.to(textRef.current, {

        opacity: 1,

        y: 0,

        duration: 1,

        ease: "power2.out"

      });

    }



    return () => {

      ScrollTrigger.getAll().forEach((t) => t.kill());

    };

  }, []);



  return (

    // Changed bg-black to bg-white. Removed pt-[15vh] to handle positioning on the cards themselves

    <div ref={containerRef} className="h-screen w-full relative flex justify-center bg-white overflow-hidden">

      {images.map((src, i) => (

        <div

          key={i}

          // Increased size to 90vw / 75vh. Set absolute top to 15vh so it can animate to 0 easily.

          // Softened the shadow slightly so it looks better against a white background.

          className="card absolute top-[15vh] w-[90vw] h-[75vh] rounded-sm overflow-hidden shadow-[0_-15px_40px_-10px_rgba(0,0,0,0.15)]"

          style={{ zIndex: i + 1 }}

        >

          {/* `fill` (not w/h) because the card sizes itself in viewport units

              and gsap animates those dimensions during the stack sequence. */}

          <Image src={src} alt="stack" fill sizes="90vw" className="object-cover" />

         

          {/* Conditional text container solely on the last image */}

          {i === images.length - 1 && (

            <div

              ref={textRef}

              // A subtle dark overlay helps ensure the white text is readable regardless of the photo

              className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 translate-y-10"

            >

              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">

                Unbound Potential

              </h2>

              <p className="text-xl md:text-2xl text-white/90 text-center max-w-2xl px-4">

                The stack is complete. Keep scrolling down to discover what comes next.

              </p>

            </div>

          )}

        </div>

      ))}

    </div>

  );

};



export default StackedSection; 


"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function ThePrinciple() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden w-full bg-black">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-130 origin-center"
        src="/videos/principle/Principle_Drone_Shot.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      <motion.div 
        className="relative z-20 flex flex-col items-center text-center w-full px-4 max-w-[1290px] mx-auto mt-0 sm:mt-[-50px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.span 
          variants={itemVariants}
          className="uppercase text-white mb-2 sm:mb-[16px]"
          style={{ 
            fontFamily: "'IBM Plex Sans', sans-serif", 
            fontWeight: 500, 
            fontSize: "20px", 
            lineHeight: "1.2"
          }}
        >
          The Principle
        </motion.span>
        
        <motion.h2 
          variants={itemVariants}
          className="uppercase text-white mb-6 sm:mb-[47px]"
          style={{ 
            fontFamily: "'IBM Plex Sans', sans-serif", 
            fontWeight: 500, 
            fontSize: "clamp(32px, 5vw, 64px)", 
            lineHeight: "1.1",
            textShadow: "0px 11px 19px rgba(255, 0, 0, 0.5)"
          }}
        >
          Clarity Before Commitment
        </motion.h2>
        
        <motion.h3 
          variants={itemVariants}
          className="uppercase text-white mb-4 sm:mb-[16px]"
          style={{ 
            fontFamily: "'IBM Plex Sans', sans-serif", 
            fontWeight: 700, 
            fontSize: "clamp(18px, 3vw, 24px)", 
            lineHeight: "1.2",
            textShadow: "0px 9px 51px #F5333F"
          }}
        >
          Accountability at every level.
        </motion.h3>
        
        <motion.p 
          variants={itemVariants}
          className="text-white max-w-[650px] mx-auto"
          style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontWeight: 500, 
            fontSize: "clamp(16px, 2vw, 20px)", 
            lineHeight: "1.5",
            textShadow: "0px 5px 51px #F5333F"
          }}
        >
          Every engagement begins with a clear understanding of scope,
          objectives and responsibilities. Strong outcomes are built on
          strong foundations.
        </motion.p>
      </motion.div>
    </section>
  );
}

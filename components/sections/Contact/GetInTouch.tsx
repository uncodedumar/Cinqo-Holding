"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactUs() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  };

  const wipeVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: { 
      clipPath: "inset(0 0% 0 0)",
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  };

  return (
    <motion.section 
      className="bg-white pt-20 w-full relative flex flex-col overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Top Content Row */}
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto w-full relative z-10 pointer-events-none">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 mb-16 md:mb-24 pointer-events-auto">
          <motion.div className="shrink-0" variants={itemVariants}>
            <h2 className="text-[24px] font-medium whitespace-nowrap" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Get In Touch</h2>
          </motion.div>
          
          <motion.div className="max-w-[720px] ml-auto md:-mt-1" variants={itemVariants}>
            <p className="text-[20px] leading-relaxed text-black font-normal" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Whether you are exploring a strategic partnership, evaluating a project opportunity, seeking specialist contracting services or representing an international brand - our team is available to assist.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Content Row (Text + Image Aligned) */}
      <div className="relative w-full flex-grow flex items-stretch">
        <div className="px-6 md:px-12 max-w-[1440px] mx-auto w-full flex flex-col md:flex-row relative z-10 pointer-events-none">
          
          {/* Text Container */}
          <motion.div className="w-full md:w-[45%] flex flex-col justify-between pb-12 md:pb-16 pointer-events-auto min-h-[450px] md:min-h-[550px]" variants={itemVariants}>
            <h2 className="text-xl md:text-4xl font-medium leading-[1.1] text-black mb-8" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Contact Us to discuss your<br></br> requirements and a <br></br>memeber of our team <br></br>will get in touch.
            </h2>
            
            {/* Spacer to push subheading to the bottom */}
            <div className="flex-grow"></div>

            <p className="text-gray-500 text-[16px] md:text-[18px] font-normal" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Tell us what&apos;s on your mind
            </p>
          </motion.div>

        </div>

        {/* Absolute Image spanning top-to-bottom of this flex container, bleeding right */}
        <motion.div 
          className="absolute right-0 top-0 bottom-0 z-0 w-full md:w-[60%] max-w-[1100px]" 
          variants={wipeVariants}
        >
          <Image 
            src="/images/contactus/image.webp" 
            alt="Contact" 
            fill
            priority
            className="object-cover object-left-top"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
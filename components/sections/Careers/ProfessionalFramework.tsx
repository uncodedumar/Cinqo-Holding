"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfessionalFramework() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="bg-white overflow-hidden">
      {/* Top Text Section */}
      <div className="container mx-auto px-4 md:px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-2 lg:gap-4 items-start">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeUp}
            className="text-xl md:text-2xl lg:text-[2.5rem] font-bold uppercase text-black leading-[1.05] tracking-tight"
          >
            SHAPE YOUR <br className="hidden md:block" />
            PROFESSIONAL <br className="hidden md:block" />
            HORIZON.
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6 text-gray-800 text-lg leading-relaxed"
          >
            <motion.p variants={fadeUp}>
              At Cinqo, careers are built through responsibility, performance and continuous development.
              We seek individuals who take ownership of their work, value professional excellence and contribute positively to the
              teams around them.
            </motion.p>
            <motion.p variants={fadeUp}>
              Across every division of the Group, employees are provided opportunities to develop technical expertise, leadership
              capability and practical experience through project exposure, technical training, supervisory development and
              leadership programmes. As a Bahraini organisation committed to developing local talent, the Group continues to invest
              in people who contribute to sustained operational performance.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Hero Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative container mx-auto px-6 md:px-12 mb-24"
      >
        <div className="relative w-full h-[250px] md:h-[350px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/images/careers/horizon.webp"
            alt="Cinqo Holdings Professional Horizon"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Pillars Section */}
      <div className="relative pb-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeUp}
          className="container mx-auto px-6 md:px-12 text-center mb-16 relative z-10"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-black">The Pillars Of Our Culture</h3>
          <p className="max-w-4xl mx-auto text-gray-800 text-lg leading-relaxed">
            At Cinqo, careers are built through clear responsibility, performance, and continuous development. We don&apos;t
            just offer roles—we provide an environment where professionals are developed, empowered, and held to the
            highest standards of excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Horizontal Red Line background */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[0.25px] bg-[var(--color-coral-100)] z-0 hidden md:block origin-center"
          ></motion.div>
          
          {/* Cards Container */}
          <div className="container mx-auto px-2 md:px-2 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-4"
            >
              {/* Card 1 */}
              <motion.div variants={fadeUp} className="relative h-[350px] md:h-[450px] rounded-sm overflow-hidden border border-[var(--color-coral-100)] bg-white group shadow-lg">
                <Image src="/images/careers/pillar1.jpg" alt="Operational Ownership" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-4 text-white w-full">
                  <h4 className="text-xl font-bold mb-2">Operational Ownership</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    We seek driven individuals who take absolute ownership of their outcomes, value professional excellence, and execute with discipline across every project lifecycle.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeUp} className="relative h-[350px] md:h-[450px] rounded-sm overflow-hidden border border-[var(--color-coral-100)] bg-white group shadow-lg">
                <Image src="/images/careers/pillar2.jpg" alt="Strategic Advancement" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-4 text-white w-full">
                  <h4 className="text-xl font-bold mb-2">Strategic Advancement</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Expand your engineering, technology, and technical expertise through structured military capabilities and high-exposure regional project deployments.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeUp} className="relative h-[350px] md:h-[450px] rounded-sm overflow-hidden border border-[var(--color-coral-100)] bg-white group shadow-lg">
                <Image src="/images/careers/pillar3.jpg" alt="Regional Impact" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-4 text-white w-full">
                  <h4 className="text-xl font-bold mb-2">Regional Impact</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    As a proud Bahraini organization, we are actively committed to developing local talent and deploying professionals to shape the future of our local scope.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { companiesData } from "@/data/companies.data";

// Container variants for a staggered entrance animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Individual card variants for viewport entrance and hover states
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.08)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

/**
 * Our Companies — 6-card grid. On hover, the card's bgImage is
 * revealed underneath a frosted-glass blur (see .glass-frost-hover
 * in globals.css combined with the local .card styles below).
 */
export default function OurCompanies() {
  return (
    <section className="section bg-white -mt-4" id="companies">
      <div className="container">
        <h2>Our Companies</h2>
        <p className="text-h3 mt-2">
          Five operating Companies. Governed by one unified structure.
        </p>

        {/* Wrapped grid in a motion.div to coordinate the staggered entrance */}
        <motion.div
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {companiesData.map((company) => (
            <motion.div
              key={company.id}
              variants={cardVariants}
              whileHover="hover"
              // Replaced 'transition-all' with 'transition-colors' to prevent CSS from blocking Framer Motion transforms/opacity
              className="group relative overflow-hidden rounded border border-line bg-cream-50 min-h-[280px] isolate glass-frost-hover transition-colors duration-300"
            >
              <Link
                href={company.href}
                className="flex flex-col justify-between p-5 sm:p-6 w-full h-full min-h-[280px]"
              >
                {/* Background Image on Hover */}
                {/* <Image
                  src={company.bgImage}
                  alt=""
                  fill
                  className="object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 -z-20"
                /> */}

                {/* Frosted Glass Overlay */}
                <div className="absolute inset-0 -z-10 bg-white/55 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100" />

                {/* Logo — Strictly Top Left */}
                <div className="flex justify-start items-start w-full mb-6">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={140}
                    height={75}
                    className="w-auto h-20 sm:h-22 object-contain object-left"
                  />
                </div>

                {/* Text Box — Widened & Compacted */}
                <p className="text-body leading-normal text-gray-700 w-full">
                  {company.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

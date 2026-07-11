"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { companiesData } from "@/data/companies.data";

/**
 * Our Companies — 6-card grid. On hover, the card's bgImage is
 * revealed underneath a frosted-glass blur (see .glass-frost-hover
 * in globals.css combined with the local .card styles below).
 */
export default function OurCompanies() {
  return (
    <section className="section bg-white -mt-4" id="companies">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          Our Companies
        </motion.h2>
        <motion.p 
          className="text-h3 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Five operating Companies. Governed by one unified structure.
        </motion.p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {companiesData.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.08)",
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 15,
                delay: index * 0.1, // Manual stagger
              }}
              className="group relative overflow-hidden rounded border border-line bg-cream-50 min-h-[280px] isolate glass-frost-hover transition-colors duration-300"
            >
              <Link
                href={company.href}
                className="flex flex-col justify-between p-5 sm:p-6 w-full h-full min-h-[280px]"
              >
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
        </div>
      </div>
    </section>
  );
}

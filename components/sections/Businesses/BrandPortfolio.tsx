"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { brandPortfolio } from "@/data/businesses.data";
import type { BrandPortfolioItem, BrandPortfolioCategory } from "@/data/businesses.data";

function BrandCard({ item, index }: { item: BrandPortfolioItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-14 last:mb-0 pl-0 md:pl-4"
    >
      {/* Brand Name & Connecting Horizontal Line */}
      <div className="flex items-center gap-4 mb-6 -mr-[clamp(20px,5vw,64px)]">
        <p className="text-[15px] md:text-[17px] font-semibold text-[#111] uppercase tracking-wide whitespace-nowrap">
          {item.name}
        </p>
        <div className="flex-grow h-px bg-[#D1D5DB]" />
      </div>
      
      {/* Brand Content Row */}
      <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-start md:items-center">
        {/* Left Side: Brand Logo */}
        <div className="w-full md:w-[30%] lg:w-[25%] flex-shrink-0">
          <div className="relative h-[55px] md:h-[65px] w-full max-w-[200px] flex items-center">
            <Image
              src={item.logo}
              alt={`${item.name} logo`}
              fill
              className="object-contain object-left"
              sizes="200px"
            />
          </div>
        </div>
        
        {/* Right Side: Title & Description */}
        <div className="w-full md:w-[70%] lg:w-[75%]">
          <h4 className="text-[15px] md:text-[17px] font-semibold text-[#111827] mb-2">
            {item.title}
          </h4>
          <p className="text-[13.5px] md:text-[15px] leading-[1.65] text-[#4b5563]">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function CategorySection({ category, isLast }: { category: BrandPortfolioCategory, isLast: boolean }) {
  return (
    <div className="mb-12">
      <h3 className="-ml-[clamp(10px,2.5vw,32px)] text-[16px] md:text-[18px] font-semibold text-[#111827] tracking-wide uppercase mb-10">
        {category.category}
      </h3>
      
      <div className="flex flex-col">
        {category.items.map((item, index) => (
          <BrandCard key={item.name} item={item} index={index} />
        ))}
      </div>
      
      {/* Category Divider */}
      {!isLast && <div className="w-[calc(100%+2*clamp(20px,5vw,64px))] -ml-[clamp(20px,5vw,64px)] h-px bg-[#D1D5DB] mt-12" />}
    </div>
  );
}

export default function BrandPortfolio() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,64px)] pt-12 pb-24">
          
          {/* Main Title & Top Divider */}
          <h2 className="text-center font-[var(--font-display)] font-medium text-[18px] md:text-[21px] tracking-[0.08em] uppercase text-[#111827] mb-6">
            BRAND PORTFOLIO
          </h2>
          <div className="w-[calc(100%+2*clamp(20px,5vw,64px))] -ml-[clamp(20px,5vw,64px)] h-px bg-[#D1D5DB] mb-12" />
          
          {brandPortfolio.map((category, index) => (
            <CategorySection 
              key={category.category} 
              category={category} 
              isLast={index === brandPortfolio.length - 1}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
}
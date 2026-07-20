"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { brandPortfolio } from "@/data/businesses.data";
import type { BrandPortfolioItem, BrandPortfolioCategory } from "@/data/businesses.data";

function ImageGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      <div className="relative aspect-square rounded-[6px] overflow-hidden shadow-sm">
        <Image
          src="/biz.jpg"
          alt="Business showcase 1"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 30vw"
        />
      </div>
      <div className="relative aspect-square rounded-[6px] overflow-hidden shadow-sm">
        <Image
          src="/biz.jpg"
          alt="Business showcase 2"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 30vw"
        />
      </div>
    </div>
  );
}

function BrandCard({ item, index }: { item: BrandPortfolioItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 last:mb-0 pl-0 md:pl-4"
    >
      {/* Brand Name & Connecting Horizontal Line */}
      <div className="flex items-center gap-4 mb-6 -mr-[clamp(20px,5vw,64px)]">
        <p className="text-[15px] md:text-[17px] font-semibold text-[#111] uppercase tracking-wide whitespace-nowrap">
          {item.name}
        </p>
        <div className="flex-grow h-px bg-[#D1D5DB]" />
      </div>
      
      {/* Brand Content Row */}
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-stretch">
        <div className="w-full md:w-[35%] lg:w-[32%] flex flex-col justify-between">
          <div className="relative h-[90px] md:h-[100px] w-full max-w-[420px] mb-8 md:mb-0 pl-4">
            <Image
              src={item.logo}
              alt={`${item.name} logo`}
              fill
              className="object-contain object-left"
            />
          </div>
          
          <div className="mt-auto">
            <h4 className="text-[15px] md:text-[16px] font-semibold text-[#111827] mb-2">
              {item.title}
            </h4>
            <p className="text-[13px] md:text-[14px] leading-[1.6] text-[#444] max-w-[95%]">
              {item.description}
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-[65%] lg:w-[68%]">
          <ImageGrid />
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
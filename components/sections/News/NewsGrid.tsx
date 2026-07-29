"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/data/news.data";

export default function NewsSection() {
  // 1. Take the 6 most recent news items (newest first).
  const processedNews = [...newsData].reverse().slice(0, 6);

  // 2. State for loading more items (starts at 12)
  const [visibleCount, setVisibleCount] = useState(12);
  const displayNews = processedNews.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <section className="section bg-white overflow-hidden hidden md:block" id="news">
      <div className="container !px-[35px]">
        <div className="flex items-start justify-between mb-12">
          <h2 className="font-[var(--font-ibm-plex)] font-semibold text-[24px] tracking-wide">
            CINQO News
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {displayNews.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 12) * 0.05, ease: "easeOut" }}
            >
              <Link href={item.href} className="flex flex-col gap-2 group">
                <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden bg-navy-900">
                  <Image
                    src={item.featuredImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-cream-50 text-navy-900 text-small py-1 px-3 rounded-pill">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-body leading-[1.5] line-clamp-2">
                  {item.title}
                </h4>
                <span className="text-small text-muted">{item.date}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < processedNews.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleShowMore}
              className="px-8 py-3 bg-navy-900 text-white rounded-pill hover:bg-ink transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
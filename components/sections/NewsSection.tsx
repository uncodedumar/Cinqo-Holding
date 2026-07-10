"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/data/news.data";

export default function NewsSection() {
  const stripRef = useRef<HTMLDivElement>(null);

  const doubled = [...newsData, ...newsData];

  return (
    <section className="section bg-cream-100 overflow-hidden" id="news">
      <div className="container">
        <h2>CINQO News</h2>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div
          ref={stripRef}
          className="group flex gap-6 w-max cursor-pointer"
          style={{
            animation: "marquee 40s linear infinite",
            animationPlayState: "paused",
          }}
          onMouseEnter={() => {
            if (stripRef.current) stripRef.current.style.animationPlayState = "running";
          }}
          onMouseLeave={() => {
            if (stripRef.current) stripRef.current.style.animationPlayState = "paused";
          }}
        >
          {doubled.map((item, i) => (
            <motion.div
              key={`${item.id}-${i}`}
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            >
              <Link href={item.href} className="flex flex-col gap-2 w-[280px] shrink-0">
                <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-navy-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-cream-50 text-ink text-small py-1 px-3 rounded-pill">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-body leading-[1.5]">{item.title}</h4>
                <span className="text-small text-muted">{item.date}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/data/news.data";

export default function NewsSection() {
  return (
    <section className="section bg-white overflow-hidden" id="news">
      <div className="container !px-[35px]">
        <div className="flex items-start justify-between mb-12">
          <h2 className="font-[var(--font-ibm-plex)] font-semibold text-[24px] tracking-wide">
            CINQO News
          </h2>
          <Link href="/news" className="group text-right">
            <span className="block text-small text-muted tracking-widest font-semibold group-hover:text-ink transition-colors">
              Show All
            </span>
            <svg className="w-10 h-3 mt-1 ml-auto text-muted group-hover:text-ink transition-colors" viewBox="0 0 40 12" fill="none">
              <path d="M0 6h33M33 1l5 5-5 5" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {newsData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            >
              <Link href={item.href} className="flex flex-col gap-2 group">
                <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden bg-navy-900">
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
    </section>
  );
}

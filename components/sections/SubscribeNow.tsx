"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { newsData } from "@/data/news.data";

export default function SubscribeNow() {
  const [email, setEmail] = useState("");
  const stripRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
  };

  const doubled = [...newsData, ...newsData];

  return (
    <section className="relative overflow-hidden bg-[url('/images/subscribe/bg.jpg')] bg-center bg-cover bg-no-repeat pt-24 pb-0 text-cream-50 text-center">
      <div className="bg-overlay" />
      <div className="container relative z-20 max-w-[600px] mx-auto flex flex-col items-center gap-6">
        <h2>Join M+ Readers Who Never Miss A Headline</h2>
        <p>Stay informed with our newsletter and get the latest updates.</p>

        <form className="flex w-full gap-2 flex-col min-[600px]:flex-row" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 py-[14px] px-[20px] rounded-pill border border-white/20 bg-white/90 text-ink"
          />
          <button type="submit" className="btn btn-primary">
            Subscribe Now
          </button>
        </form>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div
          ref={stripRef}
          className="group flex gap-4 w-max cursor-pointer"
          style={{
            animation: "marquee 30s linear infinite",
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
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="relative aspect-[4/3] w-[260px] shrink-0 rounded-md overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute bottom-3 left-3 bg-black/60 text-cream-50 text-xs px-2 py-1 rounded">
                {item.tag}
              </span>
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

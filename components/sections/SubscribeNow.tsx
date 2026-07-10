"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SubscribeNow() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
  };

  return (
    <motion.section
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden bg-[url('/images/subscribe/bg.jpg')] bg-center bg-cover bg-no-repeat py-24 text-cream-50 text-center"
    >
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
    </motion.section>
  );
}

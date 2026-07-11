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
      className="relative overflow-hidden bg-[url('/images/subscribe/bg.jpg')] bg-center bg-cover bg-no-repeat text-cream-50 text-center mx-[50px] mt-[10px] mb-[70px]"
    >
      <div className="relative px-4 py-24 flex flex-col items-center gap-6">
        <h2>Join M+ Readers Who Never Miss A Headline</h2>
        <p>Stay informed wherever you are. Join our community of <br />readers across social media platforms.</p>

        <form className="flex gap-2 flex-col min-[600px]:flex-row mx-auto" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[280px] py-[14px] px-[20px] rounded-[1px] border border-white/20 bg-white/90 text-ink"
          />
          <button type="submit" className="btn btn-primary rounded-[1px]">
            Subscribe Now
          </button>
        </form>
      </div>
    </motion.section>
  );
}

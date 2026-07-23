"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/data/news.data";
import type { NewsItem } from "@/types";

export default function NewsSection() {
  useEffect(() => {
    // Rise up animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const animatedElements = document.querySelectorAll(".scroll-anim");
    animatedElements.forEach((el) => observer.observe(el));

    // Parallax effect for images
    const handleScroll = () => {
      const parallaxImages =
        document.querySelectorAll<HTMLElement>(".parallax-img");
      parallaxImages.forEach((img) => {
        const container = img.parentElement;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const containerCenter = rect.top + rect.height / 2;
        const windowCenter = window.innerHeight / 2;
        const distance = containerCenter - windowCenter;
        
        // Scale added to prevent image edges from showing during parallax movement
        img.style.transform = `translateY(${distance * 0.1}px) scale(1.15)`;
      });
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Filter out the 'standard-news' placeholder and take the 13 most recently uploaded
  const activeNews = [...newsData]
    .filter((item) => item.id !== "news-6")
    .reverse()
    .slice(0, 13);

  // Helper to safely loop through the provided data to fill the 13 required slots in the grid layout
  const getNews = (index: number): NewsItem =>
    activeNews[index % activeNews.length];

  // Map to the specific slots matching the mockup
  const heroNews = getNews(0);
  const midCard1 = getNews(1);
  const midCard2 = getNews(2);
  const listItems = Array.from({ length: 6 }).map((_, i) => getNews(i + 3));
  const tallCard1 = getNews(9);
  const tallCard2 = getNews(10);
  const tallCard3 = getNews(11);
  const tallCard4 = getNews(12);

  // Helper to extract paragraph text from the content block
  const getParagraphText = (content: any[]) => {
    const p = content.find((c) => c.type === "paragraph");
    return p ? p.text : "Read more about this latest update.";
  };

  return (
    <section className="w-[98%] mx-auto px-4 py-12 md:px-8 font-sans text-zinc-900">
      {/* --- TOP & MID SECTION (65% / 35% Split) --- */}
      <div className="flex flex-col lg:flex-row gap-x-12">
        {/* Left Column (Hero & Mid Cards) */}
        <div className="w-full lg:w-[65%] flex flex-col">
          {/* Main Hero Card */}
          <Link 
            href={heroNews.href} 
            className="group block mb-6 scroll-anim opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            <div className="relative w-full h-[320px] md:h-[440px] bg-zinc-800 rounded-sm overflow-hidden mb-6">
              {heroNews.featuredImage && (
                <Image
                  src={heroNews.featuredImage}
                  alt={heroNews.title}
                  fill
                  className="parallax-img object-cover opacity-20 group-hover:opacity-40 transition-opacity"
                />
              )}
              {/* Top Right Badge */}
              <span className="absolute top-5 right-5 bg-white text-zinc-900 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                {heroNews.tag}
              </span>
              {/* Bottom Left Overlay Text */}
              <div className="absolute bottom-6 left-6 pr-6">
                <h3 className="text-white text-lg md:text-xl font-medium leading-snug max-w-lg mb-2">
                  {heroNews.title}
                </h3>
                <p className="text-zinc-300 text-sm">{heroNews.date}</p>
              </div>
            </div>

            {/* Hero Text Content */}
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3 text-black">
              {heroNews.excerpt.length > 80
                ? heroNews.excerpt
                : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-3xl">
              {getParagraphText(heroNews.content)}
            </p>
          </Link>

          <hr className="my-10 border-zinc-300" />

          {/* 2 Mid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[midCard1, midCard2].map((card, idx) => (
              <Link 
                href={card.href} 
                key={`mid-${idx}`} 
                className="group block scroll-anim opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative w-full aspect-[16/10] bg-zinc-800 rounded-sm overflow-hidden mb-4">
                  {card.featuredImage && (
                    <Image
                      src={card.featuredImage}
                      alt={card.title}
                      fill
                      className="parallax-img object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                    />
                  )}
                  <span className="absolute top-4 right-4 bg-white text-zinc-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {card.tag}
                  </span>
                </div>
                <h4 className="font-semibold text-[15px] leading-snug mb-1 text-black group-hover:text-zinc-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-zinc-500 font-medium">{card.date}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column (6 List Items) */}
        <div className="w-full lg:w-[35%] border-t lg:border-t-0 lg:border-l border-zinc-300 pt-8 lg:pt-0 lg:pl-10 flex flex-col mt-10 lg:mt-0">
          <div className="flex flex-col h-full justify-between">
            {listItems.map((item, idx) => (
              <Link
                href={item.href}
                key={`list-${idx}`}
                className="flex items-center gap-5 py-5 border-b border-zinc-300 last:border-b-0 group scroll-anim opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative w-28 aspect-[16/10] bg-zinc-800 shrink-0 rounded-sm overflow-hidden">
                  {item.featuredImage && (
                    <Image
                      src={item.featuredImage}
                      alt={item.title}
                      fill
                      className="parallax-img object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[11px] text-zinc-500 font-medium mb-1.5 uppercase tracking-wide">
                    {item.date}
                  </p>
                  <h4 className="text-sm font-semibold text-black leading-snug group-hover:text-zinc-600 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Full Width Section Divider */}
      <hr className="w-full border-zinc-300 my-10" />

      {/* --- BOTTOM SECTION (4 Tall Cards) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[tallCard1, tallCard2, tallCard3, tallCard4].map((card, idx) => (
          <Link
            href={card.href}
            key={`tall-${idx}`}
            className="group block scroll-anim opacity-0 translate-y-10 transition-all duration-700 ease-out"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="relative w-full aspect-[16/10] bg-zinc-800 rounded-sm overflow-hidden mb-4">
              {card.featuredImage && (
                <Image
                  src={card.featuredImage}
                  alt={card.title}
                  fill
                  className="parallax-img object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
              )}
            </div>
            <h4 className="font-semibold text-base leading-snug mb-1.5 text-black group-hover:text-zinc-600 transition-colors pr-4">
              {card.title}
            </h4>
            <p className="text-xs text-zinc-500 font-medium">{card.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
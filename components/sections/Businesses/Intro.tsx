import { BusinessData } from "@/data/businesses.data";
import Hero from "@/components/sections/reusable/Hero";
import type { HeroSlideV2 } from "@/types";
import Image from "next/image";

export default function Intro({ business }: { business: BusinessData }) {
  const heroSlide: HeroSlideV2 = {
    id: business.slug,
    image: business.heroImage,
    alt: business.name,
    headline1: business.name,
  };

  return (
    <section className="w-full flex flex-col">
      <Hero slides={[heroSlide]} showDots={false} />

      {/* Intro Text Section */}
      <div className="relative w-full py-2">
        <div className="absolute inset-0 z-0">
          <Image
            src={business.introBgImage}
            alt=""
            fill
            className="object-cover brightness-100 saturate-[0.5] contrast-[0.85]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          {business.introHeading && (
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-6 uppercase whitespace-pre-line translate-y-6 translate-x-1">
              {business.introHeading}
            </h2>
          )}
          {/* Text */}
          <div className="flex items-start justify-end">
            <p className={`text-[1.375rem] text-black/80 leading-relaxed font-light max-w-2xl whitespace-pre-line -translate-y-16 ${business.slug === "thc-facilities-management" || business.slug === "cinqo-fitout" ? "-translate-x-4" : "-translate-x-8"}`}>
              {business.introText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

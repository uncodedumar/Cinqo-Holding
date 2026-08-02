import Hero from "@/components/sections/reusable/Hero";
import { homeHeroSlidesData } from "@/data/hero.data";

export default function HomeHero() {
  return (
    
    <Hero 
      slides={homeHeroSlidesData} 
      cta={{ href: "/contact", text: "Get in Touch >" }} 
      heightClass="min-h-[70svh] md:min-h-screen"
    />

  );
}

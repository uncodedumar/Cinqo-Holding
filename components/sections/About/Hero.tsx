import Hero from "@/components/sections/reusable/Hero";
import { aboutHeroSlidesData } from "@/data/hero.data";

export default function AboutHero() {
  return (
    <Hero
      slides={aboutHeroSlidesData}
      showDots={false}
    />
  );
}

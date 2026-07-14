import Hero from "@/components/sections/reusable/Hero";
import { careersHeroSlidesData } from "@/data/hero.data";

export default function CareersHero() {
  return (
    <Hero
      slides={careersHeroSlidesData}
      headline="CAREERS"
      showDots={false}
    />
  );
}

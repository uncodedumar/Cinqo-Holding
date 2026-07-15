import Hero from "@/components/sections/reusable/Hero";
import { careersHeroSlidesData } from "@/data/hero.data";

export default function ContactHero() {
  return (
    <Hero
      slides={careersHeroSlidesData}
      headline="CONTACT US"
      showDots={false}
    />
  );
}

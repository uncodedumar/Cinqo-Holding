import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Credibility from "@/components/sections/Credibility";
import OurCompanies from "@/components/sections/OurCompanies";
import ThePrinciple from "@/components/sections/ThePrinciple";
import GuidingPrinciples from "@/components/sections/GuidingPrinciples";
import ProjectHighlights from "@/components/sections/ProjectHighlights";
import LogosLoop from "@/components/sections/LogosLoop";
import NewsSection from "@/components/sections/NewsSection";
import SubscribeNow from "@/components/sections/SubscribeNow";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Credibility />
      <OurCompanies />
      <ThePrinciple />
      <GuidingPrinciples />
      <ProjectHighlights />
      <LogosLoop />
      <NewsSection />
      <SubscribeNow />
    </main>
  );
}

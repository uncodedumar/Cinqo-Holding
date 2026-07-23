import Hero from "@/components/sections/Home/Hero";
import AboutUs from "@/components/sections/Home/AboutUs";
import Credibility from "@/components/sections/Home/Credibility";
import OurCompanies from "@/components/sections/Home/OurCompanies";
import ThePrinciple from "@/components/sections/Home/ThePrinciple";
import GuidingPrinciples from "@/components/sections/Home/GuidingPrinciples";
import ProjectHighlights from "@/components/sections/Home/ProjectHighlights";
import LogosLoop from "@/components/sections/Home/LogosLoop";
import NewsSection from "@/components/sections/Home/NewsSection";
import SubscribeNow from "@/components/sections/Home/SubscribeNow";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Credibility />
      <OurCompanies />
      <ThePrinciple />
      <ProjectHighlights />
      <LogosLoop />
      <NewsSection />
      <SubscribeNow />
      
    </main>
  );
}

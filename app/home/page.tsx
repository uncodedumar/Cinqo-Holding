import dynamic from "next/dynamic";
import Hero from "@/components/sections/Home/Hero";
import AboutUs from "@/components/sections/Home/AboutUs";
import OurCompanies from "@/components/sections/Home/OurCompanies";
import LogosLoop from "@/components/sections/Home/LogosLoop";
import NewsSection from "@/components/sections/Home/NewsSection";
import SubscribeNow from "@/components/sections/Home/SubscribeNow";

const Credibility = dynamic(() => import("@/components/sections/Home/Credibility"));
const ThePrinciple = dynamic(() => import("@/components/sections/Home/ThePrinciple"));
const ProjectHighlights = dynamic(() => import("@/components/sections/Home/ProjectHighlights"));

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

import HeroSection from "@/components/sections/About/HeroSection";
import AboutSection from "@/components/sections/About/AboutSection";
import VisionSection from "@/components/sections/About/VisionSection";
import GovernanceGrid from "@/components/sections/About/GovernanceGrid";
import ChairmanMessage from "@/components/sections/About/ChairmanMessage";
import DirectorsGrid from "@/components/sections/About/DirectorsGrid";
import ExecutiveGrid from "@/components/sections/About/ExecutiveGrid";
import News from "@/components/sections/About/News";

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <GovernanceGrid />
      <ChairmanMessage />
      <DirectorsGrid />
      <ExecutiveGrid />
      <News />
    </main>
  );
}

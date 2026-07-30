import dynamic from "next/dynamic";
import Hero from "@/components/sections/Home/Hero";

const AboutUs = dynamic(() => import("@/components/sections/Home/AboutUs"), {
  loading: () => <div className="w-full h-[600px] bg-white" />,
});
const Credibility = dynamic(() => import("@/components/sections/Home/Credibility"));
const OurCompanies = dynamic(() => import("@/components/sections/Home/OurCompanies"), {
  loading: () => <div className="section h-[800px] bg-slate-50/60" />,
});
const ThePrinciple = dynamic(() => import("@/components/sections/Home/ThePrinciple"));
const ProjectHighlights = dynamic(() => import("@/components/sections/Home/ProjectHighlights"));
const LogosLoop = dynamic(() => import("@/components/sections/Home/LogosLoop"), {
  loading: () => <div className="bg-white py-6 h-[120px]" />,
});
const NewsSection = dynamic(() => import("@/components/sections/Home/NewsSection"), {
  loading: () => <div className="section bg-white h-[500px]" />,
});
const SubscribeNow = dynamic(() => import("@/components/sections/Home/SubscribeNow"), {
  loading: () => <div className="h-[400px] bg-white" />,
});

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

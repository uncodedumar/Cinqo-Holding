import Hero from "@/components/sections/About/Hero";
import AboutSection from "@/components/sections/About/About";
import Compliance from "@/components/sections/About/Compliance";
import Leadership from "@/components/sections/About/Leadership";
import News from "@/components/sections/About/News";

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Compliance />
      <Leadership />
      <News />
    </main>
  );
}

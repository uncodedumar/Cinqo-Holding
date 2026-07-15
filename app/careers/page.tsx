import Hero from "@/components/sections/Careers/Hero";
import ProfessionalHorizon from "@/components/sections/Careers/ProfessionalHorizon";
import JoinUs from "@/components/sections/Careers/JoinUs";
import ProfessionalFramework from "@/components/sections/Careers/ProfessionalFramework";
import News from "@/components/sections/Careers/News";

export default function CareersPage() {
  return (
    <main>
      <Hero />
      <ProfessionalFramework />
      <JoinUs />      
      <ProfessionalHorizon />
      <News />
    </main>
  );
}

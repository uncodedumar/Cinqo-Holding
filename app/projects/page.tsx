import dynamic from "next/dynamic";
import Hero from "@/components/sections/Projects/Hero";
import Text from "@/components/sections/Projects/Text";
import OG from "@/components/sections/Projects/OGProjects";
import CP from "@/components/sections/Projects/CPProjects";
import SubscribeNow from "@/components/sections/Home/SubscribeNow";

const Stack = dynamic(() => import("@/components/sections/Projects/Stack"));

export default function AboutPage() {
  return (
    <main>
    <Hero />
     <Text/>
     <Stack/> 
     <CP/>
     <OG/>
     <SubscribeNow />

    </main>
    
  );
}

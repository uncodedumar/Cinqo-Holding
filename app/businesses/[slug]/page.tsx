import { notFound } from "next/navigation";
import { businesses, sectorsPage } from "@/data/businesses.data";
import Intro from "@/components/sections/Businesses/Intro";
import DefineUs from "@/components/sections/Businesses/DefineUs";
import Capabilities from "@/components/sections/Businesses/Capabilities";
import Sectors from "@/components/sections/Businesses/Sectors";
import News from "@/components/sections/Home/NewsSection";

// Optional: statically generate these routes
export function generateStaticParams() {
  return businesses.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BusinessPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const business = businesses.find((b) => b.slug === slug);

  if (!business) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      {/* Intro section handles hero image and intro text block */}
      <Intro business={business} />
      
      {/* Define Us grid */}
      <DefineUs definesUs={business.definesUs} />
      
      {/* Capabilities list/accordion */}
      <Capabilities capabilities={business.capabilities} />
      
      {/* Sectors grid */}
      <Sectors 
        sectorShowcase={business.sectorShowcase}
        sectorsPageData={sectorsPage}
      />

      <News/>
    </main>
  );
}

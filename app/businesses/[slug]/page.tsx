import { notFound } from "next/navigation";
import { businesses} from "@/data/businesses.data";
import Intro from "@/components/sections/Businesses/Intro";
import DefineUs from "@/components/sections/Businesses/DefineUs";
import Capabilities from "@/components/sections/Businesses/Capabilities";
import Sectors from "@/components/sections/Businesses/Sectors";
import BrandPortfolio from "@/components/sections/Businesses/BrandPortfolio";
import Governance from "@/components/sections/Businesses/Governance";
import Projects from "@/components/sections/Businesses/Projects";
import News from "@/components/sections/Home/NewsSection";

/** Trading is the only business that distributes third-party brands. */
const SLUG_TRADING = "cinqo-trading";

/** Investments is an investment vehicle, not an operating company. */
const SLUG_INVESTMENTS = "cinqo-holding-investments";

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

  /*
    Investments follows its own short arc. It has no capabilities, sectors or
    project showcase to speak of, and the "What Defines Us" grid stands in as
    its investment areas — so it renders a dedicated tree rather than an
    operating-company page padded out with empty sections.
  */
  if (business.slug === SLUG_INVESTMENTS) {
    return (
      <main className="min-h-screen w-full flex flex-col bg-white">
        <Intro business={business} />
        <DefineUs definesUs={business.definesUs} title="Investment Areas" />
        <Governance />
      </main>
    );
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
      />

      {/* Distributed brands — Trading only */}
      {business.slug === SLUG_TRADING && <BrandPortfolio />}

      {/* Project showcase for this business */}
      <Projects data={business} />

      <News/>
    </main>
  );
}

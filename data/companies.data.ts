import type { CompanyCard } from "@/types";

/**
 * Our Companies — the 5 operating companies under Cinqo Holding.
 * `bgImage` is revealed with a frosted-glass blur on card hover.
 */
export const companiesData: CompanyCard[] = [
  {
    id: "cinqo-contracting",
    name: "Cinqo Contracting",
    logo: "/images/logos/6.png",
    bgImage: "/images/companies/c1.jpg",
    description:
      "Delivering civil and building construction across residential, commercial and industrial sectors, including luxury villas, residential towers, mixed-use developments, warehouses and industrial facilities.",
    href: "/businesses/cinqo-contracting",
  }
  ,
  {
    id: "cinqo-coatings",
    name: "Cinqo Flooring & Coating Technologies",
    logo: "/images/logos/4.png",
    bgImage: "/images/companies/c5.png",
    description:
      "Specialists in epoxy flooring, polyurethane systems, waterproofing and protective coatings engineered for demanding industrial and commercial environments.",
    href: "/businesses/cinqo-flooring-coating-technologies",
  },
  {
    id: "cinqo-trading",
    name: "Cinqo Trading",
    logo: "/images/logos/2.png",
    bgImage: "/images/companies/h1.jpg",
    description:
      "Exclusive and authorised distributor of leading international brands across paints, construction chemicals, building materials and infrastructure solutions.",
    href: "/businesses/cinqo-trading",
  },

 
  
  {
    id: "thc-facilities-management",
    name: "THC Facilities Management",
    logo: "/images/logos/1.png",
    bgImage: "/images/companies/c2.jpeg",
    description:
      "Provider of integrated hard and soft facilities management services supporting residential, commercial, hospitality and industrial assets.",
    href: "/businesses/thc-facilities-management",
  },
  {
    id: "thc-fitout",
    name: "THC Fit Out",
    logo: "/images/logos/3.png",
    bgImage: "/images/companies/c3.JPG",
    description:
      "Interior construction specialists delivering corporate, retail, hospitality and residential fit-out projects with a focus on quality, coordination and finish excellence.",
    href: "/businesses/cinqo-fitout",
  },
  {
    id: "cinqo-holding-investments",
    name: "Cinqo Holding Investments",
    logo: "/images/logos/5.png",
    bgImage: "/images/hero/h3.png",
    description:
      "Cinqo Holding evaluates and manages investments aligned with the Group's long-term vision, operational expertise and governance standards.",
    href: "/businesses/cinqo-holding-investments",
  },
];

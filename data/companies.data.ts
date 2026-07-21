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
      "Delivering civil and building construction across various sectors — shaping communities, businesses and infrastructure.",
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
    href: "/businesses/cinqo-coatings",
  },
  {
    id: "cinqo-trading",
    name: "Cinqo Trading",
    logo: "/images/logos/2.png",
    bgImage: "/images/companies/h1.jpg",
    description:
      "Structured technical distribution, inventory management, and specification support for nine of the world's leading building and coating brands.",
    href: "/businesses/cinqo-trading",
  },

 
  
  {
    id: "thc-facility-management",
    name: "THC Facility Management",
    logo: "/images/logos/1.png",
    bgImage: "/images/companies/c2.jpeg",
    description:
      "Provider of integrated hard and soft facilities management services supporting residential, commercial, hospitality and industrial assets.",
    href: "/businesses/thc-facility-management",
  },
  {
    id: "thc-fitout",
    name: "THC Fitout",
    logo: "/images/logos/3.png",
    bgImage: "/images/companies/c3.JPG",
    description:
      "Interior construction specialists delivering corporate, hospitality and residential fit-out projects with a focus on quality, coordination and finish excellence.",
    href: "/businesses/thc-fitout",
  },
  {
    id: "cinqo-holdings",
    name: "Cinqo Holdings",
    logo: "/images/logos/5.png",
    bgImage: "/images/hero/h3.png",
    description:
      "Cinqo Holding is the investment and strategic parent company that provides the governance, leadership and long-term vision behind the Group's portfolio of its operating businesses and investments.",
    href: "/businesses/cinqo-holdings",
  },
];

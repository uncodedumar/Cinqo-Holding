import type { CompanyCard } from "@/types";

/**
 * Our Companies — the 5 operating companies under Cinqo Holding.
 * `bgImage` is revealed with a frosted-glass blur on card hover.
 */
export const companiesData: CompanyCard[] = [
  {
    id: "cinqo-holdings",
    name: "Cinqo Holdings",
    logo: "/images/companies/CINQO.webp",
    bgImage: "/images/companies/cinqo-holdings-bg.jpg",
    description:
      "Cinqo Holding is the investment and strategic parent company that provides the governance, leadership and long-term vision behind the Group's portfolio of its operating businesses and investments.",
    href: "/companies/cinqo-holdings",
  },
  {
    id: "cinqo-trading",
    name: "Cinqo Trading",
    logo: "/images/companies/cinqo-trading-logo.svg",
    bgImage: "/images/companies/cinqo-trading-bg.jpg",
    description:
      "Structured technical distribution, inventory management, and specification support for nine of the world's leading building and coating brands.",
    href: "/companies/cinqo-trading",
  },
  {
    id: "cinqo-coatings",
    name: "Cinqo Coatings",
    logo: "/images/companies/cinqo-coatings-logo.svg",
    bgImage: "/images/companies/cinqo-coatings-bg.jpg",
    description:
      "Specialists in epoxy flooring, polyurethane systems, waterproofing and protective coatings engineered for demanding industrial and commercial environments.",
    href: "/companies/cinqo-coatings",
  },
  {
    id: "cinqo-contracting",
    name: "Cinqo Contracting",
    logo: "/images/companies/cinqo-contracting-logo.svg",
    bgImage: "/images/companies/cinqo-contracting-bg.jpg",
    description:
      "Delivering civil and building construction across various sectors — shaping communities, businesses and infrastructure.",
    href: "/companies/cinqo-contracting",
  },
  {
    id: "thc-facility-management",
    name: "THC Facility Management",
    logo: "/images/companies/thc-facility-logo.svg",
    bgImage: "/images/companies/thc-facility-bg.jpg",
    description:
      "Provider of integrated hard and soft facilities management services supporting residential, commercial, hospitality and industrial assets.",
    href: "/companies/thc-facility-management",
  },
  {
    id: "thc-fitout",
    name: "THC Fitout",
    logo: "/images/companies/thc-fitout-logo.svg",
    bgImage: "/images/companies/thc-fitout-bg.jpg",
    description:
      "Interior construction specialists delivering corporate, hospitality and residential fit-out projects with a focus on quality, coordination and finish excellence.",
    href: "/companies/thc-fitout",
  },
];

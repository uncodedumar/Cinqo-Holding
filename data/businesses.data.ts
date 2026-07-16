export interface DefineUsItem {
  title: string;
  description: string;
}

export interface CapabilityItem {
  title: string;
  description: string;
  image: string;
}

export interface SectorItem {
  title: string;
  description: string;
  image: string;
}

export interface SectorShowcaseItem {
  title: string;
  description: string;
  image: string;
}

export interface BusinessData {
  slug: string;
  name: string;
  heroImage: string;
  introText: string;
  definesUs: DefineUsItem[];
  capabilities: CapabilityItem[];
  sectors: SectorItem[];
  sectorShowcase: SectorShowcaseItem[];
}

export interface SectorsPageData {
  showcaseText: string;
  projects: string[];
  showcaseImage: string;
  aerialImage: string;
  compositeImage: string;
  compositeTitle: string;
  compositeDescription: string;
  pipCount: number;
}

export const sectorsPage: SectorsPageData = {
  showcaseText: "A showcase of absolute accountability in execution. We measure the success of these works by the frequency of repeat client engagement and a commitment to honoring obligations long after final handover.",
  projects: ["J003 FONTANA INFINITY", "J003 FONTANA INFINITY", "J003 FONTANA INFINITY"],
  showcaseImage: "/images/sectors/sector-1.webp",
  aerialImage: "/images/sectors/sector-2.webp",
  compositeImage: "/images/sectors/sector-3.jpg",
  compositeTitle: "J003 FONTANA INFINITY",
  compositeDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  pipCount: 5
};

export const sectorsShowcase: SectorItem[] = [
  {
    title: "Corporate Offices",
    description: "Interior construction aligned with functionality, acoustic performance and service integration.",
    image: "/images/sectors/card-1.webp"
  },
  {
    title: "Retail & F&B",
    description: "Fast-track fit-out delivery focused on brand requirements and operational readiness.",
    image: "/images/sectors/card-2.webp"
  },
  {
    title: "Residential Interiors",
    description: "Premium villa and apartment interior delivered with attention to detail and material quality.",
    image: "/images/sectors/card-3.webp"
  },
  {
    title: "Healthcare & Clinics",
    description: "Fit-outs incorporating hygienic materials and coordinated building services.",
    image: "/images/sectors/card-4.webp"
  }
];

export const businesses: BusinessData[] = [
  {
    slug: "cinqo-contracting",
    name: "CINQO CONTRACTING",
    heroImage: "/images/businesses/cinqo-contracting-hero.jpg",
    introText: "Cinqo Contracting is the Cinqo Flagship enterprise...",
    definesUs: [
      {
        title: "MAXIMISING POTENTIAL",
        description: "Value Engineering..."
      },
      {
        title: "DELIVERING EXCELLENCE",
        description: "Executing complex projects..."
      },
      {
        title: "EMPOWERING CAPABILITIES",
        description: "Driving success..."
      }
    ],
    capabilities: [
      {
        title: "CIVIL & STRUCTURAL CONSTRUCTION",
        description: "Ground-up structural engineering...",
        image: "/images/businesses/capability-civil.jpg"
      },
      {
        title: "MEP CONTRACTING",
        description: "Mechanical, Electrical, and Plumbing...",
        image: "/images/businesses/capability-mep.jpg"
      },
      {
        title: "HIGH END FIT OUT & JOINERY",
        description: "Premium interior fit-outs...",
        image: "/images/businesses/capability-fitout.jpg"
      }
    ],
    sectors: [
      {
        title: "HIGH-END RESIDENTIAL VILLAS & COMPOUNDS",
        description: "Delivery of luxury villas and gated communities with a focus on quality, coordination and finishing excellence.",
        image: "/images/businesses/sector-residential.jpg"
      },
      {
        title: "HOSPITALITY",
        description: "Luxury hotels and resorts...",
        image: "/images/businesses/sector-hospitality.jpg"
      },
      {
        title: "RETAIL & SHOPPING MALLS",
        description: "World-class retail destinations...",
        image: "/images/businesses/sector-retail.jpg"
      },
      {
        title: "HEALTHCARE",
        description: "Advanced medical facilities...",
        image: "/images/businesses/sector-healthcare.jpg"
      }
    ],
    sectorShowcase: [
      {
        title: "HIGH-END RESIDENTIAL VILLAS & COMPOUNDS",
        description: "Delivery of luxury villas and gated communities with a focus on quality, coordination and finishing excellence.",
        image: "/images/sectors/card-1_contract.webp"
      },
      {
        title: "RESIDENTIAL & COMMERCIAL TOWERS",
        description: "Construction of mid- and high-rise developments with strong emphasis on programme control, logistics and safety compliance.",
        image: "/images/sectors/card-2_contract.webp"
      },
      {
        title: "COMMERCIAL MALLS & MIXED-USE DEVELOPMENTS",
        description: "Construction of mid- and high-rise developments with strong emphasis on programme control, logistics and safety compliance.",
        image: "/images/sectors/card-3_contract.webp"
      },
      {
        title: "WAREHOUSES & INDUSTRIAL FACILITIES",
        description: "Development of industrial structures incorporating utility integration, fire safety systems and operational infrastructure.",
        image: "/images/sectors/card-4_contract.webp"
      }
    ],
  },
  {
    slug: "thc-facilities-management",
    name: "THC FACILITIES MANAGEMENT",
    heroImage: "/images/businesses/thc-facilities-hero.jpg",
    introText: "THC Facilities Management helps clients protect, maintain and enhance the value of their assets through integrated facilities management solutions.",
    definesUs: [
      {
        title: "ASSET PERFORMANCE",
        description: "Maximizing the lifespan and performance of your assets."
      },
      {
        title: "OPERATIONAL EFFICIENCY",
        description: "Optimizing operations to reduce costs and improve service delivery."
      },
      {
        title: "STRATEGIC PARTNERS",
        description: "Working closely with clients to achieve their facility goals."
      }
    ],
    capabilities: [
      {
        title: "PREVENTIVE MAINTENANCE PROGRAMMES",
        description: "Comprehensive maintenance coverage including scheduled inspections, servicing and performance monitoring.",
        image: "/images/businesses/capability-preventive.jpg"
      },
      {
        title: "MEP SERVICING AND MAINTENANCE",
        description: "Expert maintenance of mechanical, electrical and plumbing systems.",
        image: "/images/businesses/capability-mep-maintenance.jpg"
      },
      {
        title: "ON DEMAND CORRECTIVE MAINTENANCE",
        description: "Rapid response repairs and issue resolution.",
        image: "/images/businesses/capability-corrective.jpg"
      }
    ],
    sectors: [
      {
        title: "RESIDENTIAL COMPLEXES",
        description: "Maintaining premium residential communities.",
        image: "/images/businesses/sector-residential.jpg"
      },
      {
        title: "COMMERCIAL ASSETS",
        description: "Ensuring optimal performance for commercial buildings.",
        image: "/images/businesses/sector-commercial.jpg"
      },
      {
        title: "HOSPITALITY",
        description: "High-standard maintenance for hotels and resorts.",
        image: "/images/businesses/sector-hospitality.jpg"
      },
      {
        title: "RETAIL FACILITIES",
        description: "Keeping retail environments safe and pristine.",
        image: "/images/businesses/sector-retail.jpg"
      }
    ],
    sectorShowcase: [
      {
        title: "HOSPITALITY",
        description: "Facilities management solutions supporting hotels and serviced residences where uninterrupted operations are essential.",
        image: "/images/sectors/card-1_fm.webp"
      },
      {
        title: "RESIDENTIAL TOWERS & COMPOUNDS",
        description: "Maintenance of HVAC, fire systems, lifts and shared infrastructure to ensure consistent building performance.",
        image: "/images/sectors/card-2_fm.webp"
      },
      {
        title: "OFFICE BUILDINGS",
        description: "Preventive maintenance and system optimisation for corporate environments focused on uptime and efficiency.",
        image: "/images/sectors/card-3_fm.webp"
      },
      {
        title: "INDUSTRIAL FACILITIES",
        description: "Technical servicing of operational assets and infrastructure aligned with compliance and productivity requirements.",
        image: "/images/sectors/card-4_fm.webp"
      }
    ],
  },
  {
    slug: "cinqo-trading",
    name: "CINQO TRADING",
    heroImage: "/images/businesses/placeholder.jpg",
    introText: "Coming soon...",
    definesUs: [],
    capabilities: [],
    sectors: [],
    sectorShowcase: [
      {
        title: "CONSTRUCTION & CONTRACTING",
        description: "Supply of coatings, construction chemicals and engineered systems supported by specification and application advisory services.",
        image: "/images/sectors/card-1_trading.webp"
      },
      {
        title: "RETAIL DISTRIBUTION",
        description: "Structured supply to retail channels supported by inventory management, pricing governance and brand development.",
        image: "/images/sectors/card-2_trading.webp"
      },
      {
        title: "INDUSTRIAL & MANUFACTURING",
        description: "Technical products and systems supporting operational efficiency, asset protection and facility performance.",
        image: "/images/sectors/card-3_trading.webp"
      },
      {
        title: "INFRASTRUCTURE & UTILITIES",
        description: "Specialised technologies and engineering solutions supporting municipal and large-scale infrastructure projects.",
        image: "/images/sectors/card-4_trading.webp"
      }
    ],
  },
  {
    slug: "cinqo-fitout",
    name: "CINQO FITOUT",
    heroImage: "/images/businesses/placeholder.jpg",
    introText: "Coming soon...",
    definesUs: [],
    capabilities: [],
    sectors: [],
    sectorShowcase: [],
  },
  {
    slug: "cinqo-flooring-coating-technologies",
    name: "CINQO FLOORING & COATING",
    heroImage: "/images/businesses/placeholder.jpg",
    introText: "Coming soon...",
    definesUs: [],
    capabilities: [],
    sectors: [],
    sectorShowcase: [
      {
        title: "FOOD & BEVERAGE",
        description: "Hygienic flooring systems designed for production, processing and wash-down environments.",
        image: "/images/sectors/card-1_fc.webp"
      },
      {
        title: "HEALTHCARE & PHARMACEUTICAL",
        description: "Seamless flooring solutions suitable for laboratories, cleanrooms and contamination-sensitive facilities.",
        image: "/images/sectors/card-2_fc.webp"
      },
      {
        title: "WAREHOUSES & LOGISTICS",
        description: "Heavy-duty flooring systems designed for continuous operational traffic and material handling.",
        image: "/images/sectors/card-3_fc.webp"
      },
      {
        title: "CAR PARKS & PODIUMS",
        description: "Protective coating systems engineered for vehicular traffic and environmental exposure.",
        image: "/images/sectors/card-4_fc.webp"
      }
    ],
  }
];

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

export interface BusinessData {
  slug: string;
  name: string;
  heroImage: string;
  introText: string;
  definesUs: DefineUsItem[];
  capabilities: CapabilityItem[];
  sectors: SectorItem[];
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
    heroImage: "/images/companies/c1.jpg",
    introText: "Cinqo Contracting is the Cinqo Flagship enterprise...",
    definesUs: [
      {
        title: "Executive Oversight",
        description: "Projects operate with direct leadership visibility, ensuring accountability, timely decision-making and effective risk management throughout delivery."
      },
      {
        title: "Quality & Compliance",
        description: "Materials, workmanship and safety standards are maintained through inspections, testing and compliance monitoring throughout execution."
      },
      {
        title: "Programme Control",
        description: "Scheduling and sequencing are actively monitored across all project phases, supported by ERP-enabled tracking and reporting."
      },
      {
        title: "Commercial Discipline",
        description: "Cost exposure, variations and financial commitments are managed through structured controls and documented approval processes."
      }
    ],
    capabilities: [
      {
        title: "CIVIL & STRUCTURAL CONSTRUCTION",
        description: "Scheduling review and progress tracking to safeguard timelines and milestone commitments.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "MEP CONTRACTING",
        description: "Scheduling review and progress tracking to safeguard timelines and milestone commitments.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "HIGH END FIT OUT & JOINERY",
        description: "Scheduling review and progress tracking to safeguard timelines and milestone commitments.",
        image: "/images/capabilities/HAWAR.jpg"
      }
    ],
    sectors: [
      {
        title: "RESIDENTIAL & COMMERCIAL COMPLEXES",
        description: "High-rise towers and mixed-use developments...",
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
    ]
  },
  {
    slug: "thc-facilities-management",
    name: "THC FACILITIES MANAGEMENT",
    heroImage: "/images/companies/c2.jpeg",
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
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "MEP SERVICING AND MAINTENANCE",
        description: "Expert maintenance of mechanical, electrical and plumbing systems.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "ON DEMAND CORRECTIVE MAINTENANCE",
        description: "Rapid response repairs and issue resolution.",
        image: "/images/capabilities/HAWAR.jpg"
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
    ]
  },
  {
    slug: "cinqo-trading",
    name: "CINQO TRADING",
    heroImage: "/images/companies/h1.jpg",
    introText: "Coming soon...",
    definesUs: [],
    capabilities: [],
    sectors: []
  },
  {
    slug: "cinqo-fitout",
    name: "CINQO FITOUT",
    heroImage: "/images/companies/c3.JPG",
    introText: "Coming soon...",
    definesUs: [],
    capabilities: [],
    sectors: []
  },
  {
    slug: "cinqo-flooring-coating-technologies",
    name: "CINQO FLOORING & COATING",
    heroImage: "/images/companies/c5.png",
    introText: "Coming soon...",
    definesUs: [],
    capabilities: [],
    sectors: []
  }
];

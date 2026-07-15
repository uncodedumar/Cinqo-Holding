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
    ]
  },
  {
    slug: "cinqo-trading",
    name: "CINQO TRADING",
    heroImage: "/images/businesses/placeholder.jpg",
    introText: "Coming soon...",
    definesUs: [],
    capabilities: [],
    sectors: []
  },
  {
    slug: "cinqo-fitout",
    name: "CINQO FITOUT",
    heroImage: "/images/businesses/placeholder.jpg",
    introText: "Coming soon...",
    definesUs: [],
    capabilities: [],
    sectors: []
  },
  {
    slug: "cinqo-flooring-coating-technologies",
    name: "CINQO FLOORING & COATING",
    heroImage: "/images/businesses/placeholder.jpg",
    introText: "Coming soon...",
    definesUs: [],
    capabilities: [],
    sectors: []
  }
];

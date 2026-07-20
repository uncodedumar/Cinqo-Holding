export interface DefineUsItem {
  title: string;
  description: string;
  bgimage:string;
}

export interface CapabilityItem {
  title: string;
  description: string;
  image: string;
}

export interface SectorShowcaseItem {
  title: string;
  description: string;
  image: string;
}

export interface ShowcaseProject {
  title: string;                // e.g., "J003 FONTANA INFINITY" (Left list & Top-left on hover)
  mainImage: string;            // The default right-side image (e.g., the building with the pool)
  hoverThumbnails: string[];    // Array of the 5 smaller images shown in the middle on hover
  hoverDescription: string;     // The descriptive text shown at the bottom on hover
}

export interface BusinessData {
  slug: string;
  name: string;
  heroImage: string;
  introBgImage: string;
  /** Optional looping background video for the intro section (falls back to introBgImage when omitted). */
  introBgVideo?: string;
  introHeading?: string;
  introText: string;
  definesUs: DefineUsItem[];
  capabilities: CapabilityItem[];
  sectorShowcase: SectorShowcaseItem[];

  // --- Integrated Showcase Section Data ---
  showcaseText: string;                // The static upper paragraph on the left
  showcaseProjects: ShowcaseProject[]; // The list of projects containing data for both states
}

export const businesses: BusinessData[] = [
  {
    slug: "cinqo-contracting",
    name: "CINQO CONTRACTING",
    heroImage: "/images/companies/c1.jpg",
    introBgImage: "/images/companies/ci1.png",
    introHeading: "BUILT ON\nCOMMITMENT",
    introText: "Cinqo Contracting is the Group's flagship construction company, delivering civil and building projects across Bahrain's residential, commercial and industrial sectors.\n\nFor nearly two decades, the company has delivered luxury villas, residential developments, commercial facilities, warehouses and industrial assets. Through execution focused planning, experienced project leadership and rigorous commercial control, Cinqo Contracting provides confidence from mobilisation through final handover.",
    definesUs: [
      {
        title: "Executive Oversight",
        description: "Projects operate with direct leadership visibility, ensuring accountability, timely decision-making and effective risk management throughout delivery.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "Quality & Compliance",
        description: "Materials, workmanship and safety standards are maintained through inspections, testing and compliance monitoring throughout execution.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "Programme Control",
        description: "Scheduling and sequencing are actively monitored across all project phases, supported by ERP-enabled tracking and reporting.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "Commercial Discipline",
        description: "Cost exposure, variations and financial commitments are managed through structured controls and documented approval processes.",
        bgimage: "/images/companies/ci1.png",
      }
    ],
    capabilities: [
      {
        title: "CIVIL & STRUCTURAL CONSTRUCTION",
        description: "Execution of foundations, superstructure and core civil works with close supervision, quantity control and quality monitoring.",
        image: "/images/capabilities/cc1.png"
      },
      {
        title: "MEP COORDINATION",
        description: "Alignment of mechanical, electrical and plumbing systems within structural and architectural frameworks to reduce clashes and protect long-term serviceability.",
        image: "/images/capabilities/cc2.png"
      },
      {
        title: "FULL PROJECT DELIVERY",
        description: "End-to-end management from mobilisation to final handover, including subcontractor coordination, programme control and cost oversight.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "COST & VARIATION MANAGEMENT",
        description: "Commercial monitoring of quantities, change orders and financial exposure to maintain clarity and protect project viability.",
        image: "/images/capabilities/cc1.png"
      },
      {
        title: "PROGRAMME OVERSIGHT",
        description: "Scheduling review and progress tracking to safeguard timelines and milestone commitments.",
        image: "/images/capabilities/cc1.png"
      }
    ],
    sectorShowcase: [
      {
        title: "HIGH-END RESIDENTIAL\n VILLAS & COMPOUNDS",
        description: "Delivery of luxury villas and gated communities with a focus on quality, coordination and finishing excellence.",
        image: "/images/sectors/cp11.jfif",
      },
      {
        title: "RESIDENTIAL & \n COMMERCIAL TOWERS",
        description: "Construction of mid- and high-rise developments with strong emphasis on programme control, logistics and safety compliance.",
        image: "/images/sectors/cp12.jpg",
      },
      {
        title: "COMMERCIAL MALLS &\n MIXED-USE DEVELOPMENTS",
        description: "Execution of retail and mixed-use projects requiring coordinated structural, architectural and MEP delivery.",
        image: "/images/sectors/cp13.jpg",
      },
      {
        title: "WAREHOUSES &\n INDUSTRIAL FACILITIES",
        description: "Development of industrial structures incorporating utility integration, fire safety systems and operational infrastructure.",
        image: "/images/sectors/cp14.jpg",
      },
    ],
    showcaseText: "Explore our portfolio of landmark civil and building projects across Bahrain's residential, commercial, and industrial sectors, demonstrating our commitment to quality, safety, and precision.",
    showcaseProjects: [
      {
        title: "J003 FONTANA INFINITY",
        mainImage: "/images/companies/c1.jpg",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "A premier luxury residential development featuring twin towers, exceptional resort-style amenities, and meticulous structural execution."
      },
      {
        title: "J003 FONTANA INFINITY",
        mainImage: "/images/companies/c1.jpg",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "A premier luxury residential development featuring twin towers, exceptional resort-style amenities, and meticulous structural execution."
      },
      {
        title: "J003 FONTANA INFINITY",
        mainImage: "/images/companies/c1.jpg",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "A premier luxury residential development featuring twin towers, exceptional resort-style amenities, and meticulous structural execution."
      },
    ]
  },
  {
    slug: "thc-facilities-management",
    name: "THC FACILITIES MANAGEMENT",
    heroImage: "/images/companies/c2.jpeg",
    introBgImage: "/images/companies/ci2.png",
    introHeading: "PRESERVING\nVALUE",
    introText: "THC Facilities Management helps clients protect, maintain and enhance the value of their assets through integrated facilities management services.\n\nOperating across residential, hospitality, commercial and industrial environments, the company combines technical expertise, preventative maintenance and responsive support to ensure operational continuity and long-term asset performance.",
    definesUs: [
      {
        title: "ASSET PRESERVATION",
        description: "Maintenance programmes are designed to maximise asset lifespan, reliability and operational performance.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "OPERATIONAL CONTINUITY",
        description: "Systems are monitored and maintained to minimise downtime and support uninterrupted operations.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "LIFECYCLE FOCUS",
        description: "Maintenance decisions are guided by long-term asset performance and total cost of ownership.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "TRANSPARENT REPORTING",
        description: "Clients benefit from clear visibility across maintenance activities, compliance requirements and asset performance.",
        bgimage: "/images/companies/ci1.png",
      }
    ],
    capabilities: [
      {
        title: "PREVENTIVE MAINTAINANCE PROGRAMMES",
        description: "Scheduled servicing based on asset condition, manufacturer guidelines and operational requirements to reduce unplanned downtime.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "MEP SERVICING & DIAGNOSTICS",
        description: "Troubleshooting and technical evaluation of mechanical and electrical systems to maintain performance continuity.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "SOFT SERVICES & PROPERTY CARE",
        description: "Cleaning, landscaping and general upkeep delivered with defined service standards and documented quality checks.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "ANNUAL MAINTENANCE CONTRACTS",
        description: "Comprehensive service coverage including scheduled inspections, reporting and performance tracking.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "ASSET REGISTERS & COMPLIANCE DOCUMENTATION",
        description: "Centralised records of equipment, warranties and servicing history to support transparency and regulatory alignment.",
        image: "/images/capabilities/HAWAR.jpg"
      }
    ],
    sectorShowcase: [
      {
        title: "Hospitality",
        description: "Facilities management solutions supporting hotels and serviced residences where uninterrupted operations are essential.",
        image: "/images/sectors/card-4.webp",
      },
      {
        title: "Residential Towers & Compounds",
        description: "Maintenance of HVAC, fire systems, lifts and shared infrastructure to ensure consistent building performance.",
        image: "/images/sectors/card-3.webp",
      },
      {
        title: "Office Buildings",
        description: "Preventive maintenance and system optimisation for corporate environments focused on uptime and efficiency.",
        image: "/images/sectors/card-2.webp",
      },
      {
        title: "Industrial Facilities",
        description: "Technical servicing of operational assets and infrastructure aligned with compliance and productivity requirements.",
        image: "/images/sectors/card-4.webp",
      },
    ],
    showcaseText: "Discover how we maintain and elevate the value of premier properties through our comprehensive and responsive facilities management solutions.",
    showcaseProjects: [
      {
        title: "COMMERCIAL PLAZA OVERSIGHT",
        mainImage: "/images/companies/c2.jpeg",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "Complete lifecycle management and preventative maintenance operations for a 50-story commercial hub."
      }
    ]
  },
  {
    slug: "cinqo-trading",
    name: "CINQO TRADING",
    heroImage: "/images/companies/trading.jpeg",
    introBgImage: "/images/companies/ci4.png",
    introHeading: "STRUCTURED\nDISTRIBUTION",
    introText: "Cinqo Trading serves as the commercial and technical bridge between leading international manufacturers and the GCC market.\nThrough exclusive and authorised partnerships with globally recognised brands, the division supplies paints, construction chemicals, building materials, acoustic systems and infrastructure technologies across Bahrain.\n\nBeyond distribution, Cinqo Trading supports specification development, technical evaluation, project execution and after-sales support, helping clients select and implement solutions with confidence.",
    definesUs: [{
      title: "ASSET PERFORMANCE",
      description: "Maximizing the lifespan and performance of your assets.",
      bgimage: "/images/companies/ci1.png",
    },
    {
      title: "OPERATIONAL EFFICIENCY",
      description: "Optimizing operations to reduce costs and improve service delivery.",
      bgimage: "/images/companies/ci1.png",
    },
    {
      title: "STRATEGIC PARTNERS",
      description: "Working closely with clients to achieve their facility goals.",
      bgimage: "/images/companies/ci1.png",
    }],
    capabilities: [{
      title: "Asset Preservation",
      description: "Maintenance programmes are designed to maximise asset lifespan, reliability and operational performance.",
      image: "/images/capabilities/HAWAR.jpg"
    },
    {
      title: "Operational Continuity",
      description: "Systems are monitored and maintained to minimise downtime and support uninterrupted operations.",
      image: "/images/capabilities/HAWAR.jpg"
    },
    {
      title: "Lifecycle Focus",
      description: "Maintenance decisions are guided by long-term asset performance and total cost of ownership.",
      image: "/images/capabilities/HAWAR.jpg"
    },
    {
      title: "Transparent Reporting",
      description: "Clients benefit from clear visibility across maintenance activities, compliance requirements and asset performance.",
      image: "/images/capabilities/HAWAR.jpg"
    },],
    sectorShowcase: [
      {
        title: "Infrastructure",
        description: "Technical distribution supporting national infrastructure development.",
        image: "/images/sectors/sector-1.webp",
      },
      {
        title: "Construction",
        description: "Paints, chemicals and building materials sourced from authorised global brands.",
        image: "/images/sectors/sector-2.webp",
      },
      {
        title: "Industrial",
        description: "Acoustic systems and specification support for industrial-scale projects.",
        image: "/images/sectors/sector-3.jpg",
      },
    ],
    showcaseText: "A curated look at the high-grade materials and exclusive technologies we have distributed to Bahrain's most significant infrastructural projects.",
    showcaseProjects: [
      {
        title: "BAHRAIN INFRASTRUCTURE SUPPLY",
        mainImage: "/images/companies/h1.jpg",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "Supplied advanced construction chemicals and acoustic systems for a major national infrastructure development."
      }
    ]
  },
  {
    slug: "cinqo-fitout",
    name: "THC FITOUT",
    heroImage: "/images/companies/c3.JPG",
    introBgImage: "/images/companies/ci3.png",
    introHeading: "DELIVERED\nWITH\nPRECISION",
    introText: "THC Fit Out delivers high-quality interior environments where design intent, technical coordination and execution excellence come together.\n\nFrom corporate offices and retail environments to hospitality venues and premium residential interiors, every project is delivered with a focus on quality, programmed control and attention to detail.",
    definesUs: [{
      title: "ASSET PERFORMANCE",
      description: "Maximizing the lifespan and performance of your assets.",
      bgimage: "/images/companies/ci1.png",
    },
    {
      title: "OPERATIONAL EFFICIENCY",
      description: "Optimizing operations to reduce costs and improve service delivery.",
      bgimage: "/images/companies/ci1.png",
    },
    {
      title: "STRATEGIC PARTNERS",
      description: "Working closely with clients to achieve their facility goals.",
      bgimage: "/images/companies/ci1.png",
    }],
    capabilities: [{
      title: "Asset Preservation",
      description: "Maintenance programmes are designed to maximise asset lifespan, reliability and operational performance.",
      image: "/images/capabilities/HAWAR.jpg"
    },
    {
      title: "Operational Continuity",
      description: "Systems are monitored and maintained to minimise downtime and support uninterrupted operations.",
      image: "/images/capabilities/HAWAR.jpg"
    },
    {
      title: "Lifecycle Focus",
      description: "Maintenance decisions are guided by long-term asset performance and total cost of ownership.",
      image: "/images/capabilities/HAWAR.jpg"
    },
    {
      title: "Transparent Reporting",
      description: "Clients benefit from clear visibility across maintenance activities, compliance requirements and asset performance.",
      image: "/images/capabilities/HAWAR.jpg"
    }],
    sectorShowcase: [
      {
        title: "Corporate",
        description: "Office interiors coordinated across design intent, MEP and joinery.",
        image: "/images/sectors/sector-1.webp",
      },
      {
        title: "Hospitality",
        description: "Hospitality venues fitted out with meticulous attention to detail.",
        image: "/images/sectors/sector-2.webp",
      },
      {
        title: "Residential",
        description: "Premium residential interiors delivered under programmed quality control.",
        image: "/images/sectors/sector-3.jpg",
      },
    ],
    showcaseText: "Step inside our completed interior environments, where uncompromising design intent meets precise technical execution.",
    showcaseProjects: [
      {
        title: "CORPORATE HQ MANAMA",
        mainImage: "/images/companies/c3.JPG",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "A turnkey interior fit-out for a multinational headquarters, featuring custom joinery and highly coordinated MEP integration."
      }
    ]
  },
  {
    slug: "cinqo-flooring-coating-technologies",
    name: "CINQO FLOORING & COATING TECHNOLOGIES",
    heroImage: "/images/companies/c5.png",
    introBgImage: "/images/companies/ci5.png",
    introHeading: "ENGINEERED\nFOR\nENDURANCE",
    introText: "Cinqo Flooring & Coating Technologies delivers high-performance flooring, waterproofing and protective coating systems for environments where durability, hygiene and long-term performance are critical.\n\nThe company serves logistics facilities, healthcare and pharmaceutical environments, food production sites, car parks and industrial installations through technically engineered solutions and manufacturer-approved systems.",
    definesUs: [{
      title: "SYSTEM-BASED APPROACH",
      description: "Solutions are specified as complete systems tailored to operational, chemical and mechanical performance requirements.",
      bgimage: "/images/companies/ci1.png",
    },
    {
      title: "PREPARATION INTEGRITY",
      description: "Substrate evaluation, moisture testing and surface preparation form the foundation of long-term system performance.",
      bgimage: "/images/companies/ci1.png",
    },
    {
      title: "APPLICATION CONTROL",
      description: "Environmental conditions, application parameters and quality standards are monitored throughout installation.",
      bgimage: "/images/companies/ci1.png",
    },
    {
      title: "PERFORMANCE DURABILITY",
      description: "Systems are selected to withstand operational demands while maximising service life and reliability.",
      bgimage: "/images/companies/ci1.png",
    },],
    capabilities: [{
      title: "EPOXY & POLYURETHANE SYSTEMS",
      description: "High-performance flooring systems selected for durability, chemical resistance and mechanical load characteristics.",
      image: "/images/capabilities/cc51.jpg"
    },
    {
      title: "PROTECTIVE COATINGS",
      description: "Application of corrosion-resistant and protective systems for industrial structures and infrastructure assets.",
      image: "/images/capabilities/cc52.jpeg"
    },
    {
      title: "WATERPROOFING SYSTEMS",
      description: "Membrane and coating solutions applied to protect structural integrity against water ingress and moisture damage.",
      image: "/images/capabilities/cc53.jpg"
    },
    {
      title: "SURFACE PREPARATION",
      description: "Moisture testing, mechanical profiling and adhesion evaluation to ensure substrate compatibility with the specified system.",
      image: "/images/capabilities/HAWAR.jpg"
    },
    {
      title: "TURNKEY SUPPLY & APPLICATION",
      description: "Integrated delivery covering material sourcing, surface preparation, application and performance verification.",
      image: "/images/capabilities/HAWAR.jpg"
    },
  ],
    sectorShowcase: [
      {
        title: "FOOD &\n BEVERAGE",
        description: "Hygienic flooring systems designed for production, processing and wash-down environments.",
        image: "/images/sectors/cp51.JPG",
      },
      {
        title: "HEALTHCARE &\n PHARMACEUTICAL",
        description: "Seamless flooring solutions suitable for laboratories, cleanrooms and contamination-sensitive facilities.",
        image: "/images/sectors/cp52.jpeg",
      },
      {
        title: "WAREHOUSES &\n LOGISTICS",
        description: "Heavy-duty flooring systems designed for continuous operational traffic and material handling.",
        image: "/images/sectors/cp53.jpg",
      },
      {
        title: "CAR PARKS &\n PODIUMS",
        description: "Protective coating systems engineered for vehicular traffic and environmental exposure.",
        image: "/images/sectors/cp54.jpg",
      },
    ],
    showcaseText: "Review our specialized applications of high-performance flooring and coating systems across challenging industrial and healthcare environments.",
    showcaseProjects: [
      {
        title: "PHARMA LOGISTICS HUB",
        mainImage: "/images/companies/c5.png",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "Installation of ultra-hygienic, chemically resistant flooring solutions designed to withstand rigorous pharmaceutical standards."
      }
    ]
  },
  {
    slug: "cinqo-holding-investments",
    name: "CINQO HOLDING INVESTMENTS",
    heroImage: "/images/companies/c5.png",
    introBgImage: "/images/companies/ci5.png",
    introHeading: "ENGINEERED\nFOR\nENDURANCE",
    introText: "Cinqo Holding evaluates and manages investments aligned with the Group’s long-term vision, operational expertise and governance standards.The portfolio spans real estate, strategic partnerships, technology ventures and growth-oriented businesses where the Group can contribute not only capital, but also commercial discipline, operational insight and strategic direction.",
    definesUs: [{
      title: "INCOME-GENERATING REAL ESTATE",
      description: "Commercial, industrial and residential assets with stable cash flows and long-term value creation potential.",
      bgimage: "/images/companies/ci1.png",
    },
    {
      title: "TECHNOLOGY VENTURES",
      description: "Investments in scalable technology businesses supported by disciplined governance and structured growth strategies.",
      bgimage: "/images/companies/ci1.png",
    },
    {
      title: "EARLY-STAGE BUSINESSES",
      description: "Investments in scalable technology businesses supported by disciplined governance and structured growth strategies.",
      bgimage: "/images/companies/ci1.png",
    },
    {
      title: "INDUSTRIAL PARTNERSHIPS & DISTRIBUTION RIGHTS",
      description: "Strategic investments in industries focused on innovation and value addition.",
      bgimage: "/images/companies/ci1.png",
    }
  ],
    capabilities: [],
    sectorShowcase: [
      
    ],
    showcaseText: "",
    showcaseProjects: [
    ]
  }
];

// ─── Brand Portfolio ────────────────────────────────────────────────────────────

export interface BrandPortfolioItem {
  name: string;
  logo: string;
  title: string;
  description: string;
  layout: "grid" | "wide";
}

export interface BrandPortfolioCategory {
  category: string;
  items: BrandPortfolioItem[];
}

export const brandPortfolio: BrandPortfolioCategory[] = [
  {
    category: "PAINTS & SPECIALIZED COATINGS",
    items: [
      {
        name: "Dulux",
        logo: "/workedwith/logo-1.png",
        title: "Decorative Paints",
        description:
          "Premium decorative paints and coatings for residential and commercial interiors, providing lasting beauty and protection.",
        layout: "grid",
      },
      {
        name: "Crayco",
        logo: "/workedwith/logo-2.png",
        title: "Floor Coatings & Pavement Preservation",
        description:
          "High-performance floor coatings and pavement preservation solutions for industrial, commercial, and infrastructure applications.",
        layout: "wide",
      },
      {
        name: "Sikkens",
        logo: "/workedwith/logo-3.png",
        title: "Wood Coatings",
        description:
          "Professional wood coating systems that deliver exceptional durability, color retention, and protection against the elements.",
        layout: "grid",
      },
      {
        name: "Spay",
        logo: "/workedwith/logo-4.png",
        title: "Wood Coatings",
        description:
          "Specialized wood coating solutions designed for demanding environments with superior finish and long-lasting performance.",
        layout: "wide",
      },
    ],
  },
  {
    category: "BUILDING MATERIALS",
    items: [
      {
        name: "Gyproc Saint-Gobain",
        logo: "/workedwith/logo-5.png",
        title: "Interior & Exterior Construction Systems",
        description:
          "Innovative drywall, plasterboard, and ceiling systems for complete interior and exterior building solutions.",
        layout: "grid",
      },
      {
        name: "Ecophon Saint-Gobain",
        logo: "/workedwith/logo-6.png",
        title: "Acoustic Ceiling Systems",
        description:
          "High-performance acoustic ceiling solutions that enhance sound quality, comfort, and aesthetics in any space.",
        layout: "wide",
      },
    ],
  },
  {
    category: "CONSTRUCTION CHEMICALS",
    items: [
      {
        name: "Sika",
        logo: "/workedwith/logo-7.png",
        title: "Construction Chemicals",
        description:
          "World-leading construction chemical solutions for sealing, bonding, reinforcing, and protecting structures.",
        layout: "grid",
      },
      {
        name: "Master Builders Solutions",
        logo: "/workedwith/logo-8.png",
        title: "Construction Chemicals",
        description:
          "Advanced admixtures, concrete treatments, and chemical solutions that enhance construction performance and durability.",
        layout: "wide",
      },
      {
        name: "Apple Chemie",
        logo: "/workedwith/logo-1.png",
        title: "Construction Chemicals",
        description:
          "Specialty chemical products for construction, including waterproofing, surface treatments, and protective coatings.",
        layout: "grid",
      },
    ],
  },
  {
    category: "INFRASTRUCTURE",
    items: [
      {
        name: "Flovac",
        logo: "/workedwith/logo-2.png",
        title: "Vacuum Sewerage Systems",
        description:
          "Innovative vacuum sewerage technology for efficient, reliable, and cost-effective wastewater collection in challenging terrains.",
        layout: "wide",
      },
    ],
  },
];

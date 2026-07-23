export interface DefineUsItem {
  title: string;
  description: string;
  bgimage: string;
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
  title: string; // e.g., "J003 FONTANA INFINITY" (Left list & Top-left on hover)
  mainImage: string; // The default right-side image (e.g., the building with the pool)
  hoverThumbnails: string[]; // Array of the 5 smaller images shown in the middle on hover
  hoverDescription: string; // The descriptive text shown at the bottom on hover
}

export interface BusinessData {
  slug: string;
  name: string;
  heroImage: string;
  heroImagePosition?: string;
  introBgImage: string;
  /** Optional looping background video for the intro section (falls back to introBgImage when omitted). */
  introBgVideo?: string;
  introHeading?: string;
  introText: string;
  definesUs: DefineUsItem[];
  capabilities: CapabilityItem[];
  sectorShowcase: SectorShowcaseItem[];

  // --- Integrated Showcase Section Data ---
  showcaseText: string; // The static upper paragraph on the left
  showcaseProjects: ShowcaseProject[]; // The list of projects containing data for both states
}

export const businesses: BusinessData[] = [
  {
    slug: "cinqo-holding-investments",
    name: "CINQO HOLDING INVESTMENTS",
    heroImage: "/images/companies/c6.jpg",
    introBgImage: "/images/companies/ci5.png",
    introBgVideo: "/images/companies/Intro-6.mp4",
    introHeading: "Governance.\nAlignment.\nLong-Term Value.",
    introText:
      "Cinqo Holding evaluates and manages investments aligned with the Group’s long-term vision, operational expertise and governance standards.The portfolio spans real estate, strategic partnerships, technology ventures and growth-oriented businesses where the Group can contribute not only capital, but also commercial discipline, operational insight and strategic direction.",
    definesUs: [
      {
        title: "INCOME-GENERATING REAL ESTATE",
        description:
          "Commercial, industrial and residential assets with stable cash flows and long-term value creation potential.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "TECHNOLOGY VENTURES",
        description:
          "Investments in scalable technology businesses supported by disciplined governance and structured growth strategies.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "EARLY-STAGE BUSINESSES",
        description:
          "Selective investments in emerging ventures with strong leadership, sound fundamentals and sustainable growth potential.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "INDUSTRIAL PARTNERSHIPS & DISTRIBUTION RIGHTS",
        description:
          "Strategic investments in industries focused on innovation and value addition.",
        bgimage: "/images/companies/ci1.png",
      },
    ],
    capabilities: [],
    sectorShowcase: [],
    showcaseText: "",
    showcaseProjects: [],
  },
  {
    slug: "cinqo-contracting",
    name: "CINQO CONTRACTING",
    heroImage: "/images/companies/contractingBg.jpeg",
    heroImagePosition: "50% 85%",
    introBgImage: "/images/companies/ci1.png",
    introBgVideo: "/images/companies/Intro-1.mp4",
    introHeading: "BUILT ON\nCOMMITMENT",
    introText:
      "Cinqo Contracting is the Group's flagship construction company, delivering civil and building projects across Bahrain's residential, commercial and industrial sectors.\n\nFor nearly two decades, the company has delivered luxury villas, residential developments, commercial facilities, warehouses and industrial assets. Through execution focused planning, experienced project leadership and rigorous commercial control, Cinqo Contracting provides confidence from mobilisation through final handover.",
    definesUs: [
      {
        title: "Executive Oversight",
        description:
          "Projects operate with direct leadership visibility, ensuring accountability, timely decision-making and effective risk management throughout delivery.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "Quality & Compliance",
        description:
          "Materials, workmanship and safety standards are maintained through inspections, testing and compliance monitoring throughout execution.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "Programme Control",
        description:
          "Scheduling and sequencing are actively monitored across all project phases, supported by ERP-enabled tracking and reporting.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "Commercial Discipline",
        description:
          "Cost exposure, variations and financial commitments are managed through structured controls and documented approval processes.",
        bgimage: "/images/companies/ci1.png",
      },
    ],
    capabilities: [
      {
        title: "CIVIL & STRUCTURAL CONSTRUCTION",
        description:
          "Execution of foundations, superstructure and core civil works with close supervision, quantity control and quality monitoring.",
        image: "/images/capabilities/cc1.png",
      },
      {
        title: "MEP COORDINATION",
        description:
          "Alignment of mechanical, electrical and plumbing systems within structural and architectural frameworks to reduce clashes and protect long-term serviceability.",
        image: "/images/capabilities/cc2.png",
      },
      {
        title: "FULL PROJECT DELIVERY",
        description:
          "End-to-end management from mobilisation to final handover, including subcontractor coordination, programme control and cost oversight.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "COST & VARIATION MANAGEMENT",
        description:
          "Commercial monitoring of quantities, change orders and financial exposure to maintain clarity and protect project viability.",
        image: "/images/capabilities/cc1.png",
      },
      {
        title: "PROGRAMME OVERSIGHT",
        description:
          "Scheduling review and progress tracking to safeguard timelines and milestone commitments.",
        image: "/images/capabilities/cc1.png",
      },
    ],
    sectorShowcase: [
      {
        title: "HIGH-END RESIDENTIAL\n VILLAS & COMPOUNDS",
        description:
          "Delivery of luxury villas and gated communities with a focus on quality, coordination and finishing excellence.",
        image: "/images/sectors/cp11.jfif",
      },
      {
        title: "RESIDENTIAL & \n COMMERCIAL TOWERS",
        description:
          "Construction of mid- and high-rise developments with strong emphasis on programme control, logistics and safety compliance.",
        image: "/images/sectors/cp12.jpg",
      },
      {
        title: "COMMERCIAL MALLS &\n MIXED-USE DEVELOPMENTS",
        description:
          "Execution of retail and mixed-use projects requiring coordinated structural, architectural and MEP delivery.",
        image: "/images/sectors/cp13.jpg",
      },
      {
        title: "WAREHOUSES &\n INDUSTRIAL FACILITIES",
        description:
          "Development of industrial structures incorporating utility integration, fire safety systems and operational infrastructure.",
        image: "/images/sectors/cp14.jpg",
      },
    ],
    showcaseText: "Projects Highlights",
    showcaseProjects: [
      {
        title: "STORY BUILDING JANABAYA",
        mainImage:
          "/images/Businesses/CinqoContracting/Projects/janabayaBg.jpg",
        hoverThumbnails: [
          "/images/Businesses/CinqoContracting/Projects/janabaya1.jpg",
          "/images/Businesses/CinqoContracting/Projects/janabaya2.jpg",
          "/images/Businesses/CinqoContracting/Projects/janabaya3.jpg",
          "/images/Businesses/CinqoContracting/Projects/janabaya4.jpg",
        ],
        hoverDescription:
          "A premier luxury residential development featuring twin towers, exceptional resort-style amenities, and meticulous structural execution.",
      },
      {
        title: "NATIONAL TRANSPORT RIFFA",
        mainImage: "/images/Businesses/CinqoContracting/Projects/riffaBg.jpeg",
        hoverThumbnails: [
          "/images/Businesses/CinqoContracting/Projects/riffaTransport1.jpg",
          "/images/Businesses/CinqoContracting/Projects/riffaTransport2.jpg",
          "/images/Businesses/CinqoContracting/Projects/riffaTransport3.jpeg",
          "/images/Businesses/CinqoContracting/Projects/riffaTransport4.jpeg",
        ],
        hoverDescription:
          "A premier luxury residential development featuring twin towers, exceptional resort-style amenities, and meticulous structural execution.",
      },
      {
        title: "AVS VILLA",
        mainImage: "/images/Businesses/CinqoContracting/Projects/villaBg.png",
        hoverThumbnails: [
          "/images/Businesses/CinqoContracting/Projects/villa1.jpeg",
          "/images/Businesses/CinqoContracting/Projects/villa2.jpg",
          "/images/Businesses/CinqoContracting/Projects/villa3.jpg",
          "/images/Businesses/CinqoContracting/Projects/villa4.jpeg",
        ],
        hoverDescription:
          "A premier luxury residential development featuring twin towers, exceptional resort-style amenities, and meticulous structural execution.",
      },
    ],
  },
  {
    slug: "cinqo-flooring-coating-technologies",
    name: "CINQO FLOORING & COATING TECHNOLOGIES",
    heroImage: "/images/companies/c5.png",
    introBgImage: "/images/companies/ci5.png",
    introBgVideo: "/images/companies/Intro-5.mp4",
    introHeading: "ENGINEERED\nFOR\nENDURANCE",
    introText:
      "Cinqo Flooring & Coating Technologies delivers high-performance flooring, waterproofing and protective coating systems for environments where durability, hygiene and long-term performance are critical.\n\nThe company serves logistics facilities, healthcare and pharmaceutical environments, food production sites, car parks and industrial installations through technically engineered solutions and manufacturer-approved systems.",
    definesUs: [
      {
        title: "SYSTEM-BASED APPROACH",
        description:
          "Solutions are specified as complete systems tailored to operational, chemical and mechanical performance requirements.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "PREPARATION INTEGRITY",
        description:
          "Substrate evaluation, moisture testing and surface preparation form the foundation of long-term system performance.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "APPLICATION CONTROL",
        description:
          "Environmental conditions, application parameters and quality standards are monitored throughout installation.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "PERFORMANCE DURABILITY",
        description:
          "Systems are selected to withstand operational demands while maximising service life and reliability.",
        bgimage: "/images/companies/ci1.png",
      },
    ],
    capabilities: [
      {
        title: "EPOXY & POLYURETHANE SYSTEMS",
        description:
          "High-performance flooring systems selected for durability, chemical resistance and mechanical load characteristics.",
        image: "/images/capabilities/cc51.jpg",
      },
      {
        title: "PROTECTIVE COATINGS",
        description:
          "Application of corrosion-resistant and protective systems for industrial structures and infrastructure assets.",
        image: "/images/capabilities/cc52.jpeg",
      },
      {
        title: "WATERPROOFING SYSTEMS",
        description:
          "Membrane and coating solutions applied to protect structural integrity against water ingress and moisture damage.",
        image: "/images/capabilities/cc53.jpg",
      },
      {
        title: "SURFACE PREPARATION",
        description:
          "Moisture testing, mechanical profiling and adhesion evaluation to ensure substrate compatibility with the specified system.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "TURNKEY SUPPLY & APPLICATION",
        description:
          "Integrated delivery covering material sourcing, surface preparation, application and performance verification.",
        image: "/images/capabilities/HAWAR.jpg",
      },
    ],
    sectorShowcase: [
      {
        title: "FOOD &\n BEVERAGE",
        description:
          "Hygienic flooring systems designed for production, processing and wash-down environments.",
        image: "/images/sectors/cp51.JPG",
      },
      {
        title: "HEALTHCARE &\n PHARMACEUTICAL",
        description:
          "Seamless flooring solutions suitable for laboratories, cleanrooms and contamination-sensitive facilities.",
        image: "/images/sectors/cp52.jpeg",
      },
      {
        title: "WAREHOUSES &\n LOGISTICS",
        description:
          "Heavy-duty flooring systems designed for continuous operational traffic and material handling.",
        image: "/images/sectors/cp53.jpg",
      },
      {
        title: "CAR PARKS &\n PODIUMS",
        description:
          "Protective coating systems engineered for vehicular traffic and environmental exposure.",
        image: "/images/sectors/cp54.jpg",
      },
    ],
    showcaseText: "Projects Highlights",
    showcaseProjects: [
      {
        title: "PHARMA LOGISTICS HUB",
        mainImage: "/images/companies/c5.png",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg",
        ],
        hoverDescription:
          "Installation of ultra-hygienic, chemically resistant flooring solutions designed to withstand rigorous pharmaceutical standards.",
      },
      {
        title: "BIA CAR PARK",
        mainImage: "/images/Businesses/CinqoCoating/Projects/one/main.jpg",
        hoverThumbnails: [
          "/images/Businesses/CinqoCoating/Projects/one/hover-1.jpg",
          "/images/Businesses/CinqoCoating/Projects/one/hover-2.jpg",
          "/images/Businesses/CinqoCoating/Projects/one/hover-3.jpg",
          "/images/Businesses/CinqoCoating/Projects/one/hover-4.jpg",
          "/images/Businesses/CinqoCoating/Projects/one/hover-5.jpg",
        ],
        hoverDescription: "Placeholder description for BIA CAR PARK project.",
      },
      {
        title: "HAWAR BOARDWALK & VILLAS",
        mainImage: "/images/Businesses/CinqoCoating/Projects/two/main.jpg",
        hoverThumbnails: [
          "/images/Businesses/CinqoCoating/Projects/two/hover-1.jpg",
          "/images/Businesses/CinqoCoating/Projects/two/hover-2.jpg",
          "/images/Businesses/CinqoCoating/Projects/two/hover-3.jpg",
          "/images/Businesses/CinqoCoating/Projects/two/hover-4.jpg",
          "/images/Businesses/CinqoCoating/Projects/two/hover-5.jpg",
        ],
        hoverDescription:
          "Placeholder description for HAWAR BOARDWALK & VILLAS project.",
      },
      {
        title: "JUFFAIR SQUARE",
        mainImage: "/images/Businesses/CinqoCoating/Projects/three/main.jpg",
        hoverThumbnails: [
          "/images/Businesses/CinqoCoating/Projects/three/hover-1.jpg",
          "/images/Businesses/CinqoCoating/Projects/three/hover-2.jpg",
          "/images/Businesses/CinqoCoating/Projects/three/hover-3.jpg",
          "/images/Businesses/CinqoCoating/Projects/three/hover-4.jpg",
          "/images/Businesses/CinqoCoating/Projects/three/hover-5.jpg",
        ],
        hoverDescription: "Placeholder description for JUFFAIR SQUARE project.",
      },
      {
        title: "FONTANA INFINITY",
        mainImage: "/images/Businesses/CinqoCoating/Projects/four/main.jpg",
        hoverThumbnails: [
          "/images/Businesses/CinqoCoating/Projects/four/hover-1.jpg",
          "/images/Businesses/CinqoCoating/Projects/four/hover-2.jpg",
          "/images/Businesses/CinqoCoating/Projects/four/hover-3.jpg",
          "/images/Businesses/CinqoCoating/Projects/four/hover-4.jpg",
          "/images/Businesses/CinqoCoating/Projects/four/hover-5.jpg",
        ],
        hoverDescription:
          "Placeholder description for FONTANA INFINITY project.",
      },
    ],
  },
  {
    slug: "cinqo-trading",
    name: "CINQO TRADING",
    heroImage: "/images/companies/trading.jpeg",
    introBgImage: "/images/companies/ci4.png",
    introBgVideo: "/images/companies/Intro-4.mp4",
    introHeading: "STRUCTURED\nDISTRIBUTION",
    introText:
      "Cinqo Trading serves as the commercial and technical bridge between leading international manufacturers and the GCC market.\nThrough exclusive and authorised partnerships with globally recognised brands, the division supplies paints, construction chemicals, building materials, acoustic systems and infrastructure technologies across Bahrain.\n\nBeyond distribution, Cinqo Trading supports specification development, technical evaluation, project execution and after-sales support, helping clients select and implement solutions with confidence.\n\nPrincipal relationships are governed by formal distribution agreements and managed with the commercial discipline, market knowledge and technical expertise expected by leading international manufacturers.",
    definesUs: [
      {
        title: "PRINCIPAL ALIGNMENT",
        description:
          "Manufacturer relationships are built on long-term partnerships, commercial integrity and consistent market representation.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "TECHNICAL DISTRIBUTION",
        description:
          "Specification guidance, application support and technical advisory services form an integral part of the distribution model.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "INVENTORY & LOGISTICS",
        description:
          "ERP-managed inventory, batch traceability and real-time stock visibility support reliable supply across retail and project channels.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "AFTER-SALES SUPPORT",
        description:
          "Technical support, warranty coordination and field assistance continue beyond delivery to support long-term product performance.",
        bgimage: "/images/companies/ci1.png",
      },
    ],
    capabilities: [
      {
        title: "TECHNICAL ADVISORY",
        description:
          "System selection, specification review and application guidance across all represented brands.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "SYSTEM DESIGN SUPPORT",
        description:
          "Recommendations aligned with environmental conditions, performance requirements and project objectives.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "WAREHOUSING & LOGISTICS",
        description:
          "ERP-managed inventory, batch traceability and scheduled distribution services.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "AFTER-SALES & FIELD SUPPORT",
        description:
          "Technical troubleshooting, warranty coordination and post-installation support.",
        image: "/images/capabilities/HAWAR.jpg",
      },
    ],
    sectorShowcase: [
      {
        title: "CONSTRUCTION & CONTRACTING",
        description:
          "Supply of coatings, construction chemicals and engineered systems supported by specification and application advisory services.",
        image: "/images/sectors/sector-1.webp",
      },
      {
        title: "RETAIL DISTRIBUTION",
        description:
          "Structured supply to retail channels supported by inventory management, pricing governance and brand development.",
        image: "/images/sectors/sector-2.webp",
      },
      {
        title: "INDUSTRIAL & MANUFACTURING",
        description:
          "Technical products and systems supporting operational efficiency, asset protection and facility performance.",
        image: "/images/sectors/sector-3.jpg",
      },
      {
        title: "INFRASTRUCTURE & \n UTILITIES",
        description:
          "Specialised technologies and engineering solutions supporting municipal and large-scale infrastructure projects.",
        image: "/images/sectors/sector-1.webp",
      },
    ],
    showcaseText: "",
    showcaseProjects: [],
  },
  {
    slug: "thc-facilities-management",
    name: "THC FACILITIES MANAGEMENT",
    heroImage: "/images/companies/c2.jpeg",
    introBgImage: "/images/companies/ci2.png",
    introBgVideo: "/images/companies/Intro-2.mp4",
    introHeading: "PRESERVING\nVALUE",
    introText:
      "THC Facilities Management helps clients protect, maintain and enhance the value of their assets through integrated facilities management services.\n\nOperating across residential, hospitality, commercial and industrial environments, the company combines technical expertise, preventative maintenance and responsive support to ensure operational continuity and long-term asset performance.",
    definesUs: [
      {
        title: "ASSET PRESERVATION",
        description:
          "Maintenance programmes are designed to maximise asset lifespan, reliability and operational performance.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "OPERATIONAL CONTINUITY",
        description:
          "Systems are monitored and maintained to minimise downtime and support uninterrupted operations.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "LIFECYCLE FOCUS",
        description:
          "Maintenance decisions are guided by long-term asset performance and total cost of ownership.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "TRANSPARENT REPORTING",
        description:
          "Clients benefit from clear visibility across maintenance activities, compliance requirements and asset performance.",
        bgimage: "/images/companies/ci1.png",
      },
    ],
    capabilities: [
      {
        title: "PREVENTIVE MAINTAINANCE PROGRAMMES",
        description:
          "Scheduled servicing based on asset condition, manufacturer guidelines and operational requirements to reduce unplanned downtime.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "MEP SERVICING & DIAGNOSTICS",
        description:
          "Troubleshooting and technical evaluation of mechanical and electrical systems to maintain performance continuity.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "SOFT SERVICES & PROPERTY CARE",
        description:
          "Cleaning, landscaping and general upkeep delivered with defined service standards and documented quality checks.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "ANNUAL MAINTENANCE CONTRACTS",
        description:
          "Comprehensive service coverage including scheduled inspections, reporting and performance tracking.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "ASSET REGISTERS & COMPLIANCE DOCUMENTATION",
        description:
          "Centralised records of equipment, warranties and servicing history to support transparency and regulatory alignment.",
        image: "/images/capabilities/HAWAR.jpg",
      },
    ],
    sectorShowcase: [
      {
        title: "Hospitality",
        description:
          "Facilities management solutions supporting hotels and serviced residences where uninterrupted operations are essential.",
        image: "/images/sectors/card-4.webp",
      },
      {
        title: "Residential Towers & Compounds",
        description:
          "Maintenance of HVAC, fire systems, lifts and shared infrastructure to ensure consistent building performance.",
        image: "/images/sectors/card-3.webp",
      },
      {
        title: "Office Buildings",
        description:
          "Preventive maintenance and system optimisation for corporate environments focused on uptime and efficiency.",
        image: "/images/sectors/card-2.webp",
      },
      {
        title: "Industrial Facilities",
        description:
          "Technical servicing of operational assets and infrastructure aligned with compliance and productivity requirements.",
        image: "/images/sectors/card-4.webp",
      },
    ],
    showcaseText: "Projects Highlights",
    showcaseProjects: [
      {
        title: "COMMERCIAL PLAZA OVERSIGHT",
        mainImage: "/images/companies/c2.jpeg",
        hoverThumbnails: [
          "/images/Businesses/CinqoFM/Projects/image00001.jpeg",
          "/images/Businesses/CinqoFM/Projects/image00002.jpeg",
          "/images/Businesses/CinqoFM/Projects/image00003.jpeg",
          "/images/Businesses/CinqoFM/Projects/image00004.jpeg",
          "/images/Businesses/CinqoFM/Projects/image00005.jpeg",
        ],
        hoverDescription:
          "Complete lifecycle management and preventative maintenance operations for a 50-story commercial hub.",
      },
      {
        title: "Project 2",
        mainImage: "/images/companies/c2.jpeg",
        hoverThumbnails: [
          "/images/Businesses/CinqoFM/Projects/image00016.jpeg",
          "/images/Businesses/CinqoFM/Projects/image00017.jpeg",
          "/images/Businesses/CinqoFM/Projects/image00018.jpeg",
          "/images/Businesses/CinqoFM/Projects/image00019.jpeg",
          "/images/Businesses/CinqoFM/Projects/image00020.jpeg",
        ],
        hoverDescription: "TBD",
      },
      {
        title: "Project 3",
        mainImage: "/images/companies/c2.jpeg",
        hoverThumbnails: [
          "/images/Businesses/CinqoFM/Projects/image00024.jpeg",
          "/images/Businesses/CinqoFM/Projects/image00025.jpeg",
          "/images/Businesses/CinqoFM/Projects/image00026.jpeg",
          "/images/Businesses/CinqoFM/Projects/image00027.jpeg",
          "/images/Businesses/CinqoFM/Projects/image00028.jpeg",
        ],
        hoverDescription: "TBD",
      },
    ],
  },

  {
    slug: "cinqo-fitout",
    name: "THC FITOUT",
    heroImage: "/images/companies/c3.JPG",
    introBgImage: "/images/companies/ci3.png",
    introBgVideo: "/images/companies/Intro-3.mp4",
    introHeading: "DELIVERED\nWITH\nPRECISION",
    introText:
      "THC Fit Out delivers high-quality interior environments where design intent, technical coordination and execution excellence come together.\n\nFrom corporate offices and retail environments to hospitality venues and premium residential interiors, every project is delivered with a focus on quality, programmed control and attention to detail.",
    definesUs: [
      {
        title: "DESIGN INTEGRITY",
        description:
          "Projects are executed in accordance with approved designs while maintaining alignment with architectural intent.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "CONTROLLED EXECUTION",
        description:
          "Trade coordination, sequencing and finish management are carefully supervised throughout delivery.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "MATERIAL OVERSIGHT",
        description:
          "Specifications and finishes are monitored through structured reviews and on-site quality control.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "DETAIL ORIENTATION",
        description:
          "Precision in finishing, alignment and coordination defines the quality of the final outcome.",
        bgimage: "/images/companies/ci1.png",
      },
    ],
    capabilities: [
      {
        title: "Interior Fit-Out & Finishing",
        description:
          "Execution of partitions, ceilings, flooring and finishing systems with controlled supervision and quality documentation.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "Joinery & Custom Fabrication",
        description:
          "Manufacture and installation of bespoke elements aligned with approved shop drawings and material specifications.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "MEP Integration",
        description:
          "Coordination of lighting, HVAC and service infrastructure within interior works to ensure performance and accessibility.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "Design Coordination",
        description:
          "Technical alignment of architectural drawings prior to execution to minimise rework and interface conflicts.",
        image: "/images/capabilities/HAWAR.jpg",
      },
      {
        title: "Commercial & Variation Management",
        description:
          "Monitoring of scope adjustments and financial implications throughout delivery.",
        image: "/images/capabilities/HAWAR.jpg",
      },
    ],
    sectorShowcase: [
      {
        title: "Corporate Offices",
        description:
          "Interior construction aligned with functionality, acoustic performance and service integration.",
        image: "/images/sectors/sector-1.webp",
      },
      {
        title: "Retail & F&B",
        description:
          "Fast-track fit-out delivery focused on brand requirements and operational readiness.",
        image: "/images/sectors/sector-2.webp",
      },
      {
        title: "Residential Interiors",
        description:
          "Premium villa and apartment interiors delivered with attention to detail and material quality.",
        image: "/images/sectors/sector-3.jpg",
      },
      {
        title: "Healthcare & Clinics",
        description:
          "Fit-outs incorporating hygienic materials and coordinated building services.",
        image: "/images/sectors/sector-1.webp",
      },
    ],
    showcaseText: "Projects Highlights",
    showcaseProjects: [
      {
        title: "Rolls Royce",
        mainImage: "/images/companies/c3.JPG",
        hoverThumbnails: [
          "/images/Businesses/CinqoFitout/Projects/IMG_2212.JPG",
          "/images/Businesses/CinqoFitout/Projects/IMG_2111.JPG",
          "/images/Businesses/CinqoFitout/Projects/IMG_2108.JPG",
          "/images/Businesses/CinqoFitout/Projects/IMG_2172.JPG",
          "/images/Businesses/CinqoFitout/Projects/IMG_2112.JPG",
        ],
        hoverDescription: "TBD",
      },
      {
        title: "Maserati",
        mainImage: "/images/Businesses/CinqoFitout/Projects/maz-main.jpeg",
        hoverThumbnails: [
          "/images/Businesses/CinqoFitout/Projects/hover-1.jpeg",
          "/images/Businesses/CinqoFitout/Projects/hover-2.jpeg",
          "/images/Businesses/CinqoFitout/Projects/hover-3.jpeg",
          "/images/Businesses/CinqoFitout/Projects/hover-4.jpeg",
          "/images/Businesses/CinqoFitout/Projects/hover-5.jpeg",
        ],
        hoverDescription: "TBD",
      },
      {
        title: "BINNA FITOUT",
        mainImage: "/images/Businesses/CinqoFitout/Projects/bino-main.JPG",
        hoverThumbnails: [
          "/images/Businesses/CinqoFitout/Projects/IMG_4304.JPG",
          "/images/Businesses/CinqoFitout/Projects/IMG_4320.JPG",
          "/images/Businesses/CinqoFitout/Projects/IMG_4328.JPG",
          "/images/Businesses/CinqoFitout/Projects/IMG_4575.JPG",
          "/images/Businesses/CinqoFitout/Projects/IMG_4581.JPG",
        ],
        hoverDescription: "TBD",
      },
    ],
  },
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
        logo: "/workedwith/dulux.jpg",
        title: "Decorative Paints",
        description:
          "One of the world's leading decorative paint brands, offering interior and exterior coatings, Weathershield systems, primers and specialty finishes. Exclusive distributor in Bahrain.",
        layout: "grid",
      },
      {
        name: "Crafco",
        logo: "/workedwith/logo-7.png",
        title: "Floor Coatings & Pavement Preservation",
        description:
          "Specialised flooring, pavement preservation and sealant solutions for infrastructure, industrial and commercial applications. Exclusive distributor in Bahrain.",
        layout: "wide",
      },
      {
        name: "Sikkens",
        logo: "/workedwith/logo-8.png",
        title: "Wood Coatings",
        description:
          "Premium wood protection and finishing systems designed to enhance durability, appearance and long-term performance across interior and exterior applications.",
        layout: "grid",
      },
      {
        name: "Sivam",
        logo: "/workedwith/logo-2.png",
        title: "Wood Coatings",
        description:
          "High-performance wood finishing systems including stains, primers, sealers and topcoats for furniture, joinery and interior wood applications.",
        layout: "wide",
      },
    ],
  },
  {
    category: "BUILDING MATERIALS",
    items: [
      {
        name: "Gyproc Saint-Gobain",
        logo: "/workedwith/logo-4.png",
        title: "Interior & Exterior Construction Systems",
        description:
          "Global leader in gypsum-based partition, ceiling and cladding solutions, delivering efficient and sustainable construction systems. Exclusive distributor in Bahrain.",
        layout: "grid",
      },
      {
        name: "Ecophon Saint-Gobain",
        logo: "/workedwith/logo-6.png",
        title: "Acoustic Ceiling Systems",
        description:
          "Advanced acoustic ceiling and wall solutions designed to improve comfort, wellbeing and building performance across commercial and institutional environments.",
        layout: "wide",
      },
    ],
  },
  {
    category: "CONSTRUCTION CHEMICALS",
    items: [
      {
        name: "Sika",
        logo: "/workedwith/logo-3.png",
        title: "Construction Chemicals",
        description:
          "Global leader in waterproofing, concrete admixtures, sealants, adhesives and structural solutions for construction and infrastructure projects.",
        layout: "grid",
      },
      {
        name: "BASF Master Builders Solutions",
        logo: "/workedwith/logo-1.png",
        title: "Construction Chemicals",
        description:
          "Innovative construction chemical technologies including admixtures, repair mortars, grouts and protective systems engineered for long-term durability.",
        layout: "wide",
      },
      {
        name: "Apple Chemie",
        logo: "/workedwith/logo-5.png",
        title: "Construction Chemicals",
        description:
          "Specialist manufacturer of tile adhesives, waterproofing systems, grouts and construction solutions developed for demanding Gulf environments.",
        layout: "grid",
      },
    ],
  },
  {
    category: "INFRASTRUCTURE",
    items: [
      {
        name: "Flovac",
        logo: "/workedwith/flavoc.png",
        title: "Vacuum Sewerage Systems",
        description:
          "Leading provider of vacuum sewerage technology for municipalities and large-scale developments, delivering efficient and sustainable wastewater solutions.",
        layout: "wide",
      },
    ],
  },
];

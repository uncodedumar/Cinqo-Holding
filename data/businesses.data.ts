export interface DefineUsItem {
  title: string;
  description: string;
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

export interface BusinessData {
  slug: string;
  name: string;
  heroImage: string;
  introBgImage: string;
  introHeading?: string;
  introText: string;
  definesUs: DefineUsItem[];
  capabilities: CapabilityItem[];
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

export const businesses: BusinessData[] = [
  {
    slug: "cinqo-contracting",
    name: "CINQO CONTRACTING",
    heroImage: "/images/companies/c1.jpg",
        introBgImage: "/images/companies/ci1.png",
    introHeading: "BUILT ON\nCOMMITMENT",    introText: "Cinqo Contracting is the Group's flagship construction company, delivering civil and building projects across Bahrain's residential, commercial and industrial sectors.\n\nFor nearly two decades, the company has delivered luxury villas, residential developments, commercial facilities, warehouses and industrial assets. Through execution focused planning, experienced project leadership and rigorous commercial control, Cinqo Contracting provides confidence from mobilisation through final handover.",
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
    sectorShowcase: [
      {
        title: "HIGH-END RESIDENTIAL VILLAS & COMPOUNDS",
        description: "Delivery of luxury villas and gated communities with a focus on quality, coordination and finishing excellence.",
        image: "/images/sectors/card-1_contract.webp"
      },
      {
        title: "RESIDENTIAL & COMMERCIAL TOWERS",
        description: "Construction of mid- and high-rise developments with strong emphasis on programme control, logistics and safety compliance.",
        image: "/images/sectors/card-2.webp"
      },
      {
        title: "COMMERCIAL MALLS & MIXED-USE DEVELOPMENTS",
        description: "Construction of mid- and high-rise developments with strong emphasis on programme control, logistics and safety compliance.",
        image: "/images/sectors/card-3.webp"
      },
      {
        title: "WAREHOUSES & INDUSTRIAL FACILITIES",
        description: "Development of industrial structures incorporating utility integration, fire safety systems and operational infrastructure.",
        image: "/images/sectors/card-4.webp"
      }
    ],
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
      },
    ],
    sectorShowcase: [
      {
        title: "HOSPITALITY",
        description: "Facilities management solutions supporting hotels and serviced residences where uninterrupted operations are essential.",
        image: "/images/sectors/card-1.webp"
      },
      {
        title: "RESIDENTIAL TOWERS & COMPOUNDS",
        description: "Maintenance of HVAC, fire systems, lifts and shared infrastructure to ensure consistent building performance.",
        image: "/images/sectors/card-2.webp"
      },
      {
        title: "OFFICE BUILDINGS",
        description: "Preventive maintenance and system optimisation for corporate environments focused on uptime and efficiency.",
        image: "/images/sectors/card-3.webp"
      },
      {
        title: "INDUSTRIAL FACILITIES",
        description: "Technical servicing of operational assets and infrastructure aligned with compliance and productivity requirements.",
        image: "/images/sectors/card-4.webp"
      }
    ],
  },
  {
    slug: "cinqo-trading",
    name: "CINQO TRADING",
    heroImage: "/images/companies/h1.jpg",
    introBgImage: "/images/companies/ci4.png",
    introHeading: "STRUCTURED\nDISTRIBUTION",
    introText: "Cinqo Trading serves as the commercial and technical bridge between leading international manufacturers and the GCC market.\nThrough exclusive and authorised partnerships with globally recognised brands, the division supplies paints, construction chemicals, building materials, acoustic systems and infrastructure technologies across Bahrain.\n\nBeyond distribution, Cinqo Trading supports specification development, technical evaluation, project execution and after-sales support, helping clients select and implement solutions with confidence.",
    definesUs: [],
    capabilities: [],
    sectorShowcase: [
      {
        title: "CONSTRUCTION & CONTRACTING",
        description: "Supply of coatings, construction chemicals and engineered systems supported by specification and application advisory services.",
        image: "/images/sectors/card-1.webp"
      },
      {
        title: "RETAIL DISTRIBUTION",
        description: "Structured supply to retail channels supported by inventory management, pricing governance and brand development.",
        image: "/images/sectors/card-2.webp"
      },
      {
        title: "INDUSTRIAL & MANUFACTURING",
        description: "Technical products and systems supporting operational efficiency, asset protection and facility performance.",
        image: "/images/sectors/card-3.webp"
      },
      {
        title: "INFRASTRUCTURE & UTILITIES",
        description: "Specialised technologies and engineering solutions supporting municipal and large-scale infrastructure projects.",
        image: "/images/sectors/card-4.webp"
      }
    ],
  },
  {
    slug: "cinqo-fitout",
    name: "THC FITOUT",
    heroImage: "/images/companies/c3.JPG",
    introBgImage: "/images/companies/ci3.png",
    introHeading: "DELIVERED\nWITH\nPRECISION",
    introText: "THC Fit Out delivers high-quality interior environments where design intent, technical coordination and execution excellence come together.\n\nFrom corporate offices and retail environments to hospitality venues and premium residential interiors, every project is delivered with a focus on quality, programmed control and attention to detail.",
    definesUs: [],
    capabilities: [],
    sectorShowcase: [
      {
        title: "CORPORATE OFFICES",
        description: "Interior construction aligned with functionality, acoustic performance and service integration.",
        image: "/images/sectors/card-1.webp"
      },
      {
        title: "RETAIL & F&B",
        description: "Fast-track fit-out delivery focused on brand requirements and operational readiness.",
        image: "/images/sectors/card-2.webp"
      },
      {
        title: "RESIDENTIAL INTERIORS",
        description: "Premium villa and apartment interior delivered with attention to detail and material quality.",
        image: "/images/sectors/card-3.webp"
      },
      {
        title: "HEALTHCARE & CLINICS",
        description: "Fit-outs incorporating hygienic materials and coordinated building services.",
        image: "/images/sectors/card-4.webp"
      }
    ],
  },
  {
    slug: "cinqo-flooring-coating-technologies",
    name: "CINQO FLOORING & COATING TECHNOLOGIES",
    heroImage: "/images/companies/c5.png",
    introBgImage: "/images/companies/ci5.png",
    introHeading: "ENGINEERED\nFOR ENDURANCE",
    introText: "Cinqo Flooring & Coating Technologies delivers high-performance flooring, waterproofing and protective coating systems for environments where durability, hygiene and long-term performance are critical.\n\nThe company serves logistics facilities, healthcare and pharmaceutical environments, food production sites, car parks and industrial installations through technically engineered solutions and manufacturer-approved systems.",
    definesUs: [],
    capabilities: [],
    sectorShowcase: [
      {
        title: "FOOD & BEVERAGE",
        description: "Hygienic flooring systems designed for production, processing and wash-down environments.",
        image: "/images/sectors/card-1.webp"
      },
      {
        title: "HEALTHCARE & PHARMACEUTICAL",
        description: "Seamless flooring solutions suitable for laboratories, cleanrooms and contamination-sensitive facilities.",
        image: "/images/sectors/card-2.webp"
      },
      {
        title: "WAREHOUSES & LOGISTICS",
        description: "Heavy-duty flooring systems designed for continuous operational traffic and material handling.",
        image: "/images/sectors/card-3.webp"
      },
      {
        title: "CAR PARKS & PODIUMS",
        description: "Protective coating systems engineered for vehicular traffic and environmental exposure.",
        image: "/images/sectors/card-4.webp"
      }
    ],
  }
];

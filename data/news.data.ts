import type { NewsItem } from "@/types";

/**
 * CINQO News — Populate/replace with real CMS or API data later.
 * The News section maps directly over this array; fields include full content blocks
 * allowing full layout freedom (inline links, mid-text images, headings).
 * Array order is chronological ascending (oldest first, newest last).
 */
export const newsData: NewsItem[] = [
  {
    id: "news-6",
    slug: "standard-news",
    tag: "News",
    title: "Standard News Article (Will be skipped)",
    date: "May 15, 2026",
    featuredImage: "/images/news/news-6.webp",
    href: "/news/standard-news",
    excerpt: "A brief look into our baseline operations and standard updates.",
    content: [
      {
        type: "paragraph",
        text: "This is a baseline sample article for testing sorting and skipping functionality within the UI rendering logic.",
      }
    ],
  },
  {
    id: "news-5",
    slug: "strategic-group-restructuring",
    tag: "Latest",
    title: "Cinqo Holding Initiates Strategic Group Restructuring",
    date: "May 19, 2026",
    featuredImage: "/images/news/news-5.webp",
    href: "/news/strategic-group-restructuring",
    excerpt: "Cinqo Holding outlines a comprehensive internal restructuring plan to accelerate long-term operational velocity.",
    content: [
      {
        type: "heading",
        text: "Building the Next Phase of Growth"
      },
      {
        type: "paragraph",
        text: "Today, Cinqo Holding announced a sweeping internal transformation designed to streamline operational workflows and maximize capital efficiency across all global subsidiaries. This organizational pivot positions us to aggressively pursue scale throughout the remainder of 2026.",
      },
      {
        type: "image",
        src: "/images/projects/1.jpg",
        alt: "Cinqo Corporate Restructuring Org Chart",
        caption: "Figure 1: The optimized operational framework for our global operations."
      },
      {
        type: "paragraph",
        text: "A central focus of this transition is tightening our product integration. Key leadership appointments will be confirmed over the coming weeks, ensuring that execution metrics line up perfectly with investor expectations. For immediate updates, you can check our Investor Relations page.",
        links: [
          { text: "Investor Relations", url: "/investors" }
        ]
      }
    ],
  },
  {
    id: "news-4",
    slug: "global-markets",
    tag: "Top",
    title: "Major Milestone: Cinqo Reaches Global Markets",
    date: "May 20, 2026",
    featuredImage: "/images/news/news-4.webp",
    href: "/news/global-markets",
    excerpt: "Cinqo successfully scales operations across European and APAC markets, onboarding tier-one enterprise accounts.",
    content: [
      {
        type: "paragraph",
        text: "Following regulatory clearings across multiple jurisdictions, we are thrilled to announce that our platform infrastructure is now fully operational in international hubs.",
      },
      {
        type: "paragraph",
        text: "Early adoption trends indicate strong product-market fit within foreign enterprise brackets. Feel free to contact our international sales division for local partnership details.",
        links: [
          { text: "contact our international sales division", url: "/contact?dept=intl" }
        ]
      }
    ],
  },
  {
    id: "news-3",
    slug: "q2-earnings",
    tag: "Latest",
    title: "Q2 Earnings Report Released to Stakeholders",
    date: "May 21, 2026",
    featuredImage: "/images/news/news-3.webp",
    href: "/news/q2-earnings",
    excerpt: "Financial metrics outpace original projections with a 34% year-over-year revenue climb for Q2.",
    content: [
      {
        type: "paragraph",
        text: "Cinqo has delivered an exceptional fiscal quarter, marked by high net retention rates and lowered operational overhead. The complete documentation is available right now for direct download.",
        links: [
          { text: "direct download", url: "/downloads/reports/q2-2026.pdf" }
        ]
      }
    ],
  },
  {
    id: "news-2",
    slug: "startup-acquisition",
    tag: "Top",
    title: "Cinqo Acquires Leading Tech Startup",
    date: "May 22, 2026",
    featuredImage: "/images/news/news-2.webp",
    href: "/news/startup-acquisition",
    excerpt: "The acquisition expands Cinqo's technical capabilities, integrating next-generation data architecture.",
    content: [
      {
        type: "paragraph",
        text: "By acquiring industry innovators, we are directly integrating cutting-edge capabilities into our core enterprise offerings.",
      },
      {
        type: "image",
        src: "/images/projects/2.jpg",
        alt: "Cinqo Engineering Team Welcome",
        caption: "Welcoming our new engineering additions to the main workspace."
      }
    ],
  },
  {
    id: "news-1",
    slug: "ai-integration",
    tag: "Latest",
    title: "New AI Integration Announced Across Platforms",
    date: "May 23, 2026",
    featuredImage: "/images/news/news-1.webp",
    href: "/news/ai-integration",
    excerpt: "Intelligent tooling updates roll out immediately, introducing predictive workflows for all premium tiers.",
    content: [
      {
        type: "paragraph",
        text: "Automation is at the heart of efficiency. Today's platform rollout embeds intelligent workflows directly into the user dashboard, drastically shrinking operational latency.",
      }
    ],
  },
  {
    id: "news-7",
    slug: "trading-supply-agreement",
    tag: "Top",
    title: "Cinqo Trading Signs Multi-Year Supply Agreement",
    date: "May 24, 2026",
    featuredImage: "/images/projects/news-7.webp",
    href: "/news/trading-supply-agreement",
    excerpt: "A new multi-year supply agreement cements Cinqo Trading's position as a preferred regional distribution partner.",
    content: [
      {
        type: "paragraph",
        text: "Cinqo Trading has finalized a multi-year supply agreement with a coalition of regional distributors, securing long-term pipeline stability across our core markets.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The agreement is expected to nearly double throughput capacity by the end of the fiscal year.",
      }
    ],
  },
  {
    id: "news-8",
    slug: "coatings-protective-range-launch",
    tag: "Latest",
    title: "Cinqo Coatings Launches New Protective Range",
    date: "May 25, 2026",
    featuredImage: "/images/projects/4.jpg",
    href: "/news/coatings-protective-range-launch",
    excerpt: "Cinqo Coatings & Coating Technologies unveils a next-generation protective coatings line built for extreme climates.",
    content: [
      {
        type: "heading",
        text: "Engineered for Extreme Conditions"
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The new range extends protective lifespan by up to 40% in high-humidity environments.",
      }
    ],
  },
  {
    id: "news-9",
    slug: "facilities-management-regional-contract",
    tag: "Top",
    title: "THC Facilities Management Wins Regional Contract",
    date: "May 26, 2026",
    featuredImage: "/images/hero/h1.jpg",
    href: "/news/facilities-management-regional-contract",
    excerpt: "THC Facilities Management secures a landmark regional maintenance contract spanning multiple commercial towers.",
    content: [
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This new engagement expands THC's managed portfolio to over 40 commercial sites across the region.",
      }
    ],
  },
  {
    id: "news-10",
    slug: "industry-excellence-awards",
    tag: "Latest",
    title: "Cinqo Holding Recognized at Industry Excellence Awards",
    date: "May 27, 2026",
    featuredImage: "/images/hero/h2.jpg",
    href: "/news/industry-excellence-awards",
    excerpt: "Cinqo Holding receives top honors for operational excellence at this year's regional industry awards ceremony.",
    content: [
      {
        type: "paragraph",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. The recognition highlights consistent delivery across our diversified portfolio.",
      }
    ],
  },
  {
    id: "news-11",
    slug: "fitout-hospitality-project",
    tag: "News",
    title: "Cinqo Fitout Completes Landmark Hospitality Project",
    date: "May 28, 2026",
    featuredImage: "/images/hero/h3.png",
    href: "/news/fitout-hospitality-project",
    excerpt: "Cinqo Fitout delivers a flagship hospitality interior project ahead of schedule and under budget.",
    content: [
      {
        type: "paragraph",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. The project spans over 25,000 square meters of premium interior space.",
      },
      {
        type: "image",
        src: "/images/companies/c1.jpg",
        alt: "Cinqo Fitout hospitality interior",
        caption: "The completed lobby and guest lounge areas of the flagship project."
      }
    ],
  },
  {
    id: "news-12",
    slug: "sustainability-roadmap",
    tag: "Top",
    title: "Group Announces Expanded Sustainability Roadmap",
    date: "May 29, 2026",
    featuredImage: "/images/companies/h1.jpg",
    href: "/news/sustainability-roadmap",
    excerpt: "Cinqo Holding sets ambitious new sustainability targets across energy use, waste reduction, and materials sourcing.",
    content: [
      {
        type: "heading",
        text: "A Roadmap to Net-Positive Operations"
      },
      {
        type: "paragraph",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Learn more about our commitments on the sustainability page.",
        links: [
          { text: "sustainability page", url: "/about#sustainability" }
        ]
      }
    ],
  },
  {
    id: "news-13",
    slug: "contracting-new-development",
    tag: "Latest",
    title: "Cinqo Contracting Breaks Ground on New Development",
    date: "May 30, 2026",
    featuredImage: "/images/news/news-1.jpg",
    href: "/news/contracting-new-development",
    excerpt: "Cinqo Contracting begins construction on a mixed-use development set to redefine the local skyline.",
    content: [
      {
        type: "paragraph",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. The development includes residential, retail, and office components across three towers.",
      }
    ],
  },
  {
    id: "news-14",
    slug: "hawar-hotel-development-phase-1-phase-2-enhancement-works",
    tag: "News",
    title: "Hawar Hotel Development – Phase 1, Phase 2 & Enhancement Works",
    date: "May 31, 2026",
    featuredImage: "/images/news/news-7.webp",
    href: "/news/hawar-hotel-development-phase-1-phase-2-enhancement-works",
    excerpt: "Cinqo Supports the Successful Delivery of Hawar Hotel Development Through Integrated Finishing Solutions",
    content: [
      {
        type: "paragraph",
        text: "Cinqo Flooring & Coating Technologies successfully delivered a comprehensive range of floor coating, decorative coating, concrete protective coating, waterproofing and architectural finishing works for the prestigious Hawar Hotel Development by Mantis at Hawar Island, in collaboration with Nass Contracting.",
      },
      {
        type: "paragraph",
        text: "Spanning Phase 1, Phase 2 and Enhancement Works, Cinqo executed a multi-disciplinary finishing package across a combined area of approximately 100,000 m\u00b2, contributing to the successful delivery of this unique hospitality destination. The scope of works included concrete protective coating systems, epoxy flooring solutions, internal and external wall and ceiling painting, architectural floor and wall finishes, swimming pool waterproofing and tiling works and helipad protective coating applications.",
      },
      {
        type: "paragraph",
        text: "The successful execution of this extensive package highlights Cinqo's expertise in managing complex and diverse finishing requirements for high-profile hospitality developments. Through the application of advanced material technologies, technical expertise and meticulous workmanship, Cinqo delivered durable, high-performance solutions engineered to meet demanding operational requirements while achieving the highest standards of quality, functionality and aesthetics.",
      },
      {
        type: "paragraph",
        text: "As a key contributor to the development of Hawar Island's hospitality landscape, Cinqo continues to strengthen its position as a trusted specialist in resin flooring systems, protective coatings, waterproofing solutions and architectural finishes. This landmark project reflects our commitment to delivering integrated solutions that support the successful completion of prestigious developments throughout the Kingdom of Bahrain.",
      },
    ],
  },
  {
    id: "news-15",
    slug: "kooheji-projects",
    tag: "Top",
    title: "Kooheji Projects",
    date: "June 1, 2026",
    featuredImage: "/images/news/news-6.webp",
    href: "/news/kooheji-projects",
    excerpt: "Cinqo Strengthens Portfolio Through Flooring & Finishing Works Across Kooheji Developments",
    content: [
      {
        type: "paragraph",
        text: "Cinqo Flooring & Coating Technologies has executed specialized flooring, decorative coating and architectural finishing works across a portfolio of developments by Kooheji Projects, delivering high-quality solutions for residential, commercial and mixed-use projects throughout the Kingdom of Bahrain.",
      },
      {
        type: "paragraph",
        text: "With a combined project area of approximately 620,000 m\u00b2, these developments represent a significant contribution to Bahrain\u2019s evolving built environment. Over the years, Cinqo\u2019s scope of works has included car park epoxy and polyurethane floor coating systems, decorative painting, architectural floor finishes and other specialized finishing applications, supporting Kooheji Projects in achieving exceptional standards of quality, durability and performance across their developments.",
      },
      {
        type: "paragraph",
        text: "Completed projects include:",
      },
      {
        type: "paragraph",
        text: "\u2022 Onyx Rotana & Residences (Bahrain Bay)",
      },
      {
        type: "paragraph",
        text: "\u2022 Onyx Skyview (Bahrain Bay)",
      },
      {
        type: "paragraph",
        text: "\u2022 Onyx Bahrain Bay",
      },
      {
        type: "paragraph",
        text: "\u2022 Fontana Infinity",
      },
      {
        type: "paragraph",
        text: "\u2022 Fontana Towers",
      },
      {
        type: "paragraph",
        text: "\u2022 Fontana Gardens",
      },
      {
        type: "paragraph",
        text: "\u2022 Seef Avenue",
      },
      {
        type: "paragraph",
        text: "\u2022 Seef Avenue II",
      },
      {
        type: "paragraph",
        text: "\u2022 Seef Boulevard",
      },
      {
        type: "paragraph",
        text: "\u2022 Catamaran (Seef District)",
      },
      {
        type: "paragraph",
        text: "\u2022 Marassi Views",
      },
      {
        type: "paragraph",
        text: "\u2022 Canal View",
      },
      {
        type: "paragraph",
        text: "\u2022 Juffair Square",
      },
      {
        type: "paragraph",
        text: "\u2022 Springfield Suites",
      },
      {
        type: "paragraph",
        text: "These projects represent a selection of developments where Cinqo has provided specialized flooring and finishing solutions for Kooheji Projects. Our continued involvement demonstrates our capability to deliver reliable, high-performance systems tailored to the technical requirements of diverse and demanding construction environments, while maintaining a strong commitment to quality, precision and workmanship.",
      },
    ],
  },
  {
    id: "news-16",
    slug: "tivoli-avani-hotel-and-residences",
    tag: "Latest",
    title: "Tivoli & Avani Hotel and Residences",
    date: "June 2, 2026",
    featuredImage: "/images/news/news-5.webp",
    href: "/news/tivoli-avani-hotel-and-residences",
    excerpt: "Cinqo Executes High-Performance Car Park Epoxy and Polyurethane Floor Coating and Architectural Floor and Wall Finishes Package at Tivoli & Avani Hotel and Residences",
    content: [
      {
        type: "paragraph",
        text: "Cinqo Flooring & Coating Technologies is currently executing car park floor coating and architectural floor finishes works for the Tivoli & Avani Hotel and Residences development in collaboration with Cebarco Bahrain.",
      },
      {
        type: "paragraph",
        text: "Located in Zallaq, Bahrain, this premium hospitality development includes the installation of high-performance epoxy and polyurethane flooring systems across approximately 35,000 m\u00b2 of car park, service rooms areas, together with architectural floor finishes. The traffic coating system incorporates a seamless 1.2 mm thick polyurethane membrane engineered to provide exceptional abrasion resistance, waterproofing performance, crack-bridging flexibility, enhanced slip resistance and long-term durability under demanding vehicular traffic conditions.",
      },
      {
        type: "paragraph",
        text: "As work progresses, Cinqo continues to apply its expertise in specialized flooring solutions, maintaining a strong focus on quality, precision and workmanship to support the successful delivery of this prestigious development in Bahrain's hospitality sector.",
      },
    ],
  },
  {
    id: "news-17",
    slug: "future-generation-reserve-phase-2",
    tag: "News",
    title: "Future Generation Reserve Phase 2",
    date: "June 3, 2026",
    featuredImage: "/images/news/news-4.webp",
    href: "/news/future-generation-reserve-phase-2",
    excerpt: "Cinqo Progresses Specialized Flooring & Decorative Painting Package for Future Generation Reserve Phase 2",
    content: [
      {
        type: "paragraph",
        text: "Cinqo Flooring & Coating Technologies is pleased to be contributing to the Future Generation Reserve Phase 2 development in collaboration with Cebarco Bahrain, delivering specialized flooring and finishing solutions for this significant project in the Kingdom of Bahrain.",
      },
      {
        type: "paragraph",
        text: "The scope of works includes epoxy, polyurethane floor coating, anti-carbonation coating and internal and external wall and ceiling decorative coating works covering approximately 50,000 m\u00b2. These finishing solutions are designed to enhance durability, functionality and aesthetics while meeting the quality requirements of a large-scale development.",
      },
      {
        type: "paragraph",
        text: "Through our expertise in flooring, coating and finishing applications, Cinqo continues to deliver reliable solutions for complex construction projects, combining technical knowledge, quality workmanship and attention to detail throughout the execution of the works.",
      },
    ],
  },
  {
    id: "news-18",
    slug: "bahrain-marina-development-phase-1",
    tag: "Latest",
    title: "Bahrain Marina Development Phase 1",
    date: "June 4, 2026",
    featuredImage: "/images/news/news-3.webp",
    href: "/news/bahrain-marina-development-phase-1",
    excerpt: "Bahrain Marina Development Phase 1 – Car Park Epoxy & Polyurethane Flooring Systems and Architectural Floor & Wall Finishes",
    content: [
      {
        type: "paragraph",
        text: "Cinqo Flooring & Coating Technologies is currently executing specialized floor finishing works for the Bahrain Marina Development Phase 1 in collaboration with Nass Contracting.",
      },
      {
        type: "paragraph",
        text: "Under this project, Cinqo is delivering a comprehensive flooring scope comprising high-performance epoxy and polyurethane car park coating systems covering approximately 55,000 m\u00b2, along with approximately 100,000 m\u00b2 of architectural floor finishes works. These solutions are designed to provide exceptional durability, safety and long-term performance while supporting the functional and aesthetic requirements of this landmark waterfront development.",
      },
      {
        type: "paragraph",
        text: "This project demonstrates Cinqo\u2019s capability in managing large-scale flooring and finishing packages through technical expertise, precise execution and effective project coordination. Our continued involvement in major developments across the Kingdom of Bahrain reflects our commitment to delivering reliable solutions that meet demanding performance and quality requirements.",
      },
    ],
  },
  {
    id: "news-19",
    slug: "marassi-galleria",
    tag: "Top",
    title: "Marassi Galleria",
    date: "June 5, 2026",
    featuredImage: "/images/news/news-2.webp",
    href: "/news/marassi-galleria",
    excerpt: "Marassi Galleria – Specialized Flooring Solutions for Bahrain's Premier Retail Destination",
    content: [
      {
        type: "paragraph",
        text: "Cinqo Flooring & Coating Technologies is proud to have contributed to Marassi Galleria, one of Bahrain's premier retail and lifestyle destinations developed by Eagle Hills, through the successful completion of the high-performance car park epoxy and polyurethane floor coating works.",
      },
      {
        type: "paragraph",
        text: "Working under the Cebarco\u2013Shapoorji Joint Venture, our scope included the installation of a seamless, high-performance epoxy and polyurethane flooring system covering 270,000m\u00b2 making it the largest project in the Kingdom of Bahrain. Engineered for demanding car park environments, the system provides excellent durability, abrasion resistance, enhanced safety and ease of maintenance while delivering a clean, professional finish.",
      },
      {
        type: "paragraph",
        text: "This project reflects Cinqo's capability to deliver specialized flooring and coating solutions for high-profile commercial developments, reinforcing our commitment to quality, performance and long-term value.",
      },
    ],
  },
  {
    id: "news-20",
    slug: "international-airport-airport-modernization-program",
    tag: "News",
    title: "International Airport – Airport Modernization Program",
    date: "June 6, 2026",
    featuredImage: "/images/news/news-1.webp",
    href: "/news/international-airport-airport-modernization-program",
    excerpt: "Cinqo Completes 175,000 m² High-Performance Car Park Epoxy Flooring Package for Bahrain International Airport",
    content: [
      {
        type: "paragraph",
        text: "As part of Cinqo Flooring & Coating Technologies' portfolio of landmark infrastructure projects in the Kingdom of Bahrain, we successfully completed the car park epoxy floor coating works for the Bahrain International Airport \u2013 Airport Modernization Program. The project was delivered for the Ministry of Transportation and Telecommunications / Bahrain Airport Company, in collaboration with the Arabtec\u2013TAV Joint Venture as the main contractor.",
      },
      {
        type: "paragraph",
        text: "The scope of works included the installation of a high-performance seamless epoxy flooring system covering approximately 175,000 m\u00b2 of car park areas. Engineered to provide a robust, abrasion-resistant surface capable of withstanding intensive vehicular movement within a demanding operational environment. Designed for long-term durability, the flooring solution delivers enhanced safety, improved maintenance efficiency and consistent performance while maintaining a high-quality aesthetic finish.",
      },
      {
        type: "paragraph",
        text: "Delivered as part of one of Bahrain's most significant aviation infrastructure developments, this project reflects Cinqo's expertise in executing large-scale flooring solutions for major public infrastructure developments. It highlights our ability to manage complex flooring requirements with technical precision, advanced application methods and a strong commitment to quality, performance and project excellence.",
      },
    ],
  },
];

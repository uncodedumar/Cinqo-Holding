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
    slug: "leadership-team-strengthened",
    tag: "News",
    title: "Cinqo Holding Strengthens Leadership Team",
    date: "May 31, 2026",
    featuredImage: "/images/projects/1.jpg",
    href: "/news/leadership-team-strengthened",
    excerpt: "Cinqo Holding welcomes several senior executives to accelerate strategic execution across its divisions.",
    content: [
      {
        type: "paragraph",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos. The new appointments span finance, operations, and technology functions.",
      }
    ],
  },
  {
    id: "news-15",
    slug: "record-group-performance",
    tag: "Top",
    title: "Annual Report Highlights Record Group Performance",
    date: "June 1, 2026",
    featuredImage: "/images/projects/2.jpg",
    href: "/news/record-group-performance",
    excerpt: "Cinqo Holding's latest annual report highlights record revenue and profitability across every business unit.",
    content: [
      {
        type: "paragraph",
        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Full financial statements are available in the annual report download.",
        links: [
          { text: "annual report download", url: "/downloads/reports/annual-2026.pdf" }
        ]
      }
    ],
  },
  {
    id: "news-16",
    slug: "trading-distribution-hub",
    tag: "Latest",
    title: "Cinqo Trading Opens New Regional Distribution Hub",
    date: "June 2, 2026",
    featuredImage: "/images/projects/3.jpg",
    href: "/news/trading-distribution-hub",
    excerpt: "A newly opened distribution hub sharpens delivery times and expands warehousing capacity for Cinqo Trading.",
    content: [
      {
        type: "paragraph",
        text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. The facility triples existing cold-chain and dry-goods storage capacity.",
      }
    ],
  },
  {
    id: "news-17",
    slug: "coatings-iso-certification",
    tag: "News",
    title: "Cinqo Coatings Achieves ISO Certification",
    date: "June 3, 2026",
    featuredImage: "/images/projects/4.jpg",
    href: "/news/coatings-iso-certification",
    excerpt: "Cinqo Coatings & Coating Technologies earns a key international quality management certification.",
    content: [
      {
        type: "paragraph",
        text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. The certification reinforces our commitment to consistent, auditable quality standards.",
      }
    ],
  },
  {
    id: "news-18",
    slug: "community-outreach-initiative",
    tag: "Latest",
    title: "Group Hosts Community Outreach Initiative",
    date: "June 4, 2026",
    featuredImage: "/images/hero/h1.jpg",
    href: "/news/community-outreach-initiative",
    excerpt: "Cinqo Holding employees volunteer across a series of community outreach events throughout the region.",
    content: [
      {
        type: "paragraph",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti. Over 300 employees participated across five cities.",
      },
      {
        type: "image",
        src: "/images/companies/h1.jpg",
        alt: "Cinqo Holding community outreach event",
        caption: "Volunteers from across the group taking part in the outreach initiative."
      }
    ],
  },
  {
    id: "news-19",
    slug: "digital-transformation-program",
    tag: "Top",
    title: "Cinqo Holding Expands Digital Transformation Program",
    date: "June 5, 2026",
    featuredImage: "/images/hero/h2.jpg",
    href: "/news/digital-transformation-program",
    excerpt: "A group-wide digital transformation program accelerates automation across finance, operations, and logistics.",
    content: [
      {
        type: "paragraph",
        text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit. The program is expected to complete its first phase by year-end.",
      }
    ],
  },
  {
    id: "news-20",
    slug: "fitout-flagship-showroom",
    tag: "News",
    title: "THC Fitout Unveils Flagship Showroom",
    date: "June 6, 2026",
    featuredImage: "/images/hero/h3.png",
    href: "/news/fitout-flagship-showroom",
    excerpt: "THC Fitout opens a new flagship showroom, giving clients a hands-on look at premium interior finishes.",
    content: [
      {
        type: "paragraph",
        text: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet. The showroom features live material samples and full-scale finish mockups.",
      }
    ],
  },
];

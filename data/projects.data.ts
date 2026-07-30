// projects.data.ts
import { Project } from "@/types"; // Adjust the import path based on your folder structure

export const PROJECTS: Project[] = [
  {
    id: "j003",
    name: "J003 FONTANA INFINITY",
    subheading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "1 Jan, 2026",
    status: "ongoing",
    highlighted: true,
    image: "/images/projects/1.jpg",
    logo: "/images/companies/cinqo-trading.png",
    company: "Cinqo Trading",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    bullets: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    ],
    thumbnails: [
      "/images/projects/2.jpg",
      "/images/projects/3.jpg",
      "/images/projects/4.jpg"
    ]
  },
  {
    id: "j004",
    name: "J004 AZURE HORIZON",
    subheading: "Premium overwater residential spaces engineered with sustainable materials.",
    date: "15 Feb, 2026",
    status: "ongoing",
    highlighted: true,
    image: "/images/projects/2.jpg",
    logo: "/images/companies/cinqo-contracting.png",
    company: "Cinqo Trading",
    description: "Our upcoming waterfront living experience pushes the boundaries of modern architecture.",
    bullets: [
      "Eco-friendly building materials.",
      "Smart-home integrations built-in.",
      "Exclusive marina access for residents."
    ],
    thumbnails: [
      "/images/projects/3.jpg",
      "/images/projects/4.jpg"
    ]
  },
  {
    id: "j005",
    name: "J005 AZURE HORIZON COMPLETED",
    subheading: "Premium overwater residential spaces engineered with sustainable materials.",
    date: "15 Feb, 2026",
    status: "completed",
    highlighted: true,
    image: "/images/projects/3.jpg",
    logo: "/images/companies/cinqo-contracting.png",
    company: "Cinqo Trading",
    description: "Our upcoming waterfront living experience pushes the boundaries of modern architecture.",
    bullets: [
      "Eco-friendly building materials.",
      "Smart-home integrations built-in.",
      "Exclusive marina access for residents."
    ],
    thumbnails: [
      "/images/projects/4.jpg",
      "/images/projects/1.jpg"
    ]
  },
  {
    id: "j006",
    name: "BINAA AL BAHRAIN Office Fit-Out Works",
    subheading: "Complete turnkey office fit-out at Moda Mall, Bahrain World Trade Centre.",
    date: "19 Jun, 2025",
    status: "completed",
    image: "/images/projects/fitout/Bina/1.jpg",
    logo: "/images/logos/3.png",
    company: "THC Fit-out",
    description: "THC Fit-outs is currently executing a major office fit-out project at Moda Mall, Bahrain World Trade Centre, delivering a complete turnkey solution.\n\nThe project involves a comprehensive scope of works including civil works, MEP installations, custom joinery, glazing and flooring solutions, as well as the supply and installation of pantry and café equipment. External façade works are also part of the overall scope, ensuring a fully integrated project delivery.\n\nThis fit-out reflects our capability to manage complex, high-value projects while maintaining a strong focus on quality, functionality, and design excellence. Through careful planning, coordination, and execution, we are ensuring that all aspects of the workspace meet the client's operational and aesthetic requirements.",
    thumbnails: [
      "/images/projects/fitout/Bina/2.jpg",
      "/images/projects/fitout/Bina/3.jpg",
      "/images/projects/fitout/Bina/4.jpg"
    ]
  },
  {
    id: "j007",
    name: "Rolls Royce Showroom, Sitra, Bahrain",
    subheading: "Main contractor for prestigious luxury showroom renovation in Bahrain.",
    date: "10 Dec, 2025",
    status: "completed",
    image: "/images/projects/fitout/RR/1.jpg",
    logo: "/images/logos/3.png",
    company: "THC Fit-out",
    description: "THC Fit-outs is proud to have served as the main contractor for the prestigious renovation of the Rolls Royce Showroom in Bahrain. The project holds extensive updates to the showroom space, including structural modifications, flooring, partitions, and other construction elements designed to meet the luxury standards of the Rolls Royce brand. Additionally, comprehensive adjustments were made to mechanical systems, electrical infrastructure, fire system and plumbing to support the updated design and operational needs. We worked closely with the Consultant, Arab Architects, TRISON & Bespoke to translate the client's vision into reality, involving collaborative design discussions, detailed planning, and meticulous coordination to ensure all aspects of the renovation met the client's expectations.",
    thumbnails: [
      "/images/projects/fitout/RR/2.jpg",
      "/images/projects/fitout/RR/3.jpg",
      "/images/projects/fitout/RR/4.jpg"
    ]
  },
  {
    id: "j008",
    name: "Maserati Car Showroom and Euro Motors Boutique at The Avenues Mall Bahrain",
    subheading: "Full turnkey fit-out of luxury automotive showroom at The Avenues Mall.",
    date: "7 May, 2026",
    status: "completed",
    image: "/images/projects/fitout/Maserati/1.jpeg",
    logo: "/images/logos/3.png",
    company: "THC Fit-out",
    description: "THC Fit-outs successfully completed the full turnkey fit-out of the Maserati showroom and Euro Motors boutique at The Avenues Mall, Bahrain.\n\nThe project encompassed a comprehensive scope of works, including civil works, complete MEP installations, and high-end custom joinery tailored to the brand's premium standards. Specialized architectural elements such as aluminium baffle interiors and external louvers cladding were also executed, enhancing both the aesthetic appeal and functional performance of the space.\n\nDelivered to reflect the luxury and sophistication associated with the Maserati brand, the project demonstrates our ability to execute complex showroom environments with precision, quality, and attention to detail, ensuring alignment with the client's design intent and operational requirements.",
    thumbnails: [
      "/images/projects/fitout/Maserati/2.jpeg",
      "/images/projects/fitout/Maserati/3.jpeg",
      "/images/projects/fitout/Maserati/4.jpeg"
    ]
  },
];

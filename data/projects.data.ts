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
];

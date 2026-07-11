import type { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "project-1",
    name: "Project Name",
    location: "Bahrain",
    category: "Residential",
    heroImage: "/images/projects/1.jpg",
    gallery: [
      { src: "/images/projects/2.jpg", alt: "Project Name — view 1" },
      { src: "/images/projects/3.jpg", alt: "Project Name — view 2" },
      { src: "/images/projects/4.jpg", alt: "Project Name — view 3" },
    ],
  },
  {
    id: "project-2",
    name: "Project Name",
    location: "Bahrain",
    category: "Commercial",
    heroImage: "/images/projects/4.jpg",
    gallery: [
      { src: "/images/projects/1.jpg", alt: "Project Name — view 1" },
      { src: "/images/projects/2.jpg", alt: "Project Name — view 2" },
      { src: "/images/projects/3.jpg", alt: "Project Name — view 3" },
    ],
  },
];

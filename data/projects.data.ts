import type { Project } from "@/types";

/**
 * Project Highlights — each project has a heroImage (shown by default)
 * and an optional heroVideo (swapped in on hover per the design spec).
 * `gallery` powers the small thumbnail strip + position-swap animation.
 */
export const projectsData: Project[] = [
  {
    id: "project-1",
    name: "Project Name",
    location: "Bahrain",
    category: "Residential",
    heroImage: "/images/projects/project-1/hero.jpg",
    heroVideo: "/videos/projects/project-1/hero.mp4",
    gallery: [
      { src: "/images/projects/project-1/thumb-1.jpg", alt: "Project Name — view 1" },
      { src: "/images/projects/project-1/thumb-2.jpg", alt: "Project Name — view 2" },
      { src: "/images/projects/project-1/thumb-3.jpg", alt: "Project Name — view 3" },
    ],
  },
  {
    id: "project-2",
    name: "Project Name",
    location: "Bahrain",
    category: "Commercial",
    heroImage: "/images/projects/project-2/hero.jpg",
    heroVideo: "/videos/projects/project-2/hero.mp4",
    gallery: [
      { src: "/images/projects/project-2/thumb-1.jpg", alt: "Project Name — view 1" },
      { src: "/images/projects/project-2/thumb-2.jpg", alt: "Project Name — view 2" },
      { src: "/images/projects/project-2/thumb-3.jpg", alt: "Project Name — view 3" },
    ],
  },
];

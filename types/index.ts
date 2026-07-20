import type { ReactNode } from "react";

export interface ContentLink {
  text: string;
  url: string;
}

export interface ContentBlock {
  type: "paragraph" | "image" | "heading";
  // Used for text or headings. Supports tracking text with specific links.
  text?: string;
  links?: ContentLink[]; 
  // Used for images inserted mid-content
  src?: string;
  alt?: string;
  caption?: string;
}

export interface NewsItem {
  id: string;
  slug: string;        // The clean URL identifier (e.g., "strategic-group-restructuring")
  tag: "News" | "Latest" | "Top";
  title: string;
  date: string;
  featuredImage: string; // The main card image
  href: string;        // The actual constructed link route
  excerpt: string;     // Brief summary for listings
  content: ContentBlock[]; // The rich text body array
}


export interface GalleryImage {
  src: string;
  alt: string;
}

export type ProjectStatus = "ongoing" | "completed";

export interface Project {
  id: string;
  name: string;
  subheading: string;
  date: string;
  status: ProjectStatus;
  /** Featured on the home page's Project Highlights carousel. */
  highlighted?: boolean;
  image: string;
  logo?: string;
  description: string;
  bullets?: string[];
  thumbnails?: string[];
}


export interface CompanyCard {
  id: string;
  name: string;
  logo: string;
  bgImage: string;
  description: string;
  href: string;
}

export interface PartnerLogo {
  id: string;
  name: string;
  logo: string;
}

export interface GuidingPrinciple {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  badge?: string;
  headline1: ReactNode;
  headline2: ReactNode;
  subtitle?: string;
  imagePosition?: string;
}

export interface HeroSlideV2 {
  id: string;
  image: string;
  alt: string;
  headline1: ReactNode;
  subtitle?: string;
  imagePosition?: string;
}
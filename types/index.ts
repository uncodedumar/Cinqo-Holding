export interface NewsItem {
  id: string;
  tag: string;
  title: string;
  date: string;
  image: string;
  href: string;
}

export interface ProjectImage {
  src: string;
  video?: string; // shown on hover instead of the static image
  alt: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  category: string;
  heroImage: string;
  heroVideo?: string;
  gallery: ProjectImage[];
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
}

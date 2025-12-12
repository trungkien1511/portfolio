import { LucideIcon } from 'lucide-react';

export interface SkillItem {
  name: string;
  icon?: LucideIcon;
}

export interface SkillCategory {
  title: string;
  items: string[];
  icon: LucideIcon;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  role: string;
  learnings: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  label: string;
}

export interface FundamentalConcept {
  title: string;
  description: string;
}
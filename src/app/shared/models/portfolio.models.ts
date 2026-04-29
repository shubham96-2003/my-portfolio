export interface NavLink {
  id: string;
  label: string;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  features: string[];
  image: string;
  liveUrl?: string;
}

export interface EducationItem {
  degree: string;
  college: string;
  university: string;
  year: string;
  score: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

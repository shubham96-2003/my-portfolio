import {
  EducationItem,
  ExperienceItem,
  NavLink,
  ProjectItem,
  SkillItem,
  SocialLink,
} from '../models/portfolio.models';

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const SKILLS: SkillItem[] = [
  { name: 'AngularJS', icon: 'code' },
  { name: 'HTML', icon: 'language' },
  { name: 'CSS', icon: 'palette' },
  { name: 'JavaScript', icon: 'integration_instructions' },
  { name: 'Responsive UI Design', icon: 'devices' },
  { name: 'Single Page Applications', icon: 'web' },
];

export const EXPERIENCE: ExperienceItem = {
  title: 'Software Developer Intern',
  company: 'Chordz Technologies Pvt. Ltd.',
  duration: '10 Nov 2025 - Current',
  highlights: [
    'Developed and maintained frontend components using HTML, CSS, and AngularJS.',
    'Designed responsive web pages for cross-device compatibility.',
    'Collaborated with senior developers to fix UI issues and improve performance.',
    'Gained hands-on experience with real-world development workflows.',
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Taste Master Cafe - Restaurant Website',
    description:
      'Designed and developed a responsive restaurant website showcasing menu and services with a clean UI and smooth navigation.',
    features: ['HTML, CSS, AngularJS', 'Clean UI layouts', 'Mobile-friendly cross-browser compatibility'],
    image: '/assets/images/project-restaurant.PNG',
    liveUrl: 'https://taste-master-cafe.netlify.app/',
  },
  {
    title: 'TaskMinder - Task Management App',
    description:
      'A personal task management web application for adding tasks, tracking deadlines, updating status, and managing daily priorities in one workspace.',
    features: ['Python Django', 'SQLite3 database', 'Task status and deadline tracking'],
    image: '/assets/images/project-taskminder.PNG',
  },
];

export const EDUCATION: EducationItem = {
  degree: 'B.Sc. Computer Science',
  college: 'S.M. Joshi College, Hadapsar',
  university: 'Savitribai Phule Pune University',
  year: '2024',
  score: 'CGPA: 7.51 (Grade A)',
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shubham-vitukade' },
];

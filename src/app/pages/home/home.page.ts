import { CommonModule, DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { EducationComponent } from '../../components/education/education.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ScrollTopComponent } from '../../components/scroll-top/scroll-top.component';
import {
  EDUCATION,
  EXPERIENCE,
  NAV_LINKS,
  PROJECTS,
  SKILLS,
  SOCIAL_LINKS,
} from '../../shared/data/portfolio.data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    ScrollTopComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePageComponent {
  readonly navLinks = NAV_LINKS;
  readonly skills = SKILLS;
  readonly experience = EXPERIENCE;
  readonly projects = PROJECTS;
  readonly education = EDUCATION;
  readonly socialLinks = SOCIAL_LINKS;
  private readonly document = inject(DOCUMENT);
  private readonly viewportScroller = inject(ViewportScroller);

  constructor() {
    this.viewportScroller.setOffset(() => {
      const navbar = this.document.querySelector('.portfolio-navbar') as HTMLElement | null;
      const navbarHeight = navbar?.offsetHeight ?? 80;
      const extraOffset = window.innerWidth <= 768 ? 0 : -20;

      return [0, navbarHeight + extraOffset];
    });
  }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}

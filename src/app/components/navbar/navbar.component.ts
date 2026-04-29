import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output, signal } from '@angular/core';

import { NavLink } from '../../shared/models/portfolio.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input({ required: true }) links: NavLink[] = [];
  @Output() navigateTo = new EventEmitter<string>();

  readonly isMenuOpen = signal(false);
  readonly isScrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  goToSection(sectionId: string): void {
    this.isMenuOpen.set(false);

    requestAnimationFrame(() => {
      this.navigateTo.emit(sectionId);
    });
  }
}

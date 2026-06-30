import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

import { EducationItem } from '../../shared/models/portfolio.models';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatCardModule, ScrollRevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  @Input({ required: true }) education: EducationItem[] = [];
}

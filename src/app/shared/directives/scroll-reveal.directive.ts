import { Directive, ElementRef, OnInit, OnDestroy, inject, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private observer: IntersectionObserver | null = null;
  
  @Input() appScrollReveal: string = 'reveal'; // default class to add

  ngOnInit(): void {
    // Initially add the reveal class to set up initial state (e.g. opacity 0)
    this.renderer.addClass(this.el.nativeElement, this.appScrollReveal);
    
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'in-view');
            // Optional: unobserve after revealing if we only want it once
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

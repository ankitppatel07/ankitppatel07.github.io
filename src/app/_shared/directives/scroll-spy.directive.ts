import { Directive, ElementRef, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]',
  standalone: true
})
export class ScrollSpyDirective implements OnInit, OnDestroy {
  @Output() sectionVisible = new EventEmitter<string>();
  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const options = {
      root: null, // use the viewport
      rootMargin: '-20% 0px -70% 0px', // triggers when section is in the upper-middle of screen
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.sectionVisible.emit(this.el.nativeElement.id);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
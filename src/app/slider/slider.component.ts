import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() className: string = ''; // Dynamic className for the scrolling container
  @Input() amount: number = 300; // The amount to scroll (in pixels)
  @ViewChild('scrollItem') scrollItemRef!: ElementRef;

  ngAfterViewInit(): void {
    // Wait for view initialization
    this.scrollItemRef.nativeElement = document.querySelector(`.${this.className}`);
  }

  // Handle left or right scroll action
  handleScroll(direction: string) {
    if (this.scrollItemRef) {
      if (direction === 'left') {
        this.smoothScroll(this.scrollItemRef.nativeElement, -this.amount);
      } else if (direction === 'right') {
        this.smoothScroll(this.scrollItemRef.nativeElement, this.amount);
      }
    }
  }

  // Scroll smoothly
  smoothScroll(element: HTMLElement, amount: number) {
    element.scrollTo({
      left: element.scrollLeft + amount,
      behavior: 'smooth'
    });
  }
}

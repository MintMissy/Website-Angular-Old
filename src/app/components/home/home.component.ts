import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('homeHeroH1', { static: true })
  homeHeroH1!: ElementRef<HTMLHeadingElement>;
  @ViewChild('homeHeroH2', { static: true })
  homeHeroH2!: ElementRef<HTMLHeadingElement>;
  @ViewChild('homeHeroP', { static: true })
  homeHeroP!: ElementRef<HTMLParagraphElement>;
  @ViewChild('homeHeroBtn', { static: true })
  homeHeroBtn!: ElementRef<HTMLButtonElement>;

  constructor() {}

  ngOnInit(): void {
    this.slideInAnimation(this.homeHeroH1, 0.5);
    this.slideInAnimation(this.homeHeroH2, 0.5);
    this.slideInAnimation(this.homeHeroP, 0.65);
    this.slideInAnimation(this.homeHeroBtn, 0.75);
  }

  slideInAnimation(element: ElementRef, delay: number) {
    gsap.from(element.nativeElement, {
      delay: delay,
      duration: 0.75,
      opacity: 0,
      y: 20,
    });
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('navRightLinks', { static: true })
  navRightLinks!: ElementRef<HTMLUListElement>;
  @ViewChild('settingsBtn', { static: true })
  settingsBtn!: ElementRef<HTMLDivElement>;

  isNavbarActive = false;

  constructor() {}

  ngOnInit(): void {
    gsap.from(this.navRightLinks.nativeElement.childNodes, {
      delay: 0,
      duration: 0.75,
      opacity: 0,
      x: 50,
      stagger: 0.15,
    });
    gsap.from(this.settingsBtn.nativeElement, {
      delay: 0.45,
      duration: 0.75,
      opacity: 0,
      x: 50,
    });
  }

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }

  closeNavbar() {
    this.isNavbarActive = false;
  }
}

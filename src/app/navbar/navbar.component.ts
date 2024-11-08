import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() cartCount: number = 0;
  constructor(private router: Router) {}
  navigateHome(): void {
    this.router.navigate(['/']);
  }
  iconColor = '#686b78';
  onMouseOver() {
    this.iconColor = 'customOrange'; 
  }

  onMouseOut() {
    this.iconColor = '#686b78';
  }
}

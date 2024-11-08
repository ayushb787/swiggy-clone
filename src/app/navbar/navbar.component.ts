import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() cartCount: number = 0;
  
  iconColor = '#686b78';
  onMouseOver() {
    this.iconColor = 'customOrange'; // Hover color
  }

  onMouseOut() {
    this.iconColor = '#686b78'; // Default color
  }
}

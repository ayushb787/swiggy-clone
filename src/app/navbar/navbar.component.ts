import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  iconColor = '#686b78';
  onMouseOver() {
    this.iconColor = 'customOrange'; // Hover color
  }

  onMouseOut() {
    this.iconColor = '#686b78'; // Default color
  }
}

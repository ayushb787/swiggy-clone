import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() cartCount: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    // Replace 'restaurantName' with the actual restaurant name you want to track
    this.cartCount = this.cartService.getCartCount();
  }


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

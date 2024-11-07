import { Component, Input, } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './restaurant-details.component.html',
  styleUrl: './restaurant-details.component.css'
})
export class RestaurantDetailsComponent {
  @Input() restaurantName: string = '';
  @Input() rating: string = '';
  @Input() noOfRatings: string = '';
  @Input() offer: string = '';
  @Input() food: string = '';
  @Input() location: string = '';
  @Input() deliveryTime: string = '';

  isBestseller: boolean = false; 

  toggleButton() {
    this.isBestseller = !this.isBestseller; 
  }
}

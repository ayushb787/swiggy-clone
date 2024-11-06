import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  @Input() imageUrl: string = '';
  @Input() offer: string = '';
  @Input() restaurantName: string = '';
  @Input() rating: string = '';
  @Input() deliveryTime: string = '';
  @Input() food: string = '';
  @Input() location: string = '';
}

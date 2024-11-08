import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { Router } from '@angular/router';
import { restaurants } from './restaurants';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule, RestaurantCardComponent],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent {
  restaurants = restaurants;
  constructor(private router: Router) {}

  goToRestaurantDetails(id: number) {
    this.router.navigate(['/restaurant-details', id]);
  }
  

}

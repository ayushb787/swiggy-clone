import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { Router } from '@angular/router';
import { restaurants } from './restaurants';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule, RestaurantCardComponent],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent {
  restaurants = restaurants;
  filteredRestaurants: any[] = restaurants;
  noOfFiltersApplied: number = 0;

  filterStates = {
    fastDelivery: false,
    newOnSwiggy: false,
    rating4Plus: false,
    pureVeg: false,
    priceRange: false,
    offers: false,
    filterByPriceRange300to600: false,
    filterByPriceRangeLessThan300: false,
  };

  constructor(private router: Router) {
    this.applyFilters();
  }

  goToRestaurantDetails(id: number) {
    this.router.navigate(['/restaurant-details', id]);
  }

  applyFilters() {
    this.filteredRestaurants = this.restaurants.filter((restaurant) => {
      let isValid = true;
      
      if (this.filterStates.fastDelivery) {
        isValid = this.filterByFastDelivery(restaurant) && isValid;
      }
      if (this.filterStates.rating4Plus) {
        isValid = this.filterByRating4Plus(restaurant) && isValid;
      }
      if (this.filterStates.pureVeg) {
        isValid = this.filterByPureVeg(restaurant) && isValid;
      }
      if (this.filterStates.priceRange) {
        isValid = this.filterByPriceRange(restaurant) && isValid;
      }
      if (this.filterStates.offers) {
        isValid = this.filterByOffers(restaurant) && isValid;
      }
      if (this.filterStates.newOnSwiggy) {
        isValid = this.filterByNewOnSwiggy(restaurant) && isValid;
      }
      
      if (this.filterStates.filterByPriceRange300to600) {
        isValid = this.filterByPriceRange300to600(restaurant) && isValid;
      }

      if (this.filterStates.filterByPriceRangeLessThan300) {
        isValid = this.filterByPriceRangeLessThan300(restaurant) && isValid;
      }
      
      return isValid;
    });

    this.updateNoOfFiltersApplied();
  }

  filterByFastDelivery(restaurant: any): boolean {
    const minTime = this.extractMinDeliveryTime(restaurant.deliveryTime);
    return minTime <= 45;
  }

  filterByRating4Plus(restaurant: any): boolean {
    return parseFloat(restaurant.rating) >= 4.0;
  }

  filterByPureVeg(restaurant: any): boolean {
    return restaurant.pureVeg;
  }

  filterByPriceRange(restaurant: any): boolean {
    return this.filterStates.priceRange ? !!restaurant.offer : true;
  }

  filterByOffers(restaurant: any): boolean {
    return restaurant.offer.trim() !== '';
  }

  filterByNewOnSwiggy(restaurant: any): boolean {
    return restaurant.newOnSwiggy;
  }

  extractMinDeliveryTime(deliveryTime: string): number {
    const timeRange = deliveryTime.split('-');  
    const minTime = parseInt(timeRange[0], 10); 
    return minTime;
  }
  
  filterByPriceRange300to600(restaurant: any): boolean {
    const priceRange = restaurant.priceRange;
    return priceRange === '₹300-₹600';
  }

  filterByPriceRangeLessThan300(restaurant: any): boolean {
    const priceRange = restaurant.priceRange;
    const priceRangeNumber = this.extractPrice(priceRange);
    return priceRangeNumber < 300;
  }
  
  extractPrice(priceRange: string): number {
    const match = priceRange.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  toggleFilter(filter: keyof typeof this.filterStates) {
    this.filterStates[filter] = !this.filterStates[filter];
    this.applyFilters(); 
  }

  updateNoOfFiltersApplied() {
    this.noOfFiltersApplied = Object.values(this.filterStates).filter(Boolean).length;
  }
}

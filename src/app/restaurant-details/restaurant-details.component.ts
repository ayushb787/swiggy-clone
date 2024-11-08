import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { items } from './items';
import { restaurants } from '../restaurants/restaurants';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  @Input() restaurantName: string = '';
  @Input() rating: string = '';
  @Input() noOfRatings: string = '';
  @Input() offer: string = '';
  @Input() food: string = '';
  @Input() location: string = '';
  @Input() deliveryTime: string = '';
  
  cartCount: number = 0;
  isBestseller: boolean = false;
  restaurant: any;

  constructor(private route: ActivatedRoute) {} 
  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log("Fetched ID from route:", id);  
    this.restaurant = this.getRestaurantById(id);

    if (this.restaurant) {
      this.restaurantName = this.restaurant.restaurantName;
      this.rating = this.restaurant.rating;
      this.noOfRatings = this.restaurant.noOfRatings;
      this.offer = this.restaurant.offer;
      this.food = this.restaurant.food;
      this.location = this.restaurant.location;
      this.deliveryTime = this.restaurant.deliveryTime;
    } else {
      console.error('Restaurant not found!');
    }
  }

  getRestaurantById(id: number): any {
    return restaurants.find((restaurant) => restaurant.id === id);
  }

  toggleButton() {
    this.isBestseller = !this.isBestseller;
  }

  items = items;

  toggleAdd(item: any): void {
    if (item.count === 0) {
      item.count = 1;
      this.cartCount++;
    }
  }

  incrementCount(item: any): void {
    item.count++;
    this.cartCount++;
  }

  decrementCount(item: any): void {
    if (item.count > 0) {
      item.count--;
      this.cartCount--;
    }
    // console.log(item.name, ' - ', item.count);
    // console.log('Cart count:', this.cartCount);
  }
}

import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { items } from './items';  // Assuming 'items' is an array of Item objects
import { restaurants } from '../restaurants/restaurants';
import { MenuItem } from './menuitem';
import { CartService } from '../services/cart.service'; 

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

  // Load items array with Item[] type
  items: MenuItem[] = items;

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {} 

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
      
      this.loadCartItems();
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

  toggleAdd(item: MenuItem): void {
    if (item.count === 0) {
      item.count = 1;
      this.cartCount++;
    }
    this.saveCartData();
  }

  incrementCount(item: MenuItem): void {
    item.count++;
    this.cartCount++;
    this.saveCartData();
  }

  decrementCount(item: MenuItem): void {
    if (item.count > 0) {
      item.count--;
      this.cartCount--;
    }
    this.saveCartData();
  }

  saveCartData(): void {
    const selectedItems = this.items.filter(item => item.count > 0);
    const cartData = {
      items: selectedItems,
      cartCount: this.cartCount
    };
    const storedCart = JSON.parse(localStorage.getItem('cartItems') || '{}');
    storedCart[this.restaurantName] = cartData;
    localStorage.setItem('cartItems', JSON.stringify(storedCart));
    localStorage.setItem('globalCartCount', JSON.stringify(this.cartCount));

    this.cdr.detectChanges();
  }

  // loadCartItems(): void {
  //   const storedCart = JSON.parse(localStorage.getItem('cartItems') || '{}');
  //   if (storedCart[this.restaurantName]) {
  //     const cartItems = storedCart[this.restaurantName].items;
  //     this.items = this.items.map((item) => {
  //       const cartItem = cartItems.find((ci: MenuItem) => ci.name === item.name);
  //       return cartItem ? { ...item, count: cartItem.count } : item;
  //     });
  //     this.cartCount = storedCart[this.restaurantName].cartCount;
  //   }
  // }
  loadCartItems(): void {
    const storedCart = JSON.parse(localStorage.getItem('cartItems') || '{}');
  
    this.cartCount = Number(localStorage.getItem('globalCartCount')) || 0;
  
    if (storedCart[this.restaurantName]) {
      const cartItems = storedCart[this.restaurantName].items;
      this.items = this.items.map((item) => {
        const cartItem = cartItems.find((ci: MenuItem) => ci.name === item.name);
        return cartItem ? { ...item, count: cartItem.count } : item;
      });
    }
  }
}

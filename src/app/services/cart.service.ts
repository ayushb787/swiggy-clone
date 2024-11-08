// cart.service.ts
import { Injectable } from '@angular/core';
import { MenuItem } from '../restaurant-details/menuitem';  // Import Item type

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

  // Get the global cart count from localStorage
  getCartCount(): number {
    return Number(localStorage.getItem('globalCartCount')) || 0;
  }

  // Get the global cart items from localStorage
  getCartItems(): MenuItem[] {
    return JSON.parse(localStorage.getItem('globalCartItems') || '[]');
  }

  // Save the global cart data (items and cart count) to localStorage
  saveCartData(items: MenuItem[], cartCount: number): void {
    localStorage.setItem('globalCartItems', JSON.stringify(items));
    localStorage.setItem('globalCartCount', cartCount.toString());
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
  standalone: true,
  imports: [CommonModule] 
})
export class BillComponent implements OnInit {
  cartItems: any[] = [];
  subtotal: number = 0;

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    const storedCart = JSON.parse(localStorage.getItem('cartItems') || '{}');
    this.cartItems = [];
    for (const restaurant in storedCart) {
      if (storedCart.hasOwnProperty(restaurant)) {
        const items = storedCart[restaurant].items;
        items.forEach((item: any) => {
          if (item.count > 0) {
            this.cartItems.push({
              name: item.name,
              price: item.price,
              count: item.count
            });
          }
        });
      }
    }
    this.subtotal = this.cartItems.reduce((acc, item) => acc + (item.price * item.count), 0);
  }
}

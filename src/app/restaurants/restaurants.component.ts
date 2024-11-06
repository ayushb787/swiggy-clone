import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule, RestaurantCardComponent],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent {
  restaurants = [
    {
      imageUrl: 'p1.avif',
      offer: '',
      restaurantName: 'Sangeetha Veg Restaurant',
      rating: '4.6',
      deliveryTime: '40-45 mins',
      food: 'South Indian, North Indian, Chinese',
      location: 'Urapakkam'
    },
    {
      imageUrl: 'p2.avif',
      offer: '₹100 OFF ABOVE ₹399',
      restaurantName: 'Sree Gupta Bhavan',
      rating: '4.6',
      deliveryTime: '35-40 mins',
      food: 'Sweets, Chaat',
      location: 'Sri Nagar'
    },
    {
      imageUrl: 'p3.avif',
      offer: '',
      restaurantName: 'A2B - Adyar Ananda Bhavan',
      rating: '4.4',
      deliveryTime: '45-50 mins',
      food: 'South Indian, Sweets, Chinese',
      location: 'Padur'
    },
    {
      imageUrl: 'p4.avif',
      offer: '',
      restaurantName: 'Sri Krishna Bhavan',
      rating: '4.5',
      deliveryTime: '35-40 mins',
      food: 'South Indian, Indian, Chinese, Juices',
      location: 'Padur'
    },
    {
      imageUrl: 'p5.avif',
      offer: '',
      restaurantName: 'Geetham Veg Restaurant',
      rating: '4.5',
      deliveryTime: '60-65 mins',
      food: 'South Indian, North Indian, Tandoor, Chinese, Chaat, Ice Cream',
      location: 'Medavakkam'
    },
    {
      imageUrl: 'p6.avif',
      offer: '',
      restaurantName: 'Shri Balaajee Bhavan',
      rating: '4.6',
      deliveryTime: '55-60 mins',
      food: 'North Indian, Chinese, South Indian, Tandoor',
      location: 'Chromepet'
    },
    {
      imageUrl: 'p7.avif',
      offer: '',
      restaurantName: 'Kumarakom',
      rating: '4.4',
      deliveryTime: '65-70 mins',
      food: 'Kerala, South Indian, Chinese',
      location: 'Pallikaranai'
    },
    {
      imageUrl: 'p8.avif',
      offer: '',
      restaurantName: 'EatFit',
      rating: '4.3',
      deliveryTime: '60-65 mins',
      food: 'Chinese, Healthy Food, Tandoor, Pizzas, Thalis, Biryani',
      location: 'Postal Colony'
    }
  ];
  

}

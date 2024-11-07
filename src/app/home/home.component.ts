import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { BestComponentComponent } from '../best-component/best-component.component';
import { RestaurantDetailsComponent } from '../restaurant-details/restaurant-details.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RestaurantsComponent, BestComponentComponent, RestaurantDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  buttonOptions1: string[] = [
    'Best Restaurants in Bangalore', 'Best Restaurants in Pune', 'Best Restaurants in Mumbai',
    'Best Restaurants in Delhi', 'Best Restaurants in Hyderabad', 'Best Restaurants in Kolkata',
    'Best Restaurants in Chennai', 'Best Restaurants in Chandigarh', 'Best Restaurants in Ahmedabad',
    'Best Restaurants in Jaipur', 'Best Restaurants in Nagpur', 'Best Restaurants in Bhubaneswar',
    'Best Restaurants in Kochi', 'Best Restaurants in Surat', 'Best Restaurants in Dehradun',
    'Best Restaurants in Ludhiana', 'Best Restaurants in Patna', 'Best Restaurants in Mangaluru',
    'Best Restaurants in Bhopal', 'Best Restaurants in Gurgaon', 'Best Restaurants in Coimbatore',
    'Best Restaurants in Agra', 'Best Restaurants in Noida', 'Best Restaurants in Vijayawada',
    'Best Restaurants in Guwahati', 'Best Restaurants in Mysore', 'Best Restaurants in Pondicherry',
    'Best Restaurants in Thiruvananthapuram', 'Best Restaurants in Ranchi', 'Best Restaurants in Vizag',
    'Best Restaurants in Udaipur', 'Best Restaurants in Vadodara'
  ];

  heading1: string = 'Best Places to Eat Across Cities';


  buttonOptions2: string[] = [
    'Chinese Restaurant Near Me',
    'South Indian Restaurant Near Me',
    'Indian Restaurant Near Me',
    'Kerala Restaurant Near Me',
    'Korean Restaurant Near Me',
    'North Indian Restaurant Near Me',
    'Seafood Restaurant Near Me',
    'Bengali Restaurant Near Me',
    'Punjabi Restaurant Near Me',
    'Italian Restaurant Near Me',
    'Andhra Restaurant Near Me',
    'Biryani Restaurant Near Me',
    'Japanese Restaurant Near Me',
    'Arabian Restaurant Near Me',
    'Fast Food Restaurant Near Me',
    'Jain Restaurant Near Me',
    'Gujarati Restaurant Near Me',
    'Thai Restaurant Near Me',
    'Pizzas Restaurant Near Me',
    'Asian Restaurant Near Me',
    'Cafe Restaurant Near Me',
    'Continental Restaurant Near Me',
    'Mexican Restaurant Near Me',
    'Mughlai Restaurant Near Me',
    'Sushi Restaurant Near Me',
    'Mangalorean Restaurant Near Me',
    'Tibetan Restaurant Near Me',
    'Barbecue Restaurant Near Me',
    'Maharashtrian Restaurant Near Me',
    'Nepalese Restaurant Near Me',
    'Rajasthani Restaurant Near Me',
    'Turkish Restaurant Near Me'
  ];
  heading2: string = 'Best Cuisines Near Me';

  buttonOptions3: string[] = [
    'Explore Restaurants Near Me',
    'Explore Top Rated Restaurants Near Me'
  ]
  heading3: string = 'Explore Every Restaurants Near Me';
  showAll3: boolean = true;
}

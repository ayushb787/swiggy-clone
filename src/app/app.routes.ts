import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'restaurant-details', component: RestaurantDetailsComponent }
];

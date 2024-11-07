import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

export const routes: Routes = [
    {
    path: '',
    component: RestaurantDetailsComponent
    },
    { path: 'restaurant1', component:  RestaurantDetailsComponent},
];

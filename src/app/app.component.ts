import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RestaurantDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggyclone';
  
}

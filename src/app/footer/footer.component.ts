import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  cityDropdown: string = 'fas fa-chevron-down';

  pressedCityDrowdown() {
    if(this.cityDropdown === 'fas fa-chevron-up'){
      this.cityDropdown = 'fas fa-chevron-down';
    }else{
      this.cityDropdown = 'fas fa-chevron-up';
    }
  }
}

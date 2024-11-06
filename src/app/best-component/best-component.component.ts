import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-best-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-component.component.html',
  styleUrl: './best-component.component.css'
})
export class BestComponentComponent {

  @Input() heading: string = '';
  @Input() buttonOptions: string[] = [];
  @Input() showAll: boolean = false;

  toggleShowMore() {
    this.showAll = !this.showAll;
  }

  get displayedButtons() {
    return this.showAll ? this.buttonOptions : this.buttonOptions.slice(0, 11);
  }
}

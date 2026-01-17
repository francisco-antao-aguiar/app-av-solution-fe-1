import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-title',
  standalone: true,
  template: `
    <h2 class="text-xl font-bold text-gray-900">
      {{ text }}
    </h2>
  `,
})
export class CardTitleComponent {
  @Input() text!: string;
}

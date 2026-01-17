import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-subtitle',
  standalone: true,
  template: `
    <p class="mt-1 text-sm text-gray-500">
      {{ text }}
    </p>
  `,
})
export class CardSubtitleComponent {
  @Input() text!: string;
}

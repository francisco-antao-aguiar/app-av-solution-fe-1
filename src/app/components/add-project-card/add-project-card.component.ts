import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'add-project-card-component',
  imports: [CommonModule],
  templateUrl: './add-project-card.component.html',
  styleUrl: './add-project-card.component.css',
})
export class AddProjectCardComponent {
  @Output() openModal = new EventEmitter<void>();

   onClick() {
    this.openModal.emit();
  }
}

import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesModel} from '../../pages/home/home.model';

@Component({
  selector: 'services-component',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  @Input() data!: ServicesModel;
}

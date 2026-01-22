import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsModel} from '../../pages/home/home.model';

@Component({
  selector: 'contact-us-component',
  imports: [CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  @Input() data!: ContactUsModel;
}

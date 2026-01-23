import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsModel} from '../../pages/home/home.model';

@Component({
  selector: 'footer-component',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() data!: ContactsModel;
}

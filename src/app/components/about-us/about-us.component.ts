import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsModel} from '../../pages/home/home.model';

@Component({
  selector: 'about-us-component',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  @Input() data!: AboutUsModel;
}

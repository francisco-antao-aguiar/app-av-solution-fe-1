import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {HomeBannerModel} from '../../pages/home/home.model';

@Component({
  selector: 'home-banner-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css',
})
export class HomeBannerComponent {
  @Input() data!: any;

  ngOnInit() {
    console.log(this.data);
  }

}

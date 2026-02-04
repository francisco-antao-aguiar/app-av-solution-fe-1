import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UpdateLabelsButton} from "../update-button/update-button.component";

@Component({
  selector: 'home-banner-component',
  imports: [CommonModule, RouterLink, UpdateLabelsButton],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css',
})
export class HomeBannerComponent {
  @Input() data!: any;
  protected pageId: string = 'homeBanner';
  protected authService = inject(AuthService);

  updateLabels(event: any) {
    this.data = event;
  }
  ngOnInit() {
    console.log(this.data);
  }

}

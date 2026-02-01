import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {HomeBannerModel} from '../../pages/home/home.model';
import { AuthService } from '../../services/auth.service';
import { UpdateProjectButton } from "../update-button/update-button.component";

@Component({
  selector: 'home-banner-component',
  imports: [CommonModule, RouterLink, UpdateProjectButton],
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

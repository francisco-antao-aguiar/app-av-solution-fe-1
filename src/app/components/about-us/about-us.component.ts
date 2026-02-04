import {Component, inject, Input, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsCharacteristicModel} from '../../pages/home/home.model';
import {AuthService} from '../../services/auth.service';
import {UpdateLabelsButton} from "../update-button/update-button.component";

@Component({
  selector: 'about-us-component',
  imports: [CommonModule, UpdateLabelsButton],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  @Input() data!: any;
  protected pageId: string = 'aboutUs';
  protected authService = inject(AuthService);

  updateLabels(event: any) {
    this.data = {
      ...event,
      characteristics: this.buildCards(event),
    };
    this.data.characteristics.ignore = true
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.data = {
        ...this.data,
        characteristics: this.buildCards(this.data),
      };
      this.data.characteristics.ignore = true
    }
  }

  private buildCards(data: any): AboutUsCharacteristicModel[] {
      return [
        {
          id: '1',
          text: data.characteristics1,
        },
        {
          id: '2',
          text: data.characteristics2,
        },
        {
          id: '3',
          text: data.characteristics3,
        },
        {
          id: '4',
          text: data.characteristics4,
        },
      ];
    }
}

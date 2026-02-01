import {Component, inject, Input, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesCardModel, ServicesModel} from '../../pages/home/home.model';
import { AuthService } from '../../services/auth.service';
import { UpdateProjectButton } from "../update-button/update-button.component";

@Component({
  selector: 'services-component',
  imports: [CommonModule, UpdateProjectButton],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  @Input() data!: any;
  protected pageId: string = 'services';
  protected authService = inject(AuthService);

  updateLabels(event: any) {
    this.data = {
        ...event,
        cards: this.buildCards(event),
      };
      this.data.cards.ignore = true
  } 
   ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.data = {
        ...this.data,
        cards: this.buildCards(this.data),
      };
      this.data.cards.ignore = true
    }
  }
  
  private buildCards(data: any): ServicesCardModel[] {
    return [
      {
        id: '1',
        icon: data.card1Icon,
        title: data.card1Title,
        description: data.card1,
      },
      {
        id: '2',
        icon: data.card2Icon,
        title: data.card2Title,
        description: data.card2,
      },
      {
        id: '3',
        icon: data.card3Icon,
        title: data.card3Title,
        description: data.card3,
      },
      {
        id: '4',
        icon: data.card4Icon,
        title: data.card4Title,
        description: data.card4,
      },
    ];
  }
}

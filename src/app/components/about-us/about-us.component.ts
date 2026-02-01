import {Component, Input, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsCharacteristicModel, AboutUsModel} from '../../pages/home/home.model';

@Component({
  selector: 'about-us-component',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  @Input() data!: AboutUsModel;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.data = {
        ...this.data,
        characteristics: this.buildCards(this.data),
      };
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

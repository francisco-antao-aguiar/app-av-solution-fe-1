import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsModel} from '../../pages/home/home.model';

@Component({
  selector: 'fade-light-to-dark-component',
  imports: [CommonModule],
  templateUrl: './fade-light-to-dark.component.html',
  styleUrl: './fade-light-to-dark.component.css',
})
export class FadeLightToDarkComponent {
  private _startColor?: string;
  private _endColor?: string;

  @Input() set startColor(value: string | undefined) {
    this._startColor = value;
  }

  @Input() set endColor(value: string | undefined) {
    this._endColor = value;
  }

  get startColor(): string | undefined {
    return this._startColor;
  }

  get endColor(): string | undefined {
    return this._endColor;
  }
}

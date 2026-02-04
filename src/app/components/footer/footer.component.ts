import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpdateLabelsButton} from "../update-button/update-button.component";
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'footer-component',
  imports: [CommonModule, UpdateLabelsButton],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() data!: any;
  protected pageId: string = 'contacts';
  protected authService = inject(AuthService);

  updateLabels(event: any) {
    this.data = event;
  }
}

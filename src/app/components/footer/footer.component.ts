import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsModel} from '../../pages/home/home.model';
import { UpdateProjectButton } from "../update-button/update-button.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'footer-component',
  imports: [CommonModule, UpdateProjectButton],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() data!: ContactsModel;
  protected authService = inject(AuthService);
}

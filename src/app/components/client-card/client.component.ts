import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {CreateClient} from './util/app-create-project-button/app-create-project-button.component';

@Component({
  selector: 'clients-component',
  imports: [CommonModule, CreateClient],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {
  @Input() images!: string[];
  @Input() displayType: 'banner' | 'grid' = 'grid';
  protected authService = inject(AuthService);
}

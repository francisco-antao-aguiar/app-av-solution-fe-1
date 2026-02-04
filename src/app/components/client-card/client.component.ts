import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {CreateClient} from './util/app-create-project-button/app-create-client-button.component';
import {ClientModel} from './util/app-create-project-button/client-payload.model';
import {DeleteClientButton} from './util/app-delete-client-button/app-delete-client-button.component';

@Component({
  selector: 'clients-component',
  imports: [CommonModule, CreateClient, DeleteClientButton],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {
  @Input() clients!: ClientModel[];
  @Input() displayType: 'banner' | 'grid' = 'grid';
  protected authService = inject(AuthService);

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  clientsLabels(event: any) {
    this.clients.push(event);
  }
}

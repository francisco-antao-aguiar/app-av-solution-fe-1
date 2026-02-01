import {ChangeDetectionStrategy, ChangeDetectorRef, Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs';
import {CreateClientModal} from './modal/app-create-project-card-modal.component';
import {ClientModel, ClientPayload} from './client-payload.model';

@Component({
  selector: 'app-create-client',
  imports: [CommonModule, CreateClientModal],
  templateUrl: './app-create-project-button.component.html',
  styleUrl: './app-create-project-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateClient {
  protected showModal: boolean = false;
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
  }

  protected openModal() {
    this.showModal = true;
  }

  protected closeModal() {
    this.showModal = false;
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }

  protected createClient(clientPayload: ClientPayload): void {
    this.isLoading.set(true);
    this.error.set(null);

    const imageFormData = new FormData();
    imageFormData.append('file', clientPayload.image);

    this.http
      .post<string>('api/images', imageFormData)
      .pipe(
        switchMap((imageId: string) => {
          const body: ClientModel = {
            url: clientPayload.url,
            image: imageId,
          };

          return this.http.post<ClientModel>(
            'api/client/create',
            body
          );
        })
      )
      .subscribe({
        next: (client) => {
          // this.projectsService.addProject(client);
          this.isLoading.set(false);
          this.closeModal();
        },
        error: (err) => {
          console.error(err);
          this.error.set('Failed to create client');
          this.isLoading.set(false);
        },
      });
  }
}

import {Component, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete-client-button',
  imports: [CommonModule],
  templateUrl: './app-delete-client-button.component.html',
  styleUrl: './app-delete-client-button.component.css',
})
export class DeleteClientButton {
  @Input() clientId!: string;
  showConfirm = false;
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);

  constructor(
    private http: HttpClient
  ) {
  }

  openConfirm() {
    this.showConfirm = true;
  }

  closeConfirm() {
    this.showConfirm = false;
  }

  confirmDelete(event: MouseEvent) {
    this.showConfirm = false;
    this.delete(event);
  }

  protected delete(event: MouseEvent): void {
    event.stopPropagation();
    this.isLoading.set(true);
    this.error.set(null);

    // call API
    this.http.delete(`/api/client/delete/${this.clientId}`).subscribe({
      next: () => {
        // update service
        // this.projectsService.deleteItem(this.clientId);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message || 'Failed to delete project');
        this.isLoading.set(false);
      }
    });
  }
}

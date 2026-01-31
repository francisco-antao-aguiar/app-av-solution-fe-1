import {Component, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ProjectsService} from '../services/projects.service';

@Component({
  selector: 'app-delete-button',
  imports: [CommonModule],
  templateUrl: './app-delete-project-button.component.html',
  styleUrl: './app-delete-project-button.component.css',
})
export class DeleteProjectButton {
  @Input() projectId!: string;

  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);

  constructor(
    private http: HttpClient,
    private projectsService: ProjectsService
  ) {
  }

  showConfirm = false;

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
    this.http.delete(`/api/project/delete/${this.projectId}`).subscribe({
      next: () => {
        // update service
        this.projectsService.deleteItem(this.projectId);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message || 'Failed to delete project');
        this.isLoading.set(false);
      }
    });
  }
}

import {Component, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ProjectsService} from '../../../../utils/services/projects.service';

@Component({
  selector: 'app-delete-detail-image-button',
  imports: [CommonModule],
  templateUrl: './app-delete-project-detail-image-button.component.html',
  styleUrl: './app-delete-project-detail-image-button.component.css',
})
export class DeleteProjectDetailButton {
  @Input() imageId!: string;
  showConfirm = false;
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);

  constructor(
    private http: HttpClient,
    private projectsService: ProjectsService
  ) {
  }

  openConfirm() {
    this.showConfirm = true;
  }

  closeConfirm() {
    this.showConfirm = false;
  }

  confirmDelete() {
    this.showConfirm = false;
    this.delete();
  }

  protected delete(): void {
    this.isLoading.set(true);
    this.error.set(null);

    // call API
    this.http.delete(`/api/project/delete/image/${this.imageId}`).subscribe({
      next: () => {
        // update service
        this.projectsService.deleteImage(this.imageId);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message || 'Failed to delete project');
        this.isLoading.set(false);
      }
    });
  }
}

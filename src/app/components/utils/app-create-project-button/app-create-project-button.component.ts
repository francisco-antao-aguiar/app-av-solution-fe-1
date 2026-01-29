import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ProjectsService} from '../services/projects.service';
import {ProjectsCardModel} from '../../../pages/projects/projects.model';
import {forkJoin, map, of, switchMap} from 'rxjs';
import {CreateProjectCardModal} from './modal/app-create-project-card-modal.component';
import {ProjectPayload} from './project-payload.model';

@Component({
  selector: 'app-create-project',
  imports: [CommonModule, CreateProjectCardModal],
  templateUrl: './app-create-project-button.component.html',
  styleUrl: './app-create-project-button.component.css',
})
export class CreateProjectCard {
  protected showModal: boolean = false;
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);

  constructor(
    private http: HttpClient,
    private projectsService: ProjectsService
  ) {
  }

  protected openModal() {
    this.showModal = true;
  }

  protected closeModal() {
    this.showModal = false;
  }

  protected create(
    projectPayload: ProjectPayload
  ): void {
    this.isLoading.set(true);
    this.error.set(null);

    const uploadImage$ = projectPayload.images.map(image => {
      const formData = new FormData();
      formData.append('file', image);

      return this.http.post<string>(`/api/images`, formData);
    });

    const upload$ = uploadImage$.length
      ? forkJoin(uploadImage$)
      : of([] as string[]);

    upload$.pipe(
      switchMap((imageIds: string[]) => {
        const newProject: ProjectsCardModel = {
          ...projectPayload.project,
          imageIds
        };

        return this.http.post<string>(`/api/project/create`, newProject).pipe(
          map((id: string) => ({
            ...newProject,
            id  // add the returned id
          }))
        );
      })
    ).subscribe({
      next: (projectCreated) => {
        const pathImagesIds = projectCreated.imageIds.map(imageId => `/api/images/${imageId}`)
        this.projectsService.addItem({
          ...projectCreated,
          imageIds: pathImagesIds
        });
        this.isLoading.set(false);
        this.showModal = false;
      },
      error: (err) => {
        this.error.set(err?.message || 'Failed to create project');
        this.isLoading.set(false);
      }
    });
  }
}

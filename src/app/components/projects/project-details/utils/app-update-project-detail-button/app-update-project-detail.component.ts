import {Component, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {forkJoin, map, of, switchMap} from 'rxjs';
import {ProjectPayload} from './project-detail-payload.model';
import {ProjectsCardModel} from '../../../../../pages/projects/projects.model';
import {ProjectsService} from '../../../../utils/services/projects.service';
import {CreateProjectCardModal} from './modal/app-update-project-detail-modal.component';

@Component({
  selector: 'app-update-project-detail',
  imports: [CommonModule, CreateProjectCardModal, CreateProjectCardModal],
  templateUrl: './app-update-project-detail.component.html',
  styleUrl: './app-update-project-detail.component.css',
})
export class CreateProjectCard {
  @Input() projectCard!: ProjectsCardModel;
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

  protected update(
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
        this.projectsService.addItem({
          ...projectCreated,
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

import {Component, signal} from '@angular/core';
import {ProjectsComponent} from '../../components/projects/projects.component';
import {ProjectsModel} from './projects.model';
import {HttpClient} from '@angular/common/http';
import {ProjectsService} from '../../components/utils/services/projects.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProjectsComponent,
  ],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.css',
})
export class ProjectsPage {
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);
  protected projects!: ReturnType<typeof toSignal<ProjectsModel | null>>;

  constructor(
    private http: HttpClient,
    protected projectsService: ProjectsService
  ) {
    this.fetchProject();
    this.projects = toSignal<ProjectsModel | null>(
      this.projectsService.projects$,
      {initialValue: null}
    );
  }

  protected fetchProject(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.http.get<ProjectsModel>(`/api/project`).subscribe({
      next: (data) => {
        // data.project = data.project.map(project => ({
        //   ...project,
        //   imageIds: project.imageIds?.map(
        //     imageId => `/api/images/${imageId}`
        //   )
        // }));

        this.projectsService.setProjects(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message || 'Failed to fetch project details endpoint');
        this.isLoading.set(false);
      }
    });
  }
}

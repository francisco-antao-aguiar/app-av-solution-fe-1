import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProjectsCardModel, ProjectsModel} from '../projects.model';
import {ProjectsPageComponent} from '../../../components/projects/project-details/project-detail.component';
import {HttpClient} from '@angular/common/http';
import {ProjectsService} from '../../../components/utils/services/projects.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'projects-detail-page',
  standalone: true,
  imports: [CommonModule, ProjectsPageComponent],
  templateUrl: './project-detail.page.html',
  styleUrl: './project-detail.page.css',
})
export class ProjectDetailPage {

  protected readonly response = signal<ProjectsCardModel | null>(null);
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);
  protected projects!: ReturnType<typeof toSignal<ProjectsModel | null>>;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              protected projectsService: ProjectsService) {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.fetchProjectDetails(id);

    this.projects = toSignal<ProjectsModel | null>(
      this.projectsService.projects$,
      {initialValue: null}
    );
  }

  protected fetchProjectDetails(id: string): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.http.get<ProjectsCardModel>(`/api/project/${id}`).subscribe({
      next: (data) => {
        // data.imageIds = data.imageIds?.map(imageId => `/api/images/${imageId}`)
        this.projectsService.setProjects({
          title: "",
          subtitle: "",
          project: [data],
        })
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message || 'Failed to fetch project details endpoint');
        this.isLoading.set(false);
      }
    });
  }
}

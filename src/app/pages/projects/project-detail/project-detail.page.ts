import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProjectsCardModel} from '../projects.model';
import {ProjectsPageComponent} from '../../../components/projects/project-details/project-detail.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'projects-detail-page',
  standalone: true,
  imports: [CommonModule, ProjectsPageComponent],
  templateUrl: './project-detail.page.html',
  styleUrl: './project-detail.page.css',
})
export class ProjectDetailPage implements OnInit {

  protected readonly response = signal<ProjectsCardModel | null>(null);
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.fetchProjectDetails(id);
  }

  protected fetchProjectDetails(id: string): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.http.get<ProjectsCardModel>(`/api/project/${id}`).subscribe({
      next: (data) => {
        // data.imageIds = data.imageIds?.map(imageId => `/api/images/${imageId}`)
        this.response.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message || 'Failed to fetch project details endpoint');
        this.isLoading.set(false);
      }
    });
  }
}

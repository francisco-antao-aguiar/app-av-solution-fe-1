import {Component, OnInit, signal} from '@angular/core';
import {HomeBannerComponent} from "../../components/home-banner/home-banner.component";
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import {ServicesComponent} from "../../components/services/services.component";
import {FadeLightToDarkComponent} from '../../components/fade-light-to-dark/fade-light-to-dark.component';
import {FadeDarkToLightComponent} from "../../components/fade-dark-to-light/fade-dark-to-light.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {ProjectsPreviewComponent} from '../../components/projects/projects-preview/projects-preview.component';
import {HttpClient} from '@angular/common/http';
import {ProjectsModel} from '../projects/projects.model';
import {ClientComponent} from '../../components/client-card/client.component';
import {ClientModel} from '../../components/client-card/util/app-create-project-button/client-payload.model';

@Component({
  selector: 'app-home',
  imports: [HomeBannerComponent, AboutUsComponent, ProjectsPreviewComponent, ServicesComponent, FadeLightToDarkComponent, FadeDarkToLightComponent, FooterComponent, ProjectsPreviewComponent, ProjectsPreviewComponent, ProjectsPreviewComponent, ProjectsPreviewComponent, ClientComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage implements OnInit {
  protected readonly response = signal<ProjectsModel | null>(null);
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly homeData: any = signal<string | null>(null);
  protected readonly hasLabels = signal(false);
  protected readonly clients = signal<ClientModel[] | null>(null);
  constructor(private http: HttpClient) {
    this.fetchLabels();
  }

  ngOnInit() {
    this.fetchProjectHome();
    this.fetchClients();
  }

  protected fetchLabels(): void {
    this.isLoading.set(true);
    this.http.get<any>(`/api/labels`).subscribe({
      next: (data) => {
        this.hasLabels.set(true);
        this.homeData.set(data);
      },
    });
  }

  protected fetchClients(): void {
    this.http.get<ClientModel[]>(`/api/client`).subscribe({
      next: (data) => {
        this.clients.set(data);
      },
    });
  }

  protected fetchProjectHome(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.http.get<ProjectsModel>(`/api/project`).subscribe({
      next: (data) => {
        // data.project = data.project.map(
        //   project => {
        //     return {...project, imageIds: project.imageIds?.map(imageId => `/api/images/${imageId}`)}
        //   }
        // );
        this.response.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message || 'Failed to fetch project details endpoint');
        this.isLoading.set(false);
      }
    });
  }

  protected clientImages = [
    "assets/home/clients/1.jpg",
    "assets/home/clients/2.jpg",
    "assets/home/clients/3.png",
    "assets/home/clients/4.jpg",
    "assets/home/clients/5.jpg",
    "assets/home/clients/6.png",
    "assets/home/clients/7.png",
    "assets/home/clients/8.png",
    "assets/home/clients/9.png",
    "assets/home/clients/10.jpg",
    "assets/home/clients/11.png",
    "assets/home/clients/12.png",
    "assets/home/clients/13.jpg",
    "assets/home/clients/14.jpg",
  ]
}

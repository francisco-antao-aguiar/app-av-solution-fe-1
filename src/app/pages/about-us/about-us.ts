import {Component, OnInit, signal} from '@angular/core';
import {ClientComponent} from '../../components/client-card/client.component';
import {HttpClient} from '@angular/common/http';
import {ClientModel} from '../../components/client-card/util/app-create-project-button/client-payload.model';

@Component({
  selector: 'app-about-us',
  imports: [
    ClientComponent
  ],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs implements OnInit {
  protected readonly clients = signal<ClientModel[] | null>(null);
  protected readonly isLoadingClients = signal(false);
  protected readonly errorClients = signal<string | null>(null);
  protected readonly homeData: any = signal<string | null>(null);
  protected readonly hasLabels = signal(false);

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchClients();
  }

  protected fetchClients(): void {
    this.isLoadingClients.set(true);
    this.errorClients.set(null);

    this.http.get<ClientModel[]>(`/api/client`).subscribe({
      next: (data) => {
        this.clients.set(data);
        this.isLoadingClients.set(false);
      },
      error: (err) => {
        this.errorClients.set(err?.message || 'Failed to fetch project details endpoint');
        this.isLoadingClients.set(false);
      }
    });
  }
}

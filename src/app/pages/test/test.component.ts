import {Component, OnInit, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {CardComponent} from '../../components/card/card.component';
import {CardTitleComponent} from '../../components/card/card-title.component';
import {CardSubtitleComponent} from '../../components/card/card-subtitle.component';

@Component({
  selector: 'app-test',
  imports: [CommonModule, CardComponent, CardTitleComponent, CardSubtitleComponent, CardComponent],
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  protected readonly response = signal<string | null>(null);
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchHelloWorld();
  }

  protected fetchHelloWorld(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.http.get('/api/hello-world', { responseType: 'text' }).subscribe({
      next: (data) => {
        this.response.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message || 'Failed to fetch hello-world endpoint');
        this.isLoading.set(false);
      }
    });
  }
}

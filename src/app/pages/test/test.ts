import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.html',
  styleUrl: './test.css'
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

    this.http.get('/hello-world', { responseType: 'text' }).subscribe({
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

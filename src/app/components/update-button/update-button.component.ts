import {Component, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { UpdateLabelsModal } from "../update-labels-modal/update-labels-modal.component";

@Component({
  selector: 'app-update-project-button',
  imports: [CommonModule, UpdateLabelsModal],
  templateUrl: './update-button.component.html',
  styleUrl: './update-button.component.css',
})
export class UpdateProjectButton {
  @Input() input!: any;
  @Input() pageId!: string;
  protected showModal: boolean = false;
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  protected openModal() {
    this.showModal = true;
  }

  protected closeModal() {
    this.showModal = false;
  }

  protected update(projectPayload: any): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.http.put(`/api/labels`, projectPayload).subscribe({
      next: (response) => {
        console.log('Project updated successfully', response);  
        this.isLoading.set(false);
        this.closeModal();
      },
      error: (err) => {
        this.error.set(err?.message || 'Failed to update project');
        this.isLoading.set(false);
      }
    });
  }
}

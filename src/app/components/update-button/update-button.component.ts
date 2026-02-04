import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  signal
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {UpdateLabelsModal} from "../update-labels-modal/update-labels-modal.component";
import {switchMap} from 'rxjs';

@Component({
  selector: 'app-update-labels-button',
  imports: [CommonModule, UpdateLabelsModal],
  templateUrl: './update-button.component.html',
  styleUrl: './update-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateLabelsButton {
  @Input() input!: any;
  @Input() pageId!: string;
  @Input() withImage: boolean = false;
  @Output() labelsUpdatedEvent = new EventEmitter<any>();
  protected showModal: boolean = false;
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  protected openModal() {
    this.showModal = true;
  }

  protected closeModal() {
    this.showModal = false;
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }

  protected update(payload: any): void {
    if (!this.withImage || !payload.image) {
      this.isLoading.set(true);
      this.error.set(null);
      this.http.put(`/api/labels`, payload).subscribe({
        next: (response) => {
          console.log('Project updated successfully', response);
          this.isLoading.set(false);
          this.closeModal();
          this.labelsUpdatedEvent.emit(payload[this.pageId]);
        },
        error: (err) => {
          this.error.set(err?.message || 'Failed to update project');
          this.isLoading.set(false);
        }
      });
    } else {
      this.isLoading.set(true);
      this.error.set(null);
      const imageFormData = new FormData();
      imageFormData.append('file', payload.image);

      this.http
        .post<string>('api/images', imageFormData)
        .pipe(
          switchMap((imageId: string) => {
            payload[this.pageId].image = imageId;
            payload.image = undefined;

            return this.http.put(`/api/labels`, payload);
          })
        )
        .subscribe({
          next: (response) => {
            console.log('Project updated successfully', response);
            this.isLoading.set(false);
            this.closeModal();
            this.labelsUpdatedEvent.emit(payload[this.pageId]);
          },
          error: (err) => {
            console.error(err);
            this.error.set('Failed to create client');
            this.isLoading.set(false);
          },
        });
    }
  }
}

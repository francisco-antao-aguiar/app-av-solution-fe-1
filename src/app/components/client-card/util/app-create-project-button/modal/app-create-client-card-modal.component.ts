import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ClientPayload} from '../client-payload.model';

interface ImagePreview {
  file?: File;
  url: string;
}


@Component({
  selector: 'app-create-client-modal',
  templateUrl: './app-create-client-card-modal.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class CreateClientModal {
  @Output() newProjectInfo = new EventEmitter<ClientPayload>();
  @Output() close = new EventEmitter<void>();

  form: FormGroup;

  image: ImagePreview = {
    file: undefined,
    url: ''
  };

  imagePreview: string | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      url: [''],
    });
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    this.image.file = file;

    // 🔥 synchronous + CD-safe
    this.imagePreview = URL.createObjectURL(file);
  }

  removeImage() {
    this.image.file = undefined;
    this.imagePreview = null;
  }

  submit() {
    if (this.form.invalid) return;

    const payload: ClientPayload = {
      ...this.form.value,
      image: this.image?.file!,
    };

    this.newProjectInfo.emit(payload);
  }
}

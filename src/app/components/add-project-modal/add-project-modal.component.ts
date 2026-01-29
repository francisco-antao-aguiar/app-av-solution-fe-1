import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface ImagePreview {
  file: File;
  url: string;
}

@Component({
  selector: 'add-project-modal',
  templateUrl: './add-project-modal.component.html',
  imports: [CommonModule, ReactiveFormsModule ],
})
export class AddProjectModalComponent {
  @Output() close = new EventEmitter<void>();

  form: FormGroup;
  images: ImagePreview[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      subtitle: [''],
      description: ['']
    });
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    Array.from(input.files).forEach(file => {
      this.images.push({
        file,
        url: URL.createObjectURL(file)
      });
    });

    input.value = '';
  }

  removeImage(index: number) {
    URL.revokeObjectURL(this.images[index].url);
    this.images.splice(index, 1);
  }

  submit() {
    if (this.form.invalid) return;

    const payload = {
      ...this.form.value,
      images: this.images.map(i => i.file)
    };

    console.log(payload);
    this.close.emit();
  }
}
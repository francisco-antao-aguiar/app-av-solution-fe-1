import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProjectPayload} from '../project-payload.model';

interface ImagePreview {
  file: File;
  url: string;
}

@Component({
  selector: 'app-create-project-modal',
  templateUrl: './app-create-project-card-modal.component.html',
  imports: [CommonModule, ReactiveFormsModule ],
})
export class CreateProjectCardModal {
  @Output() newProjectInfo = new EventEmitter<ProjectPayload>();
  @Output() close = new EventEmitter<ProjectPayload>();

  form: FormGroup;
  images: ImagePreview[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      subtitle: [''],
      description: [''],
      location: [''],
      year: [null],
      totalArea: [null],
      duration: [null],
      durationUnit: ['']
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

    const images = this.images.map(i => i.file)

    const payload: ProjectPayload = {
      project: {
        ...this.form.value,
        location: '',
        year: '',
        totalArea: '',
        duration: '',
        durationUnit: '',
      },
      images
    };

    console.log(payload);
    this.newProjectInfo.emit(payload);
  }
}

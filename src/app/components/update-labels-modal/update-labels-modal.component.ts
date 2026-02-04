import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

interface ImagePreview {
  file?: File;
}

@Component({
  selector: 'app-update-labels-modal',
  templateUrl: './update-labels-modal.component.html',
  styleUrl: './update-labels-modal.component.css',
  imports: [CommonModule, ReactiveFormsModule],
})
export class UpdateLabelsModal {
  @Input() labels!: any;
  @Input() pageId!: string;
  @Input() withImage: boolean = false;
  @Output() updateLabelFunc = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();


  image: ImagePreview = {
    file: undefined,
  };
  imagePreview: string | null = null;

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['labels'] && this.labels) {
      this.buildForm();
    }
  }

   private buildForm() {
    this.form = this.fb.group({});
    Object.keys(this.labels).forEach(key => {
      if(this.labels[key]?.ignore !== true) {
        this.form.addControl(
          key,
          new FormControl(this.labels[key], Validators.required)
        );
      }
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


    const payload: any = {
      [this.pageId]: {
        ...this.form.value,
      },
      image: this.image?.file!,
    };
    this.updateLabelFunc.emit(payload);
  }
}

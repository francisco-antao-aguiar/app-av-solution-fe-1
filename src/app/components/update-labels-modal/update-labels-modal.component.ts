import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ProjectsCardModel } from '../../pages/projects/projects.model';

@Component({
  selector: 'app-update-labels-modal',
  templateUrl: './update-labels-modal.component.html',
  styleUrl: './update-labels-modal.component.css',
  imports: [CommonModule, ReactiveFormsModule],
})
export class UpdateLabelsModal {
  @Input() labels!: any;
  @Input() pageId!: string;
  @Output() updateLabelFunc = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

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
  
  submit() {
    if (this.form.invalid) return;


    const payload: any = {
      [this.pageId]: {
        ...this.form.value,
      },
    };
    console.log(payload);
    this.updateLabelFunc.emit(payload);
  }
}

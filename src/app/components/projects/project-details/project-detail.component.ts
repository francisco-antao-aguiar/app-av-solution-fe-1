import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsCardModel} from '../../../pages/projects/projects.model';

@Component({
  selector: 'projects-detail-component',
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectsPreviewComponent {
  @Input() data!: ProjectsCardModel;
}

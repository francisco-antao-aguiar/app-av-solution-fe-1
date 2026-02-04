import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectCardComponent} from '../project-card/project-card.component';
import {RouterLink} from '@angular/router';
import {ProjectsModel} from '../../../pages/projects/projects.model';

@Component({
  selector: 'projects-preview-component',
  imports: [CommonModule, ProjectCardComponent, RouterLink],
  templateUrl: './projects-preview.component.html',
  styleUrl: './projects-preview.component.css',
})
export class ProjectsPreviewComponent {
  @Input() data!: ProjectsModel;
}

import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsModel} from '../../pages/home/home.model';
import {ProjectCardComponent} from './project-card/project-card.component';

@Component({
  selector: 'projects-component',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @Input() data!: ProjectsModel;
}

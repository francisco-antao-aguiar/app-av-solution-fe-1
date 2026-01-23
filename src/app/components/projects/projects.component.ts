import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsModel} from '../../pages/home/home.model';
import {ProjectCardComponent} from './project-card/project-card.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'projects-component',
  imports: [CommonModule, ProjectCardComponent, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @Input() data!: ProjectsModel;
}

import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsModel} from '../../pages/projects/projects.model';
import {ProjectCardComponent} from './project-card/project-card.component';
import {RouterLink} from '@angular/router';
import { FadeLightToDarkComponent } from "../fade-light-to-dark/fade-light-to-dark.component";

@Component({
  selector: 'projects-component',
  imports: [CommonModule, ProjectCardComponent, RouterLink, FadeLightToDarkComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @Input() data!: ProjectsModel;
}

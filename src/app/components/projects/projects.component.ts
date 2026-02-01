import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsModel} from '../../pages/projects/projects.model';
import {ProjectCardComponent} from './project-card/project-card.component';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {DeleteProjectButton} from './utils2/app-delete-project-button/app-delete-project-button.component';
import {CreateProjectCard} from './utils2/app-create-project-button/app-create-project-button.component';

@Component({
  selector: 'projects-component',
  imports: [CommonModule, ProjectCardComponent, RouterLink, DeleteProjectButton, CreateProjectCard],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @Input() data!: ProjectsModel;
  protected authService = inject(AuthService);
  showModal = false;
}

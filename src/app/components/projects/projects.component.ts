import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsModel} from '../../pages/projects/projects.model';
import {ProjectCardComponent} from './project-card/project-card.component';
import {RouterLink} from '@angular/router';
import {DeleteProjectButton} from '../utils/app-delete-project-button/app-delete-project-button.component';
import { AuthService } from '../../services/auth.service';
import { AddProjectCardComponent } from "../add-project-card/add-project-card.component";
import { AddProjectModalComponent } from "../add-project-modal/add-project-modal.component";

@Component({
  selector: 'projects-component',
  imports: [CommonModule, ProjectCardComponent, RouterLink, DeleteProjectButton, AddProjectCardComponent, AddProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @Input() data!: ProjectsModel;
  protected isAdmin: boolean = true;
  protected authService = inject(AuthService);
  showModal = false;
}

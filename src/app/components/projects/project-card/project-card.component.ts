import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsCardModel} from '../../../pages/home/home.model';

@Component({
  selector: 'project-card-component',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() data!: ProjectsCardModel;
}

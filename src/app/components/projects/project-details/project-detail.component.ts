import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsCardModel} from '../../../pages/projects/projects.model';

@Component({
  selector: 'projects-detail-component',
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectsPageComponent {
  @Input() data!: ProjectsCardModel;
  currentImageIndex = 0;
  isModalOpen = false;
  selectedModalImageIndex = 0;
  startX = 0;
  endX = 0;

  next() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.data.images.length;
  }

  prev() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.data.images.length) % this.data.images.length;
  }

  openModal(index: number) {
    this.selectedModalImageIndex = index;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  // Touch start
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  // Touch move
  onTouchMove(event: TouchEvent) {
    this.endX = event.touches[0].clientX;
  }

  // Touch end
  onTouchEnd() {
    const diff = this.startX - this.endX;
    if (Math.abs(diff) > 50) {
      // swipe threshold
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }
}

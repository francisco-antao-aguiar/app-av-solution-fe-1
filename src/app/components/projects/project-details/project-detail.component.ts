import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsCardModel} from '../../../pages/projects/projects.model';
import {
  DeleteProjectDetailButton
} from './utils/app-delete-project-detail-button/app-delete-project-detail-image-button.component';
import {CreateProjectCard} from './utils/app-update-project-detail-button/app-update-project-detail.component';

@Component({
  selector: 'projects-detail-component',
  imports: [CommonModule, DeleteProjectDetailButton, CreateProjectCard],
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
    this.currentImageIndex = (this.currentImageIndex + 1) % this.data.imageIds.length;
  }

  prev() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.data.imageIds.length) % this.data.imageIds.length;
  }

  @ViewChild('modalThumbsContainer') modalThumbsContainer!: ElementRef;

  openModal(index: number) {
    this.selectedModalImageIndex = index;
    this.isModalOpen = true;

    // Wait for DOM to render
    setTimeout(() => {
      this.scrollThumbnailIntoView(index);
    }, 0);
  }

  selectModalImage(index: number) {
    this.selectedModalImageIndex = index;
    this.scrollThumbnailIntoView(index);
  }

  scrollThumbnailIntoView(index: number) {
    if (this.isDesktop()) {
      this.scrollThumbnailIntoViewDesktop(index);
    } else {
      this.scrollThumbnailIntoViewMobile(index);
    }
  }

  scrollThumbnailIntoViewDesktop(index: number) {
    const container = this.modalThumbsContainer.nativeElement as HTMLElement;
    const thumbnail = container.children[index] as HTMLElement;

    const containerWidth = container.offsetWidth;
    const thumbnailLeft = thumbnail.offsetLeft;
    const thumbnailWidth = thumbnail.offsetWidth;

    const scrollLeft = thumbnailLeft - thumbnailWidth - containerWidth / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  }

  scrollThumbnailIntoViewMobile(index: number) {
    const container = this.modalThumbsContainer.nativeElement as HTMLElement;
    const thumbnail = container.children[index] as HTMLElement;

    const thumbnailLeft = thumbnail.offsetLeft;
    const thumbnailWidth = thumbnail.offsetWidth;

    const scrollLeft = thumbnailLeft - thumbnailWidth - 20; // magic number hehe

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });

  }

  closeModal() {
    this.isModalOpen = false;
  }

  isDesktop(): boolean {
    return window.innerWidth >= 678;
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
  onTouchEnd(event: TouchEvent) {
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }

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

  // Touch end
  onModalTouchEnd() {
    const diff = this.startX - this.endX;
    if (Math.abs(diff) > 50) {
      // swipe threshold
      if (diff > 0) {
        this.nextModalImage();
      } else {
        this.prevModalImage();
      }
    }
  }

  prevModalImage() {
    if (!this.data?.imageIds?.length) return;

    this.selectedModalImageIndex =
      (this.selectedModalImageIndex - 1 + this.data.imageIds.length) %
      this.data.imageIds.length;

    this.scrollThumbnailIntoView(this.selectedModalImageIndex);
  }

  nextModalImage() {
    if (!this.data?.imageIds?.length) return;

    this.selectedModalImageIndex =
      (this.selectedModalImageIndex + 1) % this.data.imageIds.length;

    this.scrollThumbnailIntoView(this.selectedModalImageIndex);
  }
}

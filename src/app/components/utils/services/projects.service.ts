import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';
import {ProjectsCardModel, ProjectsModel} from '../../../pages/projects/projects.model';

@Injectable({providedIn: 'root'})
export class ProjectsService {
  private projectsSubject = new BehaviorSubject<ProjectsModel>({
    title: "",
    subtitle: "",
    project: [],
  });
  projects$ = this.projectsSubject.asObservable();

  setProjects(items: ProjectsModel) {
    this.projectsSubject.next(items);
  }

  deleteItem(id: string) {
    const current = this.projectsSubject.value;
    const updatedProjects = current.project.filter(p => p.id !== id);
    this.projectsSubject.next({...current, project: updatedProjects});
  }

  addProject(newProject: ProjectsCardModel) {
    const current = this.projectsSubject.value;
    const updatedProjects = [...current.project, newProject];
    this.projectsSubject.next({...current, project: updatedProjects});
  }

  deleteImage(removeImageId: string) {
    const current = this.projectsSubject.value;

    const updatedProjects = current.project.map(
      (projectCardModel: ProjectsCardModel) => ({
        ...projectCardModel,
        imageIds: projectCardModel.imageIds.filter(
          imageId => imageId !== removeImageId
        )
      })
    );

    this.projectsSubject.next({
      ...current,
      project: updatedProjects
    });
  }

  updateProjects(newProject: ProjectsCardModel) {
    const current = this.projectsSubject.value;

    const updatedProjects = current.project.map(proj =>
      proj.id === newProject.id ? newProject : proj
    );

    this.projectsSubject.next({...current, project: updatedProjects});
  }
}

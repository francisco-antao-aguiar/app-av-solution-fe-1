import {Component} from '@angular/core';
import {ProjectsComponent} from '../../components/projects/projects.component';
import {ProjectsModel} from './projects.model';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProjectsComponent
  ],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.css',
})
export class ProjectsPage {
  protected projectsData: ProjectsModel = {
    title: "Nossos Projetos",
    subtitle:
      "Conheça alguns dos projetos que realizámos e que demonstram a nossa capacidade de execução.",
    projects: [
      {
        id: "1",
        images: ["/assets/home/projects/centro-comercial-atlantico.jpg"],
        title: "Centro Comercial Atlântico",
        subtitle: "Espaço comercial moderno",
        location: "Porto",
        year: 2023,
        totalArea: 12000,
        duration: 3,
        durationUnit: "Anos",
      },
      {
        id: "2",
        images: ["/assets/home/projects/moradia-monte-verde.jpg"],
        title: "Moradia Familiar Monte Verde",
        subtitle: "Residência unifamiliar",
        location: "Cascais",
        year: 2024,
        totalArea: 12000,
        duration: 3,
        durationUnit: "Anos",
      },
      {
        id: "3",
        images: ["/assets/home/projects/edificio-residencial-aurora.jpg"],
        title: "Edifício Residencial Aurora",
        subtitle: "Complexo residencial",
        location: "Lisboa",
        year: 2024,
        totalArea: 12000,
        duration: 3,
        durationUnit: "Anos",
      },
      {
        id: "4",
        images: ["/assets/home/projects/nave-industrial-tejo.jpg"],
        title: "Nave Industrial Tejo",
        subtitle: "Infraestrutura industrial",
        location: "Setúbal",
        year: 2023,
        totalArea: 12000,
        duration: 3,
        durationUnit: "Anos",
      },
      {
        id: "5",
        images: ["/assets/home/projects/centro-comercial-atlantico.jpg"],
        title: "Centro Comercial Atlântico",
        subtitle: "Espaço comercial moderno",
        location: "Porto",
        year: 2023,
        totalArea: 12000,
        duration: 3,
        durationUnit: "Anos",
      },
      {
        id: "6",
        images: ["/assets/home/projects/moradia-monte-verde.jpg"],
        title: "Moradia Familiar Monte Verde",
        subtitle: "Residência unifamiliar",
        location: "Cascais",
        year: 2024,
        totalArea: 12000,
        duration: 3,
        durationUnit: "Anos",
      },
    ],
  };
}

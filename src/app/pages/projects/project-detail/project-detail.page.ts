import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProjectsCardModel, ProjectsModel} from '../projects.model';
import {ProjectsPageComponent} from '../../../components/projects/project-details/project-detail.component';

@Component({
  selector: 'projects-detail-page',
  standalone: true,
  imports: [CommonModule, ProjectsPageComponent],
  templateUrl: './project-detail.page.html',
  styleUrl: './project-detail.page.css',
})
export class ProjectDetailPage implements OnInit {
  projectsData: ProjectsModel = {
    title: "Nossos Projetos",
    subtitle:
      "Conheça alguns dos projetos que realizámos e que demonstram a nossa capacidade de execução.",
    projects: [
      {
        id: "1",
        images: ["/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/moradia-monte-verde.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/edificio-residencial-aurora.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/moradia-monte-verde.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/edificio-residencial-aurora.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/moradia-monte-verde.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/edificio-residencial-aurora.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/moradia-monte-verde.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/edificio-residencial-aurora.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/moradia-monte-verde.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/edificio-residencial-aurora.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/moradia-monte-verde.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/edificio-residencial-aurora.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/moradia-monte-verde.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/edificio-residencial-aurora.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/moradia-monte-verde.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/edificio-residencial-aurora.jpg"],
        title: "Centro Comercial Atlântico",
        subtitle: "Espaço comercial moderno",
        description: "Projeto que combina luxo e sustentabilidade, com acabamento premium, sistema de automação residencial e certificação LEED. Conta com área de lazer completa, academia, piscina e salão de festas.",
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
        description: "Projeto que combina luxo e sustentabilidade, com acabamento premium, sistema de automação residencial e certificação LEED. Conta com área de lazer completa, academia, piscina e salão de festas.",
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
        description: "Projeto que combina luxo e sustentabilidade, com acabamento premium, sistema de automação residencial e certificação LEED. Conta com área de lazer completa, academia, piscina e salão de festas.",
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
        description: "Projeto que combina luxo e sustentabilidade, com acabamento premium, sistema de automação residencial e certificação LEED. Conta com área de lazer completa, academia, piscina e salão de festas.",
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
        description: "Projeto que combina luxo e sustentabilidade, com acabamento premium, sistema de automação residencial e certificação LEED. Conta com área de lazer completa, academia, piscina e salão de festas.",
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
        description: "Projeto que combina luxo e sustentabilidade, com acabamento premium, sistema de automação residencial e certificação LEED. Conta com área de lazer completa, academia, piscina e salão de festas.",
        location: "Cascais",
        year: 2024,
        totalArea: 12000,
        duration: 3,
        durationUnit: "Anos",
      },
    ],
  };
  projectData!: ProjectsCardModel;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    const project = this.projectsData.projects.find(p => p.id === id);
    if (project) {
      this.projectData = project;
    }
  }
}

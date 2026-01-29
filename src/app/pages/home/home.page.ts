import {Component, OnInit, signal} from '@angular/core';
import {HomeBannerComponent} from "../../components/home-banner/home-banner.component";
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import {HomeModel} from './home.model';
import {ServicesComponent} from "../../components/services/services.component";
import {FadeLightToDarkComponent} from '../../components/fade-light-to-dark/fade-light-to-dark.component';
import {FadeDarkToLightComponent} from "../../components/fade-dark-to-light/fade-dark-to-light.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {ProjectsPreviewComponent} from '../../components/projects/projects-preview/projects-preview.component';
import {ContactUsComponent} from '../../components/contact-us/contact-us.component';
import {HttpClient} from '@angular/common/http';
import {ProjectsModel} from '../projects/projects.model';

@Component({
  selector: 'app-home',
  imports: [HomeBannerComponent, AboutUsComponent, ProjectsPreviewComponent, ServicesComponent, FadeLightToDarkComponent, FadeDarkToLightComponent, FooterComponent, ProjectsPreviewComponent, ProjectsPreviewComponent, ProjectsPreviewComponent, ProjectsPreviewComponent, ContactUsComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage implements OnInit {
  protected homeData: HomeModel = {
    homeBanner: {
      image: "assets/home/banner.png",
      title: "Construindo o Futuro com Excelência",
      subtitle: "Engenharia e Construção de Qualidade",
      description:
        "Grupo Mirandas é referência em projetos de engenharia e construção, oferecendo soluções completas com qualidade e confiança.",
      budgetButtonText: "Visite os nossos Projetos",
    },

    aboutUs: {
      image: "assets/home/about-us.jpg",
      title: "Sobre Nós",
      description:
        "O Grupo Mirandas é uma empresa de referência no setor da construção em Portugal. Com uma equipa altamente qualificada e comprometida com a qualidade, oferecemos soluções completas de engenharia e construção para projetos residenciais, comerciais e industriais.",
      badgeTitle: "9 +",
      badgeSubtitle: "Anos de Experiência",
      characteristics: [
        {id: "1", text: "Qualidade Certificada"},
        {id: "2", text: "Prazos Garantidos"},
        {id: "3", text: "Equipa Especializada"},
        {id: "4", text: "Orçamentos Transparentes"},
      ],
    },

    services: {
      title: "Nossos Serviços",
      subtitle: "Soluções completas em engenharia e construção",
      cards: [
        {
          id: "1",
          icon: "fa-building",
          title: "Construção Civil",
          description:
            "Construção de edifícios residenciais e comerciais com os mais altos padrões de qualidade e segurança.",
        },
        {
          id: "2",
          icon: "fa-hammer",
          title: "Remodelações",
          description:
            "Remodelação e renovação de espaços, adaptando-os às suas necessidades e modernizando instalações.",
        },
        {
          id: "3",
          icon: "fa-clipboard-list",
          title: "Gestão de Projetos",
          description:
            "Gestão completa de projetos de construção, desde o planeamento até à entrega final.",
        },
        {
          id: "4",
          icon: "fa-handshake",
          title: "Consultoria",
          description:
            "Consultoria especializada em engenharia e construção para otimizar soluções técnicas e financeiras.",
        },
      ],
    },

    projects: {
      title: "Nossos Projetos",
      subtitle:
        "Conheça alguns dos projetos que realizámos e que demonstram a nossa capacidade de execução.",
      project: [
        {
          id: "1",
          imageIds: ["/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/moradia-monte-verde.jpg", "/assets/home/projects/centro-comercial-atlantico.jpg", "/assets/home/projects/edificio-residencial-aurora.jpg"],
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
          imageIds: ["/assets/home/projects/moradia-monte-verde.jpg"],
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
          imageIds: ["/assets/home/projects/edificio-residencial-aurora.jpg"],
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
          imageIds: ["/assets/home/projects/nave-industrial-tejo.jpg"],
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
          imageIds: ["/assets/home/projects/centro-comercial-atlantico.jpg"],
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
          imageIds: ["/assets/home/projects/moradia-monte-verde.jpg"],
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
    },

    contactUs: {
      title: "Pronto para começar seu projeto?",
      subtitle: "Entre em contato conosco e receba um orçamento personalizado para a sua obra.",
      contactUsButtonText: "Entre em Contacto",
    },

    contacts: {
      telephone: "+351 XXX XXX XXX",
      email: "geral@grupomirandas.pt",
      location: "Portugal",
    },
  };
  protected readonly response = signal<ProjectsModel | null>(null);
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchProjectHome();
  }

  protected fetchProjectHome(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.http.get<ProjectsModel>(`/api/project`).subscribe({
      next: (data) => {
        data.project = data.project.map(
          project => {
            return {...project, imageIds: project.imageIds?.map(imageId => `/api/images/${imageId}`)}
          }
        );
        this.response.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message || 'Failed to fetch project details endpoint');
        this.isLoading.set(false);
      }
    });
  }
}

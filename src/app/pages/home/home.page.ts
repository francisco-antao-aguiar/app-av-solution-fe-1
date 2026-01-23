import {Component} from '@angular/core';
import {HomeBannerComponent} from "../../components/home-banner/home-banner.component";
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import {HomeModel} from './home.model';
import {ServicesComponent} from "../../components/services/services.component";
import {FadeLightToDarkComponent} from '../../components/fade-light-to-dark/fade-light-to-dark.component';
import {FadeDarkToLightComponent} from "../../components/fade-dark-to-light/fade-dark-to-light.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {ProjectsPreviewComponent} from '../../components/projects/projects-preview/projects-preview.component';

@Component({
  selector: 'app-home',
  imports: [HomeBannerComponent, AboutUsComponent, ProjectsPreviewComponent, ServicesComponent, FadeLightToDarkComponent, FadeDarkToLightComponent, FooterComponent, ProjectsPreviewComponent, ProjectsPreviewComponent, ProjectsPreviewComponent, ProjectsPreviewComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {
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
}

import {Component} from '@angular/core';
import {HomeBannerComponent} from "../../components/home/home-banner.component";
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import {HomeModel} from './home.model';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ServicesComponent } from "../../components/services/services.component";
import { FadeLightToDarkComponent } from '../../components/fade-light-to-dark/fade-light-to-dark.component';
import { FadeDarkToLightComponent } from "../../components/fade-dark-to-light/fade-dark-to-light.component";

@Component({
  selector: 'app-home',
  imports: [HomeBannerComponent, AboutUsComponent, ProjectsComponent, ServicesComponent, FadeLightToDarkComponent, FadeDarkToLightComponent],
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
      budgetButtonText: "Solicite um Orçamento",
    },

    aboutUs: {
      image: "assets/home/about-us.jpg",
      title: "Sobre Nós",
      description:
        "O Grupo Mirandas é uma empresa de referência no setor da construção em Portugal. Com uma equipa altamente qualificada e comprometida com a qualidade, oferecemos soluções completas de engenharia e construção para projetos residenciais, comerciais e industriais.",
      badgeTitle: "20 +",
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
          icon: "building",
          title: "Construção Civil",
          description:
            "Construção de edifícios residenciais e comerciais com os mais altos padrões de qualidade e segurança.",
        },
        {
          id: "2",
          icon: "hammer",
          title: "Remodelações",
          description:
            "Remodelação e renovação de espaços, adaptando-os às suas necessidades e modernizando instalações.",
        },
        {
          id: "3",
          icon: "clipboard",
          title: "Gestão de Projetos",
          description:
            "Gestão completa de projetos de construção, desde o planeamento até à entrega final.",
        },
        {
          id: "4",
          icon: "settings",
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
          image: "/images/projects/centro-comercial-atlantico.jpg",
          title: "Centro Comercial Atlântico",
          subtitle: "Espaço comercial moderno",
          location: "Porto",
          year: 2023,
        },
        {
          id: "2",
          image: "/images/projects/moradia-monte-verde.jpg",
          title: "Moradia Familiar Monte Verde",
          subtitle: "Residência unifamiliar",
          location: "Cascais",
          year: 2024,
        },
        {
          id: "3",
          image: "/images/projects/edificio-residencial-aurora.jpg",
          title: "Edifício Residencial Aurora",
          subtitle: "Complexo residencial",
          location: "Lisboa",
          year: 2024,
        },
        {
          id: "4",
          image: "/images/projects/nave-industrial-tejo.jpg",
          title: "Nave Industrial Tejo",
          subtitle: "Infraestrutura industrial",
          location: "Setúbal",
          year: 2023,
        },
      ],
    },

    contacts: {
      telephone: "+351 XXX XXX XXX",
      email: "geral@grupomirandas.pt",
      location: "Portugal",
    },
  };
}

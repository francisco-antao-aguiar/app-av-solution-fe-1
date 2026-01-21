import {Component} from '@angular/core';
import {HomeComponent} from "../../components/home/home.component";
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ServicesComponent } from "../../components/services/services.component";

@Component({
  selector: 'app-home',
  imports: [HomeComponent, AboutUsComponent, ProjectsComponent, ServicesComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

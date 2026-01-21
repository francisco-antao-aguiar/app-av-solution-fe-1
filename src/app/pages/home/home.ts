import {Component} from '@angular/core';
import {HomeComponent} from "../../components/home/home.component";
import {AboutUsComponent} from '../../components/about-us/about-us.component';

@Component({
  selector: 'app-home',
  imports: [HomeComponent, AboutUsComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

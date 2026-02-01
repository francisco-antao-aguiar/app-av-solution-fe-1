import {Component} from '@angular/core';
import {ClientComponent} from '../../components/client-card/client.component';

@Component({
  selector: 'app-about-us',
  imports: [
    ClientComponent
  ],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  protected clientImages = [
    "assets/home/clients/1.jpg",
    "assets/home/clients/2.jpg",
    "assets/home/clients/3.png",
    "assets/home/clients/4.jpg",
    "assets/home/clients/5.jpg",
    "assets/home/clients/6.png",
    "assets/home/clients/7.png",
    "assets/home/clients/8.png",
    "assets/home/clients/9.png",
    "assets/home/clients/10.jpg",
    "assets/home/clients/11.png",
    "assets/home/clients/12.png",
    "assets/home/clients/13.jpg",
    "assets/home/clients/14.jpg",
  ]
}

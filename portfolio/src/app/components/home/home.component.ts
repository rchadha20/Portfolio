import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  image = 'assets/ReplaceSelf.png';
  Name= "Richa Chadha"
  Descripton = "Full Stack Developer"
  Content = "HTML/CSS5, JavaScript, TypeScript, NodeJS, ExpressJS, ReactJS, Angular, MongoDB"
}

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routeConfig: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent, title: 'Home page' },
  { path: 'about', component: AboutComponent, title: 'About Page' },
  { path: 'project', component: ProjectsComponent, title: 'Project Page' },
  { path: 'contact', component: ContactComponent, title: 'Contact Page' },
];

export default routeConfig;

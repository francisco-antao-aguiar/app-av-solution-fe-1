import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/test/test.component').then(m => m.TestComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.page').then(m => m.ProjectsPage)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us').then(m => m.AboutUs)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

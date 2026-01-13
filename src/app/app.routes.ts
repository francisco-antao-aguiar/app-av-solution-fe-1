import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test',
    loadComponent: () => import('./pages/test/test').then(m => m.TestComponent)
  },
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  }
];

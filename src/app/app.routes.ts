import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/pages/landing-page/landing-page'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

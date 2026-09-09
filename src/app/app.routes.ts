import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/accueil/accueil').then((m) => m.Accueil),
    title: 'Ronaldo Yonlonfin — Développeur web full-stack',
  },
  {
    path: 'realisations',
    loadComponent: () => import('./pages/realisations/realisations').then((m) => m.Realisations),
    title: 'Réalisations — Ronaldo Yonlonfin',
  },
  {
    path: 'parcours',
    loadComponent: () => import('./pages/parcours/parcours').then((m) => m.Parcours),
    title: 'Parcours — Ronaldo Yonlonfin',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact — Ronaldo Yonlonfin',
  },
  { path: '**', redirectTo: '' },
];

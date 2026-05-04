import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pvc' },
  {
    path: 'pvc',
    loadComponent: () =>
      import('./pages/pvc-page/pvc-page.component').then((m) => m.PvcPageComponent),
    title: 'PVC stolarija',
  },
  {
    path: 'alu',
    loadComponent: () =>
      import('./pages/alu-page/alu-page.component').then((m) => m.AluPageComponent),
    title: 'ALU stolarija',
  },
  {
    path: 'komarnici-roletne',
    loadComponent: () =>
      import('./pages/komarnici-roletne-page/komarnici-roletne-page.component').then(
        (m) => m.KomarniciRoletnePageComponent,
      ),
    title: 'Komarnici i roletne',
  },
  { path: '**', redirectTo: 'pvc' },
];

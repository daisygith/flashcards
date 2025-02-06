import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'/main-page',
    loadChildren: () =>
      import('./main-page/main-page.routes').then((m) => m.mainPageRoutes)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main-page',
  }
];

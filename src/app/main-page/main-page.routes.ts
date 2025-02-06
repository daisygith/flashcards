import {Routes} from "@angular/router";

export const mainPageRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/main-page/main-page.component').then((c) => c.MainPageComponent)
  }
];

















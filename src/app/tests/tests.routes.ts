import { Routes } from '@angular/router';

export const testsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/test/test.component').then((c) => c.TestComponent),
  },
  {
    path: '',
    children: [
      {
        path: 'html',
        loadComponent: () =>
          import('./components/test-html/test-html.component').then(
            (c) => c.TestHtmlComponent,
          ),
      },
    ],
  },
];

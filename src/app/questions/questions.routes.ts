import { Routes } from '@angular/router';

export const questionsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/questions/questions.component').then(
        (c) => c.QuestionsComponent,
      ),
  },
  {
    path: '',
    children: [
      {
        path: 'html',
        loadComponent: () =>
          import('./components/html/html.component').then(
            (c) => c.HtmlComponent,
          ),
      },
    ],
  },
];

import { Routes } from '@angular/router';
import { questionsResolver } from './resolvers/questions.resolver';

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
        resolve: { questions: questionsResolver },
        data: { type: 'sql' },
        loadComponent: () =>
          import('./components/html/html.component').then(
            (c) => c.HtmlComponent,
          ),
      },
    ],
  },
];

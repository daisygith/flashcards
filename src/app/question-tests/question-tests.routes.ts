import { Routes } from '@angular/router';
import { questionTestResolver } from './resolvers/question-test.resolver';

export const questionTestsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/question-test/question-test.component').then(
        (c) => c.QuestionTestComponent,
      ),
  },
  {
    path: '',
    children: [
      {
        path: 'html',
        resolve: { questionTest: questionTestResolver },
        data: { type: 'html' },
        loadComponent: () =>
          import('./components/test-html/test-html.component').then(
            (c) => c.TestHtmlComponent,
          ),
      },
    ],
  },
];

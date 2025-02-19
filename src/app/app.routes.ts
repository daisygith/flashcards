import { Routes } from '@angular/router';
import { ShellComponent } from './shell/components/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main-page',
  },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'main-page',
        loadChildren: () =>
          import('./main-page/main-page.routes').then((m) => m.mainPageRoutes),
      },
      {
        path: 'questions',
        loadChildren: () =>
          import('./questions/questions.routes').then((m) => m.questionsRoutes),
      },
      {
        path: 'tests',
        loadChildren: () =>
          import('./question-tests/question-tests.routes').then(
            (m) => m.questionTestsRoutes,
          ),
      },
    ],
  },
];

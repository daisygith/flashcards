import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { QuestionTest } from '../types';
import { QuestionTestService } from '../services/question-test.service';

export const questionTestResolver: ResolveFn<QuestionTest[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Observable<QuestionTest[]> => {
  const questionTestService = inject(QuestionTestService);
  return questionTestService.getQuestions(route.data['type']);
};

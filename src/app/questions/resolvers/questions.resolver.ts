import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Question } from '../types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { QuestionsService } from '../services/questions.service';

export const questionsResolver: ResolveFn<Question[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Observable<Question[]> => {
  const questionsService = inject(QuestionsService);
  return questionsService.getQuestions(route.data['type']);
};

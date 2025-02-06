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

export const questionsResolver: ResolveFn<Question[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Observable<Question[]> => {
  const httpClient = inject(HttpClient);
  const translateService = inject(TranslateService);
  return httpClient.get<Question[]>(
    `/assets/questions/${translateService.currentLang ?? 'en'}/${route.data['type']}.json`,
  );
};

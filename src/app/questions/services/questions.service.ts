import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Question } from '../types';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private httpClient = inject(HttpClient);
  private translateService = inject(TranslateService);

  public getQuestions(type: string): Observable<Question[]> {
    return this.httpClient.get<Question[]>(
      `/assets/questions/${this.translateService.currentLang ?? 'en'}/${type}.json`,
    );
  }
}

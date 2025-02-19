import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { QuestionTest } from '../types';

@Injectable({
  providedIn: 'root',
})
export class QuestionTestService {
  private httpClient = inject(HttpClient);
  private translateService = inject(TranslateService);

  public getQuestions(type: string): Observable<QuestionTest[]> {
    return this.httpClient.get<QuestionTest[]>(
      `/assets/question-test/${this.translateService.currentLang ?? 'en'}/${type}.json`,
    );
  }
}

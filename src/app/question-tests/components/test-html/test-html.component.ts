import { Component, inject, Input, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { QuestionTestService } from '../../services/question-test.service';
import { QuestionTest } from '../../types';
import { distinctUntilChanged, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-test-html',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './test-html.component.html',
  styleUrl: './test-html.component.scss',
})
export class TestHtmlComponent implements OnInit {
  private translateService = inject(TranslateService);
  private questionTestService = inject(QuestionTestService);
  @Input()
  public questionTest: QuestionTest[] | undefined;
  @Input()
  public type: string | undefined;

  public isStarted: boolean = false;

  public start(): void {
    this.isStarted = !this.isStarted;
  }

  ngOnInit(): void {}

  constructor() {
    this.translateService.onLangChange
      .asObservable()
      .pipe(
        distinctUntilChanged(),
        switchMap((value) => this.questionTestService.getQuestions(this.type!)),
        takeUntilDestroyed(),
      )
      .subscribe({
        next: (value) => (this.questionTest = value),
      });
  }
}

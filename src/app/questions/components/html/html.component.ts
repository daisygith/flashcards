import { Component, inject, Input, OnInit } from '@angular/core';
import { Question } from '../../types';
import { JsonPipe } from '@angular/common';
import {
  NgbCarousel,
  NgbCarouselConfig,
  NgbSlide,
} from '@ng-bootstrap/ng-bootstrap';
import { FlashcardComponent } from '../../../shared/components/flashcard/flashcard.component';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { QuestionsService } from '../../services/questions.service';
import { distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-html',
  standalone: true,
  imports: [NgbCarousel, NgbSlide, FlashcardComponent],
  templateUrl: './html.component.html',
  styleUrl: './html.component.scss',
})
export class HtmlComponent implements OnInit {
  private translateService = inject(TranslateService);
  private questionsService = inject(QuestionsService);
  @Input()
  public questions: Question[] | undefined;
  @Input()
  public type: string | undefined;
  public isStarted: boolean = false;

  public start(): void {
    this.isStarted = !this.isStarted;
  }

  ngOnInit() {}

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

    this.translateService.onLangChange
      .asObservable()
      .pipe(
        distinctUntilChanged(),
        switchMap((value) => this.questionsService.getQuestions(this.type!)),
        takeUntilDestroyed(),
      )
      .subscribe({
        next: (value) => (this.questions = value),
      });
  }
}

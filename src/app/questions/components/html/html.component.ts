import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../types';
import { JsonPipe } from '@angular/common';
import {
  NgbCarousel,
  NgbCarouselConfig,
  NgbSlide,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-html',
  standalone: true,
  imports: [JsonPipe, NgbCarousel, NgbSlide],
  templateUrl: './html.component.html',
  styleUrl: './html.component.scss',
})
export class HtmlComponent implements OnInit {
  @Input()
  public questions: Question[] | undefined;
  public isStarted: boolean = false;

  public start(): void {
    this.isStarted = !this.isStarted;
  }

  flipped = false;
  toggle() {
    this.flipped = !this.flipped;
  }
  ngOnInit() {
    // console.log(this.questionById);
  }

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  // questionById = [].map((n) => this.questions![n]);
}

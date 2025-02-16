import { Component, Input } from '@angular/core';
import { Question } from '../../../questions/types';
import { TranslatePipe } from '@ngx-translate/core';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [TranslatePipe, SafeHtmlPipe],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.scss',
})
export class FlashcardComponent {
  @Input()
  public questions: Question | undefined;

  flipped = false;
  toggle() {
    this.flipped = !this.flipped;
  }
}

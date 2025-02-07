import { Component, Input } from '@angular/core';
import { Question } from '../../../questions/types';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [TranslatePipe],
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

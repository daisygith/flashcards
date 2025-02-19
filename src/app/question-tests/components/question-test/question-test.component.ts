import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-question-test',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './question-test.component.html',
  styleUrl: './question-test.component.scss',
})
export class QuestionTestComponent {}

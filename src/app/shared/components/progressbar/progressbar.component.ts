import { Component, Input } from '@angular/core';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [NgbProgressbar],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss',
})
export class ProgressbarComponent {
  @Input()
  public current: number = 1;
  @Input()
  public max: number = 10;
}

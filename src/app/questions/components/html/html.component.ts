import { Component } from '@angular/core';

@Component({
  selector: 'app-html',
  standalone: true,
  imports: [],
  templateUrl: './html.component.html',
  styleUrl: './html.component.scss',
})
export class HtmlComponent {
  public isStarted: boolean = false;

  public start(): void {
    this.isStarted = !this.isStarted;
  }
}

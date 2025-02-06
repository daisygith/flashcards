import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../types';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-html',
  standalone: true,
  imports: [JsonPipe],
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
  imgSrc =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH';

  toggle() {
    this.flipped = !this.flipped;
  }
  ngOnInit() {}
}

import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent {}

import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { FooterComponent } from '../../../shell/components/footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterLink, TranslatePipe, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent {}

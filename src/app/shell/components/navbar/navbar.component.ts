import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
} from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    TranslatePipe,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public translate: TranslateService = inject(TranslateService);
  public isMenuOpen: boolean = false;

  public get languages(): string[] {
    return this.translate.getLangs();
  }

  toggleMenu(): void {
    console.log('toggleMenu');
    this.isMenuOpen = !this.isMenuOpen;
  }
}

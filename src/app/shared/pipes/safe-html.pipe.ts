import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  transform(html?: string) {
    return html ? this.sanitizer.bypassSecurityTrustHtml(html) : '';
  }
}

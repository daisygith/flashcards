import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carouselCurrent',
})
export class CarouselCurrentPipe implements PipeTransform {
  transform(value: string): number {
    if (!value) {
      return 0;
    }
    const split = value.split('-');
    const lastElement = split?.pop();
    return lastElement ? Number(lastElement) + 1 : 0;
  }
}

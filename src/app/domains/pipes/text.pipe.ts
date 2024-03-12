import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exclamacion',
  standalone: true
})
export class TextPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (value == undefined) {
      return "";
    } else {
      return "¡" + value + "!";
    }
  }

}

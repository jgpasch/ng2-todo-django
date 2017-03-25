import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCell'
})
export class FormatPipeCell implements PipeTransform {
  transform(value: any) {
    if (value === null || value === undefined) {
      return 'Not Available';
    }
    return value;
  }
}
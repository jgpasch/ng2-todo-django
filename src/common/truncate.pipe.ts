import {Pipe, PipeTransform, Injectable} from '@angular/core';

@Pipe({
  name: 'truncate'
})
@Injectable()
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: any): string {
    const trail = '...';
    if (!value) {
      return null;
    }
    return value.length > length ? value.substring(0, length) + trail : value;
  }
}

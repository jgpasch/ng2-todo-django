import {Pipe, PipeTransform, Injectable} from '@angular/core';

@Pipe({
  name: 'truncate'
})
@Injectable()
export class TruncatePipe implements PipeTransform{
  transform(value: string, length: any): string {
    console.log(length);
    // const limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    // const trail = args.length > 1 ? args[1] : '...';
    const trail = '...';
    if (!value) {
      return null;
    }
    return value.length > length ? value.substring(0, length) + trail : value;
  }
}
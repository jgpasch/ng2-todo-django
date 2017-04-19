import { Injectable } from '@angular/core';

declare const toastr: any;

@Injectable()
export class ToastrService {
  static options = {
    timeOut: 1300
  };

  success(message: string, title?: string) {
    toastr.success(message, title, ToastrService.options);
  }

  info(message: string, title?: string) {
    toastr.info(message, title, ToastrService.options);
  }

  warning(message: string, title?: string) {
    toastr.warning(message, title, ToastrService.options);
  }

  error(message: string, title?: string) {
    toastr.error(message, title, ToastrService.options);
  }

}

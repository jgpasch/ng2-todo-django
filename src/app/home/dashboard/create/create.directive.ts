import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[focusOnSubmit]'
})
export class DropdownDirective {
  constructor(private el: ElementRef) {}


}

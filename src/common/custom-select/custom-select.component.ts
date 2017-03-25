import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html'
})
export class CustomSelectComponent {
  @Input() selectList: Array<string> = [];
  @Input() selectedFilter;
  @Output() selectedFilterChange = new EventEmitter<string>();
  
  constructor() { }

  onChange(newValue) {
    this.selectedFilter = newValue;
    this.selectedFilterChange.emit(newValue);
  }

}
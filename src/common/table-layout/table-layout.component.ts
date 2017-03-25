import { Component, Input, OnChanges } from '@angular/core';
import { ColumnSetting } from '../../common/layout.model';

@Component({
  selector: 'table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.css']
})
export class TableLayoutComponent implements OnChanges {
  @Input() records: any[];
  @Input() title: string;
  @Input() settings: ColumnSetting[];
  @Input() selectList: Array<string>;
  columnMaps: ColumnSetting[];
  searchObj: Object = {
    searchField: null,
    searchText: null
  }
  selectedFilter: string = 'name';

  ngOnChanges() {
    if (this.settings) {
      this.columnMaps = this.settings;
    } else if (this.records[0]) {
      this.columnMaps = Object.keys(this.records[0])
        .map(key =>  {
          return {
            primaryKey: key,
            header: key.slice(0,1).toUpperCase() + key.replace(/_/g, ' ').slice(1)
          };
        });
    }
  }
}
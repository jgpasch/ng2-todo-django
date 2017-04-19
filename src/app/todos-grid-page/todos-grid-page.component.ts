import { Component, OnInit } from '@angular/core';
import Group from '../../common/Group';
import { GroupService } from '../../services/GroupService';
import { ColumnSetting } from '../../common/layout.model';

@Component({
  selector: 'app-todos-grid',
  templateUrl: './todos-grid-page.component.html',
  styleUrls: ['./todos-grid-page.component.css']
})
export class TodosGridPageComponent implements OnInit {
  groups: Group[] = [];
  selectList: Array<Object> = [
    {
      primaryKey: 'name',
      displayName: 'Group Name'
    },
    {
      primaryKey: 'address',
      displayName: 'Address'
    },
    {
      primaryKey: 'parent_group',
      displayName: 'Parent Group'
    },
    {
      primaryKey: 'contact',
      displayName: 'Manager Contact'
    },
    {
      primaryKey: 'phone',
      displayName: 'Manager Phone'
    },
    {
      primaryKey: 'email',
      displayName: 'Manager Email'
    }
  ];

  // setup ColumnSettings
  projectSettings: ColumnSetting[] = [
    {
      primaryKey: 'name',
      header: 'Name'
    },
    {
      primaryKey: 'address',
      header: 'Address'
    },
    {
      primaryKey: 'parent_group',
      header: 'Group'
    },
    {
      primaryKey: 'contact',
      header: 'Contact Name'
    },
    {
      primaryKey: 'phone',
      header: 'Contact Phone'
    },
    {
      primaryKey: 'email',
      header: 'Contact Email'
    },
  ];


  constructor(private groupService: GroupService) {

   }

  ngOnInit() {
    this.groupService.getGroups().subscribe(res => {
      this.groups = res;
    });
  }

}

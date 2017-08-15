import { Component, OnInit, Input, ViewChild, OnChanges, ViewChildren, QueryList, AfterContentInit } from '@angular/core';
import { GroupItemComponent } from './group-item/group-item.component';
import { GroupSelectedService } from '../../../../services/GroupSelectedService';

@Component({
  selector: 'app-todos-groups',
  templateUrl: './todos-groups.component.html',
  styleUrls: ['./todos-groups.component.scss']
})
export class TodosGroupsComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() groupNames: string[];
  // groups: GroupItemComponent[] = [];
  @ViewChild('groupList') groupList;
  @ViewChildren(GroupItemComponent) groups: QueryList<GroupItemComponent>;

  constructor(private groupSelectedService: GroupSelectedService) { }

  ngOnInit() {

  }

  ngAfterContentInit() {
  }

  ngOnChanges() {
    if (this.groupNames.length > 0) {
      this.groupSelectedService.selectGroup(this.groupNames[0]);
    }
  }

  onClick(event, groupName) {
    this.groupSelectedService.selectGroup(groupName);
    this.groups.forEach(group => {
      if (group.groupName === groupName) {
        group.active = true;
      } else {
        group.active = false;
      }
    });
  }

}

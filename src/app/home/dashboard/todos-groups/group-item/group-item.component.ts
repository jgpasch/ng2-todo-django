import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss']
})
export class GroupItemComponent implements OnInit {
  active = false;
  @Input() groupName: string;
  @Input() index: number;

  constructor() {

  }

  ngOnInit() {
    if (this.index === 0) {
      this.active = true;

    }
  }

}

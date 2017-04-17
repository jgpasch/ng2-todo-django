import { Component, OnInit, OnChanges } from '@angular/core';

import Todo from '../../../common/Todo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedTodo: Todo;

  constructor() { }


  setSelectedTodo(todo) {
    this.selectedTodo = todo;
  }

  ngOnInit() {
    console.log('dashboard component initializing');
  }

}

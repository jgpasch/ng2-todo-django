import { Component, OnInit, OnChanges } from '@angular/core';

import Todo from '../../../common/Todo';
import { TodoService } from '../../../services/TodoService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedTodo: Todo;
  groups: string[];

  constructor(private todoService: TodoService) {
    this.groups = [];
  }


  setSelectedTodo(todo) {
    this.selectedTodo = todo;
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.groups = res.map(todo => {
        console.log(todo.group);
        if (this.groups.indexOf(todo.group) < 0) {
          this.groups.push(todo.group);
          return todo.group;
        }
      });
    });
  }

}

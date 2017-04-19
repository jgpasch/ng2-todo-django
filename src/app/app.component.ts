import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TodoService } from '../services/TodoService';
import Todo from '../common/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../assets/styles/reset.scss']
})
export class AppComponent implements OnInit {

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todoService.getTodos();
  }

}

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TodoService } from '../services/TodoService';
import Todo from '../common/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../assets/styles/reset.scss']
})
export class AppComponent implements OnInit {
  // selectedTodo: Todo;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    console.log('i shuold be running');
    this.todoService.getTodos();
  }

  title = 'app works!';
}

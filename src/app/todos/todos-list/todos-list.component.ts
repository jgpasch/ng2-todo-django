import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import Todo from '../../../common/Todo';
import { TodoService } from '../../../services/TodoService';
import { ToastrService } from '../../../services/ToastrService';
// import async from 'async';

// import * as toastr from 'toastr';
// toastr.method();

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html'
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = [];
  completedTodos: number[] = [];
  @Input() newTodo: Todo;
  @Output() todoSelected: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      console.log(res);
      // this.todos = res;
      this.todos = res.filter((todo) => {
        return !todo.completed;
      });

    });
  }

  markAsCompleted() {
    // loop through todos and mark any as completed
    if (this.completedTodos.length > 0) {
      let count = 0;
      this.todos.map((todo) => {
        // if this todo is completed, send a put request.
        if (this.completedTodos.indexOf(todo.id) > -1) {
          count++;
          this.todoService.updateTodo(todo, true).subscribe((res) => { console.log('todo ', res, ' was deleted'); } );
        }
      });
      toastr.success(`${count} todos finished!`);
    } else {
      this.toastrService.info('No todos were marked as completed!');
    }

    this.todos = this.todos.filter((todo) => {
      return (this.completedTodos.indexOf(todo.id) === -1);
    });
  }

  wasSelected(todo: Todo) {
    this.todoSelected.emit(todo);
  }

  toggleCompleted(todoId) {
    if (todoId < 0) {
      const actualId = todoId * -1;
      const ind = this.completedTodos.indexOf(actualId);
      this.completedTodos.splice(ind, 1);
    } else {
      this.completedTodos.push(todoId);
    }
    console.log('list is now: ', this.completedTodos);
  }

  ngOnChanges() {
    this.newTodoReceived(this.newTodo);
  }

  newTodoReceived(newTodo: Todo) {
    this.todos.push(newTodo);
  }

}

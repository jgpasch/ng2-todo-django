import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import Todo from '../../../common/Todo';
import { TodoService } from '../../../services/TodoService';
import { ToastrService } from '../../../services/ToastrService';
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

      // this.todos = res.map((todo) => {
      //   if (!todo.completed) {
      //     return todo;
      //   }
      // });
    });
  }

  markAsCompleted() {
    // loop through todos and mark any as completed
    this.todos.map((todo) => {
      // if this todo is completed, send a put request.
      if (this.completedTodos.indexOf(todo.id) > -1) {
        this.todoService.updateTodo(todo, true).subscribe((res) => { console.log(res); } );
      }
    });

    this.todos = this.todos.filter((todo) => {
      return (this.completedTodos.indexOf(todo.id) === -1);
    });
  }

  wasSelected(todo: Todo) {
    this.todoSelected.emit(todo);
  }

  addCompleted(todoId) {
    this.completedTodos.push(todoId);
  }

  ngOnChanges() {
    this.newTodoReceived(this.newTodo);
  }

  newTodoReceived(newTodo: Todo) {
    this.todos.push(newTodo);
  }

}

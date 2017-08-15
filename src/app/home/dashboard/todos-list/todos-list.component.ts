import { Component, OnInit, OnChanges, OnDestroy, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import Todo from '../../../../common/Todo';
import { TodoService } from '../../../../services/TodoService';
import { ToastrService } from '../../../../services/ToastrService';
import { UserService } from '../../../../services/UserService';
import { TodoCreatedService } from '../../../../services/TodoCreatedService';
import { GroupSelectedService } from '../../../../services/GroupSelectedService';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
})
export class TodosListComponent implements OnInit, OnChanges, OnDestroy {
  todos: Todo[] = [];
  completedTodos: number[] = [];
  @Input() newTodo: Todo;
  @Output() todoSelected: EventEmitter<Todo> = new EventEmitter<Todo>();
  subscription: Subscription;
  groupSubscription: Subscription;
  group: string;

  constructor(private userService: UserService,
              private todoService: TodoService,
              private toastrService: ToastrService,
              private todoCreatedService: TodoCreatedService,
              private groupSelectedService: GroupSelectedService
  ) {
        this.subscription = this.todoCreatedService.todoAnnounced$.subscribe((todo) => {

          this.newTodoReceived(todo);
        });

        this.groupSubscription = this.groupSelectedService.groupSelected$.subscribe(groupName => {
          this.group = groupName;
          console.log('recieved : ', groupName);
        });
      }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res.filter((todo) => {
        return !todo.completed;
      });

    }, (err) => { if (err.status > 399 && err.status < 405) { this.userService.logout(); }});
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

    this.completedTodos = [];
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
  }

  ngOnChanges() {
    this.newTodoReceived(this.newTodo);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.groupSubscription.unsubscribe();
  }

  newTodoReceived(newTodo: Todo) {
    console.log('new todo received called');
    this.todos.push(newTodo);
  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import Todo from '../common/Todo';

@Injectable()
export class TodoCreatedService {
  private todoAnnouncedSource = new Subject<Todo>();
  private todoConfirmedSource = new Subject<Todo>();

  todoAnnounced$ = this.todoAnnouncedSource.asObservable();
  todoConfirmed$ = this.todoConfirmedSource.asObservable();

  announceTodo(todo: Todo) {
    this.todoAnnouncedSource.next(todo);
  }

  confirmTodo(received: Todo) {
    this.todoConfirmedSource.next(received);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from '../../../common/Todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html'
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() completedEmitter: EventEmitter<number> = new EventEmitter<number>();
  markedCompleted: Boolean = false;

  constructor() { }

  todoCompleted(event) {
    event.stopPropagation();
    this.markedCompleted = !this.markedCompleted;
    // if the todo is complete, send the postiive ID
    // if the todo is being unchecked send the negative ID
    if (!this.markedCompleted) {
      console.log('emitting: ', this.todo.id * -1);
      this.completedEmitter.emit(this.todo.id * -1);
    } else {
      console.log('emitting: ', this.todo.id);
      this.completedEmitter.emit(this.todo.id);
    }
  }

  ngOnInit() {
  }

}

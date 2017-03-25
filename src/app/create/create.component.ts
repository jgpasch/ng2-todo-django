import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { TodoService } from '../../services/TodoService';
import Todo from '../../common/Todo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newTodo: Todo;
  title: string;
  note: string;
  loading: boolean = false;
  @Output() todoCreated: EventEmitter<Todo> = new EventEmitter<Todo>();
  @ViewChild('first') firstInput;


  constructor(private todoService: TodoService) { }

  onSubmit() {
    this.newTodo = new Todo(this.title, this.note, 'John Paschal');
    this.todoCreated.emit(this.newTodo);
    this.todoService.createTodo(this.title, this.note, 'John Paschal').subscribe((result) => {
      toastr.success('Todo has been saved!');
    });
    this.title = '';
    this.note = '';
    this.firstInput.nativeElement.focus();
  }

  ngOnInit() {
  }

}

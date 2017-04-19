import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../../../../services/TodoService';
import Todo from '../../../../common/Todo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  todoForm: FormGroup;
  newTodo: Todo;
  // title: string;
  title = new FormControl('', [ Validators.required ]);
  // note: string;
  note = new FormControl('', [ Validators.required ]);
  loading = false;
  @Output() todoCreated: EventEmitter<Todo> = new EventEmitter<Todo>();
  @ViewChild('first') firstInput;


  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder) {

      this.createForm();
  }

  onSubmit(event) {
    if (this.todoForm.valid) {
      // event.preventDefault();
      this.newTodo = new Todo(this.title.value , this.note.value , 'John Paschal');

      // put this line below back in, if you decide that the frontend should choose the ID
      // this would be for quickness of the todos appearing in the list.
      // this.todoCreated.emit(this.newTodo);

      this.todoService.createTodo(this.title.value , this.note.value, 'John Paschal').subscribe((result) => {
        toastr.success('Todo has been saved!');
        this.newTodo.id = result.id;
        this.todoCreated.emit(this.newTodo);
      });
      this.title.value = '';
      this.note.value = '';
      this.firstInput.nativeElement.focus();
    } else {
      this.title.markAsTouched();
      this.note.markAsTouched();
    }
  }

  createForm() {
    this.todoForm = this.formBuilder.group({
      title: this.title,
      note: this.note
    });
  }

  ngOnInit() {
  }

}

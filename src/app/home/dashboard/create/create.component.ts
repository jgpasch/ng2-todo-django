import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { TodoService } from '../../../../services/TodoService';
import { TodoCreatedService } from '../../../../services/TodoCreatedService';
import { GroupSelectedService } from '../../../../services/GroupSelectedService';
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
  subscription: Subscription;


  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    private todoCreatedService: TodoCreatedService,
    private groupSelectedService: GroupSelectedService
  ) {

      this.createForm();
      this.subscription = todoCreatedService.todoConfirmed$.subscribe((todo) => {
      });
  }

  onSubmit(event) {
    if (this.todoForm.valid) {
      event.preventDefault();
      this.newTodo = new Todo(this.title.value , this.note.value , 'John Paschal', this.groupSelectedService.group);

      // put this line below back in, if you decide that the frontend should choose the ID
      // this would be for quickness of the todos appearing in the list.
      // this.todoCreated.emit(this.newTodo);

      // tslint:disable-next-line:max-line-length
      this.todoService.createTodo(this.title.value , this.note.value, 'John Paschal', this.groupSelectedService.group).subscribe((result) => {
        toastr.success('Todo has been saved!');
        this.newTodo.id = result.id;
        // this.todoCreated.emit(this.newTodo);
        this.todoCreatedService.announceTodo(this.newTodo);
      });
      this.todoForm.controls['title'].setValue('');
      this.todoForm.controls['note'].setValue('');
      this.firstInput.nativeElement.focus();

      this.title.markAsUntouched();
      this.title.markAsPristine();

      this.note.markAsUntouched();
      this.note.markAsPristine();


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
    this.firstInput.nativeElement.focus();
  }

}

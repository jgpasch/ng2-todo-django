import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Todo from '../../../../../common/Todo';

import { TodoService } from '../../../../../services/TodoService';

@Component({
  selector: 'app-details-edit',
  templateUrl: './todos-details-edit.component.html',
  styleUrls: ['./todos-details-edit.component.css']
})
export class DetailsEditComponent implements OnInit {
  todoID: number;
  editForm: FormGroup;
  selectedTodo: Todo;

  title = new FormControl('', []);
  note = new FormControl('', []);


  constructor(private router: Router, private route: ActivatedRoute, private builder: FormBuilder, private todoService: TodoService) {
    this.createForm();

    this.route.params.subscribe(params => {
      this.todoID = +params['id'];

      this.selectedTodo = this.todoService.getLocalTodo(this.todoID);

      if (this.selectedTodo === undefined) {
        this.todoService.getSingleTodo(this.todoID)
          .subscribe((res) => {
            this.selectedTodo = res;
            this.editForm.controls['title'].setValue(this.selectedTodo.title);
            this.editForm.controls['note'].setValue(this.selectedTodo.note);
          });
      } else {
          this.editForm.controls['title'].setValue(this.selectedTodo.title);
          this.editForm.controls['note'].setValue(this.selectedTodo.note);
      }
    });
  }

  createForm() {
    this.editForm = this.builder.group({
      title: this.title,
      note: this.note
    });
  }

  onSubmit() {
    // const updatedTodo = Objecet.assign(new Todo())
    // tslint:disable-next-line:max-line-length
    const todo = new Todo(this.editForm.value.title, this.editForm.value.note, this.selectedTodo.owner, this.selectedTodo.number, this.selectedTodo.completed, this.selectedTodo.id);
    this.todoService.updateTodo(todo, false)
      .subscribe(res => {
        this.router.navigate(['home/details', this.todoID]);
      });
    console.log('im saving the new values');
  }

  ngOnInit() {
    // this.todoService.updateTodo(this.selectedTodo, )
  }
}

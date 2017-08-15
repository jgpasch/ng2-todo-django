// import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { Subscription } from 'rxjs/Subscription';

// @Component({
//   selector: 'app-create-todo',
//   templateUrl: './create.component.html'
// })
// export class CreateGroupComponent implements OnInit {
//   groupForm: FormGroup;
//   // newTodo: Todo;
//   // groupName: string;
//   groupName = new FormControl('', [ Validators.required ]);
//   loading = false;
//   @Output() todoCreated: EventEmitter<string> = new EventEmitter<string>();
//   @ViewChild('first') firstInput;
//   subscription: Subscription;


//   constructor(
//     private groupService: GroupService,
//     private formBuilder: FormBuilder,
//     private groupCreatedService: GroupCreatedService) {

//       this.createForm();
//       this.subscription = groupCreatedService.todoConfirmed$.subscribe((todo) => {
//       });
//   }

//   onSubmit(event) {
//     if (this.groupForm.valid) {
//       event.preventDefault();
//       this.newTodo = new Todo(this.groupName.value , this.note.value , 'John Paschal');

//       // put this line below back in, if you decide that the frontend should choose the ID
//       // this would be for quickness of the todos appearing in the list.
//       // this.todoCreated.emit(this.newTodo);

//       this.todoService.createTodo(this.groupName.value , this.note.value, 'John Paschal').subscribe((result) => {
//         toastr.success('Todo has been saved!');
//         this.newTodo.id = result.id;
//         // this.todoCreated.emit(this.newTodo);
//         this.groupCreatedService.announceTodo(this.newTodo);
//       });
//       this.groupForm.controls['groupName'].setValue('');
//       this.groupForm.controls['note'].setValue('');
//       this.firstInput.nativeElement.focus();

//       this.groupName.markAsUntouched();
//       this.groupName.markAsPristine();



//     } else {
//       this.groupName.markAsTouched();
//     }
//   }

//   createForm() {
//     this.groupForm = this.formBuilder.group({
//       groupName: this.groupName
//     });
//   }

//   ngOnInit() {
//     this.firstInput.nativeElement.focus();
//   }

// }

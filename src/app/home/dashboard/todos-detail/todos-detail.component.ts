import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../../../../services/SearchService';
import { TodoService } from '../../../../services/TodoService';
import Todo from '../../../../common/Todo';

@Component({
  selector: 'app-todos-detail',
  templateUrl: './todos-detail.component.html'
})
export class TodosDetailComponent implements OnInit {
  selectedTodo: Todo;
  todoID: number;

  constructor(private router: Router, private route: ActivatedRoute, private todoService: TodoService) { }

  goToCreate() {
    this.router.navigate(['home/create']);
  }

  ngOnInit() {
    // get the todo ID from route params
    this.route.params.subscribe(params => {
      this.todoID = +params['id'];

      // set the selected Todo, if we already have pulled todos from server
      this.selectedTodo = this.todoService.getLocalTodo(this.todoID);

      // if this is a fresh page load (aka we don't have todos from server yet)
      // then get the single todo from the server.
      if (this.selectedTodo === undefined) {
        this.todoService.getSingleTodo(this.todoID)
          .subscribe((res) => {
            this.selectedTodo = res;
          });
      }
    });
  }



}

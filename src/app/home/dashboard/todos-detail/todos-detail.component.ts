import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../../../services/SearchService';
import Todo from '../../../../common/Todo';

@Component({
  selector: 'app-todos-detail',
  templateUrl: './todos-detail.component.html'
})
export class TodosDetailComponent implements OnInit {
  @Input() selectedTodo: Todo;
  // done: boolean = false;

  constructor() { }

  goToCreate() {
    console.log('going to create display');
    delete this.selectedTodo;
    console.log(this);
  }

  ngOnChanges() {
    console.log('things changed');
  }

  ngOnInit() {
    // console.log(this.done);
  }



}

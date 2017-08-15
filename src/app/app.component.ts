import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/TodoService';
import { UserService } from '../services/UserService';
import Todo from '../common/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../assets/styles/reset.scss']
})
export class AppComponent implements OnInit {
  groups: string[];
  constructor(private todoService: TodoService, private router: Router, private userService: UserService) {
    this.groups = [];
  }

  ngOnInit() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

}

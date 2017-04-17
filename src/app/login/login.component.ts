import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/UserService';

@Component({
selector: 'app-login',
templateUrl: 'login.component.html',
styleUrls: ['login.component.scss'],
encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/home/create']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}

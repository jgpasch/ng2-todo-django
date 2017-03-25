import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  
  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    this.userService.login(this.model.username, this.model.password).subscribe((result) => {
      console.log(result);
      if (result) {
        console.log('trying to navigate to home page');
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

import { UserService } from '../../../services/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  username = new FormControl('', []);
  password = new FormControl('', []);

  constructor(private userService: UserService, private router: Router, private builder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.builder.group({
      username: this.username,
      password: this.password
    });
  }

  onSubmit() {
    this.userService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((result) => {
      if (result) {
        console.log('trying to navigate to home page');
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

import { UserService } from '../../../services/UserService';
import { ToastrService } from '../../../services/ToastrService';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('firstInput') firstInput;

  username = new FormControl('', [ Validators.required ]);
  password = new FormControl('', [ Validators.required ]);

  constructor(private userService: UserService, private router: Router, private builder: FormBuilder, private toastr: ToastrService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.builder.group({
      username: this.username,
      password: this.password
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((result) => {
        if (result) {
          this.router.navigate(['']);
        }
      }, (err) => {
        const json = JSON.parse(err._body);
        this.toastr.warning(json.error_description);
        this.firstInput.nativeElement.focus();
      });
    } else {
      this.username.markAsTouched();
      console.log('marked');
      this.password.markAsTouched();
    }
  }

  ngOnInit() {
    this.firstInput.nativeElement.focus();
  }


}

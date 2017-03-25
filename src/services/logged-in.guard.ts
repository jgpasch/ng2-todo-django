import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './UserService';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  canActivate() {
    console.log(`this user is logged in: ${this.user.isLoggedIn()}`);
    if (this.user.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
    // return true;
  }
}
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './UserService';

@Injectable()
export class NotLoggedInGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  canActivate() {
    if (!this.user.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}

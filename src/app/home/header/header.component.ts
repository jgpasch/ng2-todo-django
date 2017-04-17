import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/UserService';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscrition: Subscription;

  constructor(private user: UserService, private router: Router) { }

  logout() {
    this.user.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}

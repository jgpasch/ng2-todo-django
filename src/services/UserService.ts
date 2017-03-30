import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { serverSettings } from '../config/server';

@Injectable()
export class UserService {
  // private subject = new Subject<any>();
  private loggedIn = false;
  private userNm = localStorage.getItem('username') || '';

  constructor(private http: Http) {
    // console.log(localStorage.getItem('auth_token'));
    this.loggedIn = !!localStorage.getItem('auth_token');
    console.log(`isLoggedIn: ${this.loggedIn}`);
  }

  login(username, password) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const client_id = serverSettings.client_id;
    // tslint:disable-next-line:max-line-length
    const client_secret = serverSettings.client_secret;

    // tslint:disable-next-line:max-line-length
    const body = `grant_type=password&username=${username}&password=${password}&client_id=${client_id}&client_secret=${client_secret}`;

    return this.http.post(`${serverSettings.url}/o/token/`, body, { headers})
    .map(res => res.json())
    .map((res) => {
      // save token and username in localStorage
      localStorage.setItem('auth_token', res.access_token);
      localStorage.setItem('username', username);

      // save the username locally and set loggedIn to true
      this.userNm = username;
      this.loggedIn = true;
      toastr.success('Welcome back ' + this.userNm + '!');

      return res;
    });
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
    this.loggedIn = false;
  }
  
  isLoggedIn() {
    return this.loggedIn;
  }

  getUsername() {
    return this.userNm;
  }
}
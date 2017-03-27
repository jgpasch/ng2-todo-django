import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Subject } from 'rxjs/Subject';
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

  // sendMessage(message: String) {
  //   this.subject.next({text: message});
  // }

  // clearMessage() {
  //   this.subject.next();
  // }

  // getMessage(): Observable<any> {
  //   return this.subject.asObservable();
  // }

  login(username, password) {
    const client_id = '3yPN428VSMxaf6Oj7ZJRsixdHX2b0tf5HDGzxuJj';
    // tslint:disable-next-line:max-line-length
    const client_secret = 'jW2D7KiLXp5o7JoFpQQBA0UkQafnCkHFZDItNAF6P99UgaGEwEGeZJVH7c37FayPGhOznLQaZZoEO9Qdm1AZMjYqrs6RbOHrNEh4LW2XFttnEdi9ITZfJbveFfMjpw6E';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
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
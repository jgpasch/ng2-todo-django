import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Subject } from 'rxjs/Subject';
import { Http, Headers } from '@angular/http';

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
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body = `grant_type=password&username=${username}&password=${password}&client_id=SS3IHewuV47UvFpwnSg62gd4vCbGAALjfptzpzlf&client_secret=bucflIepziCzzUIg6Q65ZcAizCGwPlr46goxxogSNM3sIBBMZrIahe8DLxhbMamvkMoA7R7eb5quAoEU3JUCeVjR4C4RnZUhQFelAw7VGR8MGAbdDDaUa4tZWjBuR13l`;

    return this.http.post('http://localhost:8000/o/token/', body, { headers})
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
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Http, Headers } from '@angular/http';
import { serverSettings } from '../config/localServer';
import { ToastrService } from '../services/ToastrService';

@Injectable()
export class UserService {
  public loggedIn = false;
  private userNm = localStorage.getItem('username') || '';

  constructor(private http: Http, private toastrService: ToastrService) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(username, password) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const client_id = serverSettings.client_id;
    const client_secret = serverSettings.client_secret;

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
      this.toastrService.success('Welcome back ' + this.userNm + '!');

      return res;
    })
    .catch(err => {
      console.log('im here');
      return Observable.throw(err);
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
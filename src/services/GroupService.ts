import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import Group from '../common/Group';
import { serverSettings } from '../config/server';

@Injectable()
export class GroupService {
  private groups: Group[] = [];

  constructor(private http: Http) {}

  getGroups(): Observable<Group[]> {
    let headers = new Headers();
    const token = localStorage.getItem('auth_token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',  `Bearer ${token}`);

    return this.http.get(`${serverSettings.url}/groups/`, {headers})
      .map(res => res.json())
      .map((res) => {
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
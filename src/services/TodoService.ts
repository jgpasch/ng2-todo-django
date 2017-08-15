import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import Todo from '../common/Todo';
import { serverSettings } from '../config/localServer';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  constructor(private http: Http) { }

  getLocalTodo(id): Todo {
    return (this.todos.filter((todo) => {
      return todo.id === id;
    }))[0];
  }

  getSingleTodo(id): Observable<Todo> {

    const headers = new Headers();
    const token = localStorage.getItem('auth_token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',  `Bearer ${token}`);

    return this.http.get(`${serverSettings.url}/todos/${id}/`, { headers })

      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

  getTodos(): Observable<Todo[]> {
    const headers = new Headers();
    const token = localStorage.getItem('auth_token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',  `Bearer ${token}`);

    return this.http.get(`${serverSettings.url}/todos/`, {headers})
      .map(res => res.json())
      .map((res) => {
        this.todos = res;
        return res;
      })
      .catch(this.handleError);
  }

  updateTodo(todo, completed): Observable<any> {
    const headers = new Headers();
    const token = localStorage.getItem('auth_token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',  `Bearer ${token}`);

    // tslint:disable-next-line:max-line-length
    return this.http.put(`${serverSettings.url}/todos/${todo.id}/`, JSON.stringify({title: todo.title, note: todo.note, owner: todo.owner, completed }), {headers})
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

  createTodo(title, note, owner, group): Observable<any> {
    const headers = new Headers();
    const token = localStorage.getItem('auth_token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',  `Bearer ${token}`);

    // const newTodo: Todo = new Todo(title, note, owner);
    return this.http.post(`${serverSettings.url}/todos/`, JSON.stringify({title, note, owner, group}), {headers})
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import Todo from '../common/Todo';
import { serverSettings } from '../config/server';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  //   new Todo('Learn about Webpack 2', 'www.webpack.com', 'John Paschal'),
  //   new Todo('Go through node rest api source', 'npm.org', 'John Paschal'),
  //   new Todo('Read oldcastle proposal', 'www.oldcastle.com', 'John Paschal'),
  //   new Todo('Order lunch for the team', 'www.fiveguys.com', 'John Paschal')    
  // ];


  constructor(private http: Http) { }

  getTodos(): Observable<Todo[]> {
    const headers = new Headers();
    const token = localStorage.getItem('auth_token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',  `Bearer ${token}`);

    return this.http.get(`${serverSettings.url}/todos/`, {headers})
      .map(res => res.json())
      .map((res) => {
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
        console.log('done');
        return res;
      });
  }

  createTodo(title, note, owner): Observable<any> {
    console.log('creating new todo', title, note, owner);
    const headers = new Headers();
    const token = localStorage.getItem('auth_token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',  `Bearer ${token}`);

    // const newTodo: Todo = new Todo(title, note, owner);
    return this.http.post(`${serverSettings.url}/todos/`, JSON.stringify({title, note, owner}), {headers})
      .map(res => res.json())
      .map((res) => {
        console.log('done');
        return res;
      });
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import Todo from '../common/Todo';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  results;
  
  constructor(private http: Http) { }

  getTodos(myQuery) {
    return this.http.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyD6BTGdvYGS7oGprF-Sw4TM1AINcnvPUaU&cx=005197000115486446597:zeb0jqexzii&q=${myQuery}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res)
    let body = res.json();
    return body.items || {};
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

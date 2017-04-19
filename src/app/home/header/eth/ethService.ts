import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class EthService {
  private url = 'https://api.coinbase.com/v2/prices/ETH-USD/buy';

  constructor(private http: Http) { }

  getPrice(): Observable<any> {
    return this.http.get(this.url)
      .map(res => res.json())
      .map(res => res);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}

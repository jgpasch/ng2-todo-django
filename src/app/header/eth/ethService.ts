import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  // updatePrice(todo, completed): Observable<number> {
  //   return 0;
  // }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}

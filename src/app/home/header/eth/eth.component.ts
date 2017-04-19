import { Component, OnInit } from '@angular/core';
import { EthService } from './ethService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-eth',
  templateUrl: './eth.component.html',
  styleUrls: ['./eth.component.css']
})
export class EthComponent implements OnInit {
  ethPrice: number;

  constructor(private ethService: EthService) {

  }

  ngOnInit() {
    this.ethService.getPrice().subscribe((res) => {
      this.ethPrice = res.data.amount - .50;
    });

    const obs = Observable.interval(60000)
      .switchMap(() => this.ethService.getPrice())
      .map(res => res.data);

    obs.subscribe(res => this.ethPrice = res.amount);

  }

}

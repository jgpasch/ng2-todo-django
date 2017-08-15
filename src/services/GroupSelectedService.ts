import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GroupSelectedService {
  group: string;
  private groupSelectedSource = new Subject<string>();
  private groupConfirmedSource = new Subject<string>();

  groupSelected$ = this.groupSelectedSource.asObservable();
  groupConfirmed$ = this.groupConfirmedSource.asObservable();

  selectGroup(groupName: string) {
    console.log('group selected');
    this.group = groupName;
    this.groupSelectedSource.next(groupName);
  }

  confirmGroup(received: string) {
    this.groupConfirmedSource.next(received);
  }
}

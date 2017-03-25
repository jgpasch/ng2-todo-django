import { Pipe, PipeTransform, Injectable } from '@angular/core';
import Group from '../common/Group';

@Pipe({
  name: 'gridFilterPipe'
})
@Injectable()
export class GridFilterPipe implements PipeTransform {
  transform(allGroups: Group[], fieldToMatch: string, textToMatch: string): any {
    if (textToMatch == "" || textToMatch == null) {
      return allGroups;
    }
    textToMatch = textToMatch.toLowerCase();
    let returnList = allGroups.filter(group => group[fieldToMatch].toLowerCase().indexOf(textToMatch) !== -1);
    if (returnList.length > 0) {
      return returnList;
    } else {
      return [-1];
    }
  }
}
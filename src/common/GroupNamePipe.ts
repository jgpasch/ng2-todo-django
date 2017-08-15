import { Pipe, PipeTransform, Injectable } from '@angular/core';


@Pipe({
  name: 'groupName',
  pure: false
})
export class GroupNamePipe implements PipeTransform {
  transform(todos: any[], target: string) {
    if (todos.length === 0 || !target) {
      return null;
    }
    return todos.filter(todo => {
      return todo.group === target;
    });
  }
}

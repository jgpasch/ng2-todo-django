import { Component, ViewEncapsulation } from '@angular/core';
import Todo from '../common/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../assets/styles/reset.scss']
})
export class AppComponent {
  // selectedTodo: Todo;
  title = 'app works!';
}

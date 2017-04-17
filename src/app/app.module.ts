import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoService } from '../services/TodoService';
import { SearchService } from '../services/SearchService';
import { ToastrService } from '../services/ToastrService';
import { UserService } from '../services/UserService';
import { LoggedInGuard } from '../services/logged-in.guard';
import { NotLoggedInGuard } from '../services/not-logged-in.guard';


import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    TodoService,
    SearchService,
    UserService,
    ToastrService,
    LoggedInGuard,
    NotLoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

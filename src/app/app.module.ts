import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { TodoService } from '../services/TodoService';
import { SearchService } from '../services/SearchService';
import { ToastrService } from '../services/ToastrService';
import { UserService } from '../services/UserService';
import { LoggedInGuard } from '../services/logged-in.guard';
import { NotLoggedInGuard } from '../services/not-logged-in.guard';
import { EthComponent } from './home/header/eth/eth.component';
import { EthService } from './home/header/eth/ethService';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EthComponent
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
    NotLoggedInGuard,
    EthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

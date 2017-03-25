import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodosDetailComponent } from './todos/todos-detail/todos-detail.component';
import { TodoService } from '../services/TodoService';
import { GroupService } from '../services/GroupService';
import { SearchService } from '../services/SearchService';
import { ToastrService } from '../services/ToastrService';
import { UserService } from '../services/UserService';
import { LoggedInGuard } from '../services/logged-in.guard';
import { NotLoggedInGuard } from '../services/not-logged-in.guard';
import { TodosItemComponent } from './todos/todos-list/todos-item.component';
import { HomeComponent } from './todos/home/home.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';
import { CreateComponent } from './create/create.component';
import { TodosGridPageComponent } from './todos-grid-page/todos-grid-page.component';
import { TableLayoutComponent } from '../common/table-layout/table-layout.component';
import { FormatPipeCell } from '../common/format-cell.pipe';
import { GridFilterPipe } from '../common/grid-filter.pipe';
import { TruncatePipe } from '../common/truncate.pipe';
import { CustomSelectComponent } from '../common/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosListComponent,
    TodosDetailComponent,
    TodosItemComponent,
    HomeComponent,
    LoginComponent,
    CreateComponent,
    TodosGridPageComponent,
    TableLayoutComponent,
    FormatPipeCell,
    GridFilterPipe,
    TruncatePipe,
    CustomSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    TodoService,
    GroupService,
    SearchService,
    UserService,
    ToastrService,
    LoggedInGuard,
    NotLoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

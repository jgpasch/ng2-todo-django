import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CreateComponent } from './dashboard/create/create.component';
import { TodosDetailComponent } from './dashboard/todos-detail/todos-detail.component';
import { TodosListComponent } from './dashboard/todos-list/todos-list.component';
import { TodosItemComponent } from './dashboard/todos-list/todos-item.component';

import { TruncatePipe } from '../../common/truncate.pipe';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            HomeRoutingModule],
  providers: [],
  declarations: [ HomeComponent,
                  DashboardComponent,
                  CreateComponent,
                  TodosDetailComponent,
                  TodosListComponent,
                  TodosItemComponent,
                  TruncatePipe],
  exports: [ HomeComponent ]
})
export class HomeModule { }

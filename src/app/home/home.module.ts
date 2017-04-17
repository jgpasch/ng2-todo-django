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

import { HeaderComponent } from './header/header.component';
import { EthComponent } from './header/eth/eth.component';
import { EthService } from './header/eth/ethService';

import { DetailsEditComponent } from './dashboard/todos-detail/edit/todos-details-edit.component';

import { TruncatePipe } from '../../common/truncate.pipe';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            HomeRoutingModule],
  providers: [ EthService ],
  declarations: [ HomeComponent,
                  DashboardComponent,
                  CreateComponent,
                  TodosDetailComponent,
                  TodosListComponent,
                  TodosItemComponent,
                  TruncatePipe,
                  HeaderComponent,
                  EthComponent,
                  DetailsEditComponent],
  exports: [ HomeComponent ]
})
export class HomeModule { }

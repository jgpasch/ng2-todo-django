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
import { TodoCreatedService } from '../../services/TodoCreatedService';
import { GroupSelectedService } from '../../services/GroupSelectedService';

import { DetailsEditComponent } from './dashboard/todos-detail/edit/todos-details-edit.component';

import { TruncatePipe } from '../../common/truncate.pipe';
import { GroupNamePipe } from '../../common/GroupNamePipe';
import { TodosGroupsComponent } from './dashboard/todos-groups/todos-groups.component';
import { GroupItemComponent } from './dashboard/todos-groups/group-item/group-item.component';
// import { CreateGroupComponent } from './dashboard/create-group/create-group.component';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            HomeRoutingModule,
          ],
  providers: [ EthService, TodoCreatedService, GroupSelectedService ],
  declarations: [ HomeComponent,
                  DashboardComponent,
                  CreateComponent,
                  TodosDetailComponent,
                  TodosListComponent,
                  TodosItemComponent,
                  TruncatePipe,
                  GroupNamePipe,
                  HeaderComponent,
                  EthComponent,
                  DetailsEditComponent,
                  TodosGroupsComponent,
                  GroupItemComponent
                  // CreateGroupComponent
                ],
  exports: [ HomeComponent ]
})
export class HomeModule { }

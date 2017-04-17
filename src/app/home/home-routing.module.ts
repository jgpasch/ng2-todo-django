import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CreateComponent } from './dashboard/create/create.component';
import { TodosDetailComponent } from './dashboard/todos-detail/todos-detail.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent,
        children: [
          { path: 'create', component: CreateComponent },
          { path: 'details/:id', component: TodosDetailComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }

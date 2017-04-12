import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginRouting } from './login.routing';

@NgModule({
  imports: [ LoginRouting ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule { }
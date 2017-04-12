import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      { path: '', component: LoginFormComponent }
    ]
  }
];

export const LoginRouting = RouterModule.forChild(routes);
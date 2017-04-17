import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './todos/home/home.component';
// import { LoginComponent } from '../app/login/login.component';
// import { TodosGridPageComponent } from './todos-grid-page/todos-grid-page.component';
import { LoggedInGuard } from '../services/logged-in.guard';
// import { NotLoggedInGuard } from '../services/not-logged-in.guard';

// const routes = [
//   { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [LoggedInGuard] },
//   { path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard] },
//   { path: 'grid', component: TodosGridPageComponent, canActivate: [LoggedInGuard] }
// ];

const routes: Routes = [
  { path: '', redirectTo: 'home/create', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule', canActivate: [LoggedInGuard] }
];

export const routing = RouterModule.forRoot(routes);
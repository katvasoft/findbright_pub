import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './dashboard/login/login.component';
import { SignUpComponent } from './dashboard/sign-up/sign-up.component';
import {RouteGuard} from './RouteGuard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [RouteGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SetupComponent } from './setup/setup.component';
import { ResultMgmComponent } from './result-mgm/result-mgm.component';
import { UsersComponent } from './users/users.component';
import { BillingComponent } from './billing/billing.component';
import { FeedbackComponent } from './feedback/feedback.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'resultMgm', component: ResultMgmComponent },
  { path: 'users', component: UsersComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'feedback', component: FeedbackComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

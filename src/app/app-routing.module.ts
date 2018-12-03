import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { UserManagementPageComponent } from './ui/user-management-page/user-management-page.component';
import { EditUserComponent } from './ui/edit-user/edit-user.component';
import { ChartofaccountsComponent } from './ui/chartofaccounts/chartofaccounts.component';
import { JournalComponent } from './ui/journal/journal.component';
import { LedgerComponent } from './ui/ledger/ledger.component';
import { TrialbalanceComponent } from './ui/trialbalance/trialbalance.component';
import { EditaccountComponent } from './ui/editaccount/editaccount.component';



const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'users', component: UserManagementPageComponent, canActivate: [AuthGuard] },
  { path: 'edit-user/:uid', component: EditUserComponent, canActivate: [AuthGuard] },
  { path: 'ledger/:accountId/:accountName/:normalSide', component: LedgerComponent, canActivate: [AuthGuard] },
  { path: 'chartofaccounts', component: ChartofaccountsComponent, canActivate: [AuthGuard] },
  { path: 'journal', component: JournalComponent, canActivate: [AuthGuard] },
  { path: 'trial', component: TrialbalanceComponent, canActivate: [AuthGuard] },
  { path: 'editaccount/:accountId', component: EditaccountComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

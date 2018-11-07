import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { JournalComponent } from './journal/journal.component';
import { ModalComponent } from './modal/modal.component';
import { ChartofaccountsComponent } from './chartofaccounts/chartofaccounts.component';
import { LedgerComponent } from './ledger/ledger.component';
import { FilterPipe } from './filter.pipe';
import { TrialbalanceComponent } from './trialbalance/trialbalance.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  declarations: [
    UserLoginComponent,
    HomePageComponent,
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    UserFormComponent,
    UserManagementPageComponent,
    EditUserComponent,
    JournalComponent,
    ModalComponent,
    ChartofaccountsComponent,
    LedgerComponent,
    FilterPipe,
    TrialbalanceComponent
  ],
  exports: [
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    UserFormComponent,
    ModalComponent
  ]
})
export class UiModule { }

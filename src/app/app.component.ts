import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { TransactionsService } from './ui/journal/transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private auth: AuthService, private accountService: TransactionsService) { }

  resetAllAccounts() {
    this.accountService.resetAllAccounts();
  }
}

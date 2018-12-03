import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../journal/transactions.service';

@Component({
  selector: 'income-statement',
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.scss']
})
export class IncomeStatementComponent implements OnInit {

  accountList;
  revenuesAccounts = [];
  expensesAccounts = [];

  revenuesAccountsTotal = 0;
  expensesAccountsTotal = 0;

  constructor(private accountService: TransactionsService) { }

  ngOnInit() {
    this.accountService.getAccountsForIncomeStatement().subscribe(accounts => {
      this.accountList = accounts;
      for(let i = 0; i < accounts.length; i++) {
        if(accounts[i].category === 'Expenses') {
          this.expensesAccountsTotal += accounts[i].debitAmount - accounts[i].creditAmount;
        } else {
          this.revenuesAccountsTotal += accounts[i].creditAmount - accounts[i].debitAmount;
        }
      }
    });
  }
}

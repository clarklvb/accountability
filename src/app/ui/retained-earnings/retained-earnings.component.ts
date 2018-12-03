import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../journal/transactions.service';

@Component({
  selector: 'retained-earnings',
  templateUrl: './retained-earnings.component.html',
  styleUrls: ['./retained-earnings.component.scss']
})
export class RetainedEarningsComponent implements OnInit {
  
  currentDate: number = Date.now();
  
  initialAccountBalance = 0;
  revenuesAccountsTotal = 0;
  expensesAccountsTotal = 0;
  dividends = 0;
  accountList;

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

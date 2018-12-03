import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionsService } from '../journal/transactions.service';

@Component({
  selector: 'trialbalance',
  templateUrl: './trialbalance.component.html',
  styleUrls: ['./trialbalance.component.scss']
})
export class TrialbalanceComponent implements OnInit {
  currentDate: number = Date.now();
  accountListWithBalance: Observable<any[]>;
  debitTotal: number = 0;
  creditTotal: number = 0;
  creditTotals = [];
  debitTotals = [];

  constructor(private accountService: TransactionsService) { }
  ngOnInit() {
    this.accountListWithBalance = this.accountService.getAccountListWithBalance();
  }

  updateTotalBalance(amount, type) {
    if(type === "debit") {
      this.debitTotals.push(amount);
    } else {
      this.creditTotals.push(amount);
    }
  }

  getTotal(type) {
    let debitTotalValue = 0;
    let creditTotalValue = 0;

    if(type === 'debit') {
      for(let i = 0; i < this.debitTotals.length; i++) {
        debitTotalValue += this.debitTotals[i];
      }
      return debitTotalValue;
    } else {
      for(let i = 0; i < this.creditTotals.length; i++) {
        creditTotalValue += this.creditTotals[i];
      }
      return creditTotalValue;
    }
  }
}

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
    if(type === 'debit') {
      for(let i = 0; i < this.debitTotals.length; i++) {
        this.debitTotal += this.debitTotals[i];
      }
      return this.debitTotal;
    } else {
      for(let i = 0; i < this.creditTotals.length; i++) {
        this.creditTotal += this.creditTotals[i];
      }
      return this.creditTotal;
    }   
  }
}

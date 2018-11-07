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

  constructor(private accountService: TransactionsService) { }
  ngOnInit() {
    this.accountListWithBalance = this.accountService.getAccountListWithBalance();
  }

  updateTotal(amount: number = 0, type: string) {
    if (type === 'debit') {
      this.debitTotal += amount;
    } else {
      this.creditTotal += amount;
    }
    return amount;
  }
}

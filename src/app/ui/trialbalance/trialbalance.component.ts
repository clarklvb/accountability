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
  accountListWithBalance;
  debitTotal: number = 0;
  creditTotal: number = 0;

  constructor(private accountService: TransactionsService) { }
  ngOnInit() {
    this.accountService.getAccountListWithBalance().subscribe(accounts => {
      this.accountListWithBalance = accounts;
      for(let i = 0; i < this.accountListWithBalance.length; i++) {
        if(accounts[i].normalside === 'debit') {
          this.debitTotal += accounts[i].debitAmount - accounts[i].creditAmount;
        } else {
          this.creditTotal += accounts[i].creditAmount - accounts[i].debitAmount;
        }
      }
    });
  }
}

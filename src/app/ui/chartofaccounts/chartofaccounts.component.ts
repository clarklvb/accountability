import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../journal/transactions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'chartofaccounts',
  templateUrl: './chartofaccounts.component.html',
  styleUrls: ['./chartofaccounts.component.scss']
})
export class ChartofaccountsComponent implements OnInit {

  accounts: Observable<any[]>

  constructor(private accountsService: TransactionsService) {
    this.accounts = this.accountsService.getAccountList();
  }

  ngOnInit() {
  }

}

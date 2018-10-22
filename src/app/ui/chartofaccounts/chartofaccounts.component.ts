import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../journal/transactions.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'chartofaccounts',
  templateUrl: './chartofaccounts.component.html',
  styleUrls: ['./chartofaccounts.component.scss']
})
export class ChartofaccountsComponent implements OnInit {

  accounts: Observable<any[]>

  constructor(private accountsService: TransactionsService, private authService: AuthService) {
    this.accounts = this.accountsService.getAccountsNoCondition();
  }
  
  
  
  ngOnInit() {
  }

  toggleAccountActive(id: string, value: boolean) {
    this.accountsService.toggleAccountActive(id, value);
  }

}

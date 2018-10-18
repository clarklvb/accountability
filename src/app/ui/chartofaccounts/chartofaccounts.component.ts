import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../journal/transactions.service';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { AuthService } from 'src/app/core/auth.service';
=======
import { AuthService } from '../../core/auth.service';
>>>>>>> 5cd42a15697be81c0416bb39356138609bf893aa

@Component({
  selector: 'chartofaccounts',
  templateUrl: './chartofaccounts.component.html',
  styleUrls: ['./chartofaccounts.component.scss']
})
export class ChartofaccountsComponent implements OnInit {

  accounts: Observable<any[]>
<<<<<<< HEAD

  constructor(private accountsService: TransactionsService, private authService: AuthService) {
    this.accounts = this.accountsService.getAccountsNoCondition();
=======
	
  constructor(private accountsService: TransactionsService, private auth: AuthService) {
    this.accounts = this.accountsService.getAccountList();
>>>>>>> 5cd42a15697be81c0416bb39356138609bf893aa
  }
  
  
  
  ngOnInit() {
  }
<<<<<<< HEAD

  toggleAccountActive(id: string, value: boolean) {
    this.accountsService.toggleAccountActive(id, value);
  }

}
=======
}
>>>>>>> 5cd42a15697be81c0416bb39356138609bf893aa

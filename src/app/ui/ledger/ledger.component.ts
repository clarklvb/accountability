import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LedgerService } from './ledger.service';

@Component({
  selector: 'ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent {

  accountId: string;
  ledger: any;
  runningBalance: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private ledgerService: LedgerService) {
    this.accountId = this.route.snapshot.paramMap.get('accountId');
    this.ledger = ledgerService.getLedger(this.accountId);
  }

  public getRunningBalance (amount: number, add: boolean) {
    return add ? this.runningBalance += amount : this.runningBalance -= amount;
  }
}

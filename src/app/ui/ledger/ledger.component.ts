import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LedgerService } from './ledger.service';

@Component({
  selector: 'ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent implements OnInit {

  accountId: string;
  accountName: string;
  normalSide: string;
  ledger: any;
  ledgerCollection: AngularFirestoreCollection;
  runningBalance: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private afs: AngularFirestore, private ledgerService: LedgerService) { }

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('accountId');
    this.accountName = this.route.snapshot.paramMap.get('accountName');
    this.normalSide = this.route.snapshot.paramMap.get('normalSide');
    this.ledger = this.ledgerService.getLedger(this.accountId);
  }

  // look into fixing runningBalance 
  public getRunningBalance (debit: number, credit: number, normalSide: string) {
    if (normalSide === 'debit') {
      return debit ? this.runningBalance += debit : this.runningBalance -= credit;
    } else {
      return debit ? this.runningBalance -= debit : this.runningBalance += credit;
    }
  }
}

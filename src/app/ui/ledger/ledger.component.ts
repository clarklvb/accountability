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
<<<<<<< HEAD
    this.ledger = ledgerService.getLedger(this.accountId);
  }

  public getRunningBalance (amount: number, add: boolean) {
    return add ? this.runningBalance += amount : this.runningBalance -= amount;
=======
    this.ledger = this.getLedger(this.accountId);
  }

  public getRunningBalance (amount: number, add: boolean) {
    return add ? this.runningBalance + amount : this.runningBalance - amount;
  }

  private getLedger(id: string) {
    console.log(id)
    return this.afs.collection("ledger").doc(id).ref.get()
      .then(function(doc) {
          if (doc.exists) {
            return doc.data();
          } else {
            console.log("No such document!");
          }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
>>>>>>> e39a7fa2de10c104ca2be8086b4f45bf2d764546
  }
}

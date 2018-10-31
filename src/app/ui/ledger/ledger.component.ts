import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent implements OnInit {

  accountId: string;
  ledger: any;
  ledgerCollection: AngularFirestoreCollection;
  runningBalance: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private afs: AngularFirestore) { }

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('accountId');
    this.ledgerCollection = this.afs.collection('ledgers', (ref) => ref.where('accountId', '==', this.accountId));
    
    this.ledger = this.getLedger(this.accountId);
  }

  public getRunningBalance (amount: number, add: boolean) {
    return add ? this.runningBalance + amount : this.runningBalance - amount;
  }

  private getLedger(id: string) {
    return this.ledgerCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }
}

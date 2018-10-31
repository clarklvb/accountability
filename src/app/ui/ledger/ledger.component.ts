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

  constructor(private route: ActivatedRoute, private router: Router, private afs: AngularFirestore) {
    this.ledgerCollection = this.afs.collection('ledgers', (ref) => ref.where('accountId', '==', this.accountId));
  }

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('accountId');
    this.ledger = this.getLedger(this.accountId);
  }

  private getLedger(id: string) {
    return this.afs.collection("ledgers").doc(id).ref.get()
      .then(function(doc) {
          if (doc.exists) {
            return doc.data();
          } else {
            console.log("No such document!");
          }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
}

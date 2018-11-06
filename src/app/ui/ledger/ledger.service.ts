import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  ledgerCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) { }

  updateLedger(id: string, data: any) {
    this.afs.collection('chartofaccounts').doc(id).ref.get().then(doc => {
      if (doc.data().normalside === 'debit') {
        data.runningBalance = doc.data().debitAmount - doc.data().creditAmount;
        this.afs.collection('ledger').add(data);
      } else {
        data.runningBalance = doc.data().creditAmount - doc.data().debitAmount;
        this.afs.collection('ledger').add(data);
      }
    });
  }

  public getLedger(id: string) {
    this.ledgerCollection = this.afs.collection('ledger', (ref) => ref.where('accountId', '==', id).orderBy('createdAt', 'asc'));
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

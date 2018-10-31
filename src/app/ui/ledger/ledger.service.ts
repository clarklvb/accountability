import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  ledgerCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) { 
  }

  updateLedger(id: string, data: any) {
    console.log(id, data)
    return this.afs.doc<any>(`ledger/${id}`).set(data);
  }

  public getLedger(id: string) {
    this.ledgerCollection = this.afs.collection('ledgers', (ref) => ref.where('accountId', '==', id));

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

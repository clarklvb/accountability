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

  updateLedger(data: any) {
    //return this.afs.doc<any>(`ledger/${id}`).set(data);
    return this.afs.collection('ledger').add(data);
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

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  transactionsCollection: AngularFirestoreCollection;
  accountsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.accountsCollection = this.afs.collection('chartofaccounts');
    this.transactionsCollection = this.afs.collection('transactions', (ref) => ref.orderBy('createdAt', 'desc'));
  }

  addJournalEntry(entry) {
    this.transactionsCollection.add(entry);
  }

  getAccountList(): Observable<any[]> {
    return this.accountsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

  getTransactionsList() {
    return this.transactionsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }
}

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
  accountsCollectionNoCondition: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.accountsCollection = this.afs.collection('chartofaccounts', (ref) => ref.where('enabled', '==', true).orderBy('name', 'asc'));
    this.accountsCollectionNoCondition = this.afs.collection('chartofaccounts', (ref) => ref.orderBy('name', 'asc'));
    this.transactionsCollection = this.afs.collection('transactions', (ref) => ref.where('userId', '==', this.authService.userId).orderBy('createdAt', 'desc'));
  }

  addJournalEntry(entry) {
    this.transactionsCollection.add(entry);
  }

  getAccountsNoCondition(): Observable<any[]> {
    return this.accountsCollectionNoCondition.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
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

  toggleAccountActive(id: string, value: boolean) {
    this.accountsCollection.doc(id).update({enabled: value});
  }

  deleteTransaction(id: string) {
    this.transactionsCollection.doc(id).delete();
  }

  toggleApproval(id: string, value: boolean) {
    this.transactionsCollection.doc(id).update({approved: value});
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

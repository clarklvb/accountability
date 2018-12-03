import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../../core/auth.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventLogService } from '../event-log.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  transactionsCollection: AngularFirestoreCollection;
  accountsCollection: AngularFirestoreCollection;
  accountsCollectionNoCondition: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private authService: AuthService, private eventLogService: EventLogService) {
    this.accountsCollection = this.afs.collection('chartofaccounts', (ref) => ref.where('enabled', '==', true).orderBy('name', 'asc'));
    this.accountsCollectionNoCondition = this.afs.collection('chartofaccounts', (ref) => ref.orderBy('name', 'asc'));
    // this.transactionsCollection = this.afs.collection('transactions', (ref) => ref.where('userId', '==', this.authService.userId).orderBy('createdAt', 'desc'));
    this.transactionsCollection = this.afs.collection('transactions', (ref) => ref.orderBy('createdAt', 'desc'));
  }

  addJournalEntry(entry) {
    this.transactionsCollection.add(entry);
  }

  addAccount(account) {
    this.accountsCollectionNoCondition.add(account);
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

  getAccountsForCurrentRatio() {
    let accountsCurrentAsset = this.afs.collection('chartofaccounts', (ref) => ref.where('hasBalance', '==', true).where('subcategory', '==', 'Current Asset')).valueChanges();
    let accountsCurrentLiability = this.afs.collection('chartofaccounts', (ref) => ref.where('hasBalance', '==', true).where('subcategory', '==', 'Current Liability')).valueChanges();

    const combinedList = combineLatest<any[]>(accountsCurrentAsset, accountsCurrentLiability).pipe(
      map(arr => arr.reduce((acc, cur) => acc.concat(cur) ) ),
    )

    return combinedList;
  }

  getAccountsForDebtToAssets() {
    let accountsAssets = this.afs.collection('chartofaccounts', (ref) => ref.where('hasBalance', '==', true).where('category', '==', 'Assets')).valueChanges();
    let accountsLiabilities = this.afs.collection('chartofaccounts', (ref) => ref.where('hasBalance', '==', true).where('category', '==', 'Liabilities')).valueChanges();

    const combinedList = combineLatest<any[]>(accountsAssets, accountsLiabilities).pipe(
      map(arr => arr.reduce((acc, cur) => acc.concat(cur) ) ),
    )

    return combinedList;
  }

  getAccountsForDebtToEquity() {
    let accountsLiabilities = this.afs.collection('chartofaccounts', (ref) => ref.where('hasBalance', '==', true).where('category', '==', 'Liabilities')).valueChanges();
    let accountsOwnersEquity = this.afs.collection('chartofaccounts', (ref) => ref.where('hasBalance', '==', true).where('category', '==', 'Owner\'s Equity')).valueChanges();

    const combinedList = combineLatest<any[]>(accountsLiabilities, accountsOwnersEquity).pipe(
      map(arr => arr.reduce((acc, cur) => acc.concat(cur) ) ),
    )

    return combinedList;
  }

  getAccountsForIncomeStatement() {
    let accountsRevenues = this.afs.collection('chartofaccounts', (ref) => ref.where('hasBalance', '==', true).where('category', '==', 'Revenues')).valueChanges();
    let accountsExpenses = this.afs.collection('chartofaccounts', (ref) => ref.where('hasBalance', '==', true).where('category', '==', 'Expenses')).valueChanges();

    const combinedList = combineLatest<any[]>(accountsRevenues, accountsExpenses).pipe(
      map(arr => arr.reduce((acc, cur) => acc.concat(cur) ) ),
    )

    return combinedList;
  }

  getAccountListWithBalance(): Observable<any[]> {
    let accountsCollectionNoCondition = this.afs.collection('chartofaccounts', (ref) => ref.where('hasBalance', '==', true).orderBy('number', 'asc'));
    return accountsCollectionNoCondition.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

  resetAllAccounts() {
    let documents = this.accountsCollection.ref.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.accountsCollection.doc(doc.id).update({ hasBalance: false, creditAmount: 0, debitAmount: 0 })
        });
      }).catch(err => {
        console.log("Error getting documents", err);
      });
  }

  toggleAccountActive(id: string, value: boolean) {
    this.accountsCollection.doc(id).update({ enabled: value });
  }

  deleteTransaction(id: string) {
    this.transactionsCollection.doc(id).delete();
  }

  toggleApproval(id: string, value: boolean) {
    this.transactionsCollection.doc(id).update({ approved: value, pending: false });
  }

  getTransactionsList(condition: string = '') {
    switch (condition) {
      case 'pending':
        this.transactionsCollection = this.afs.collection('transactions', (ref) => ref.orderBy('createdAt', 'desc').where('pending', '==', true));
        break;
      case 'approved':
        this.transactionsCollection = this.afs.collection('transactions', (ref) => ref.orderBy('createdAt', 'desc').where('approved', '==', true));
        break;
      case 'rejected':
        this.transactionsCollection = this.afs.collection('transactions', (ref) => ref.orderBy('createdAt', 'desc').where('approved', '==', false).where('pending', '==', false));
        break;
      default:
        this.transactionsCollection = this.afs.collection('transactions', (ref) => ref.orderBy('createdAt', 'desc'));
        break;
    }

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

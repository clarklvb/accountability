import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth.service';

type AddJournalFields = 'amount' | 'account';
type FormErrors = { [u in AddJournalFields]: string };

@Component({
  selector: 'journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  transactionsCollection: AngularFirestoreCollection;
  transactionsList;

  accountsCollection: AngularFirestoreCollection;
  accountList;

  addJournalEntryForm: FormGroup;
  formErrors: FormErrors = {
    'amount': '',
    'account': ''
  };
  validationMessages = {
    'amount': {
      'required': 'Amount is required.'
    },
    'account': {
      'required': 'Account is required.'
    },
    'active': {},
  };
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private afs: AngularFirestore, private authService: AuthService) { }

  ngOnInit() {
    this.accountsCollection = this.afs.collection('chartofaccounts');
    this.transactionsCollection = this.afs.collection('transactions', (ref) => ref.orderBy('createdAt', 'desc'));
    this.accountList = this.getAccountList();
    this.transactionsList = this.getTransactionsList();
    this.buildForm();
  }

  addJournalEntry() {
    let transaction = {
      amount: this.addJournalEntryForm.value['amount'],
      accountName: this.addJournalEntryForm.value['account'].name,
      normalSide: this.addJournalEntryForm.value['account'].normalside,
      userId: this.authService.userId,
      createdAt: new Date().getTime()
    }
    this.transactionsCollection.add(transaction);
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

  buildForm() {
    this.addJournalEntryForm = this.fb.group({
      'amount': ['', [
        Validators.required
      ]],
      'account': ['', [
        Validators.required
      ]],
      'active': ['', []],
    });

    this.addJournalEntryForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  onValueChanged(data?: any) {
    if (!this.addJournalEntryForm) { return; }
    const form = this.addJournalEntryForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key) ) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]} `;
              }
            }
          }
        }
      }
    }
  }
}

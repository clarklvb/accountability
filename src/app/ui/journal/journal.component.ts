import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { TransactionsService } from './transactions.service';
import { NotifyService } from '../../core/notify.service';

type AddJournalFields = 'debitAmount' | 'debitAccount' | 'creditAmount' | 'creditAccount' | 'description';
type FormErrors = { [u in AddJournalFields]: string };

@Component({
  selector: 'journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  transactionsList;
  accountList;

  addJournalEntryForm: FormGroup;
  formErrors: FormErrors = {
    'debitAmount': '',
    'debitAccount': '',
    'creditAmount': '',
    'creditAccount': '',
    'description': ''
  };
  validationMessages = {
    'debitAmount': {
      'required': 'Debit amount is required.'
    },
    'debitAccount': {
      'required': 'Debit account is required.'
    },
    'creditAmount': {
      'required': 'Credit amount is required.'
    },
    'creditAccount': {
      'required': 'Credit account is required.'
    },
    'active': {},
  };
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private transactionService: TransactionsService, private authService: AuthService, private notifyService: NotifyService) { }

  ngOnInit() {
    this.accountList = this.transactionService.getAccountList();
    this.transactionsList = this.transactionService.getTransactionsList();
    this.buildForm();
  }

  addJournalEntry() {
    let transaction = {
      description: this.addJournalEntryForm.value['description'],
      debitAmount: this.addJournalEntryForm.value['debitAmount'],
      creditAmount: this.addJournalEntryForm.value['creditAmount'],
      debitAccountName: this.addJournalEntryForm.value['debitAccount'].name,
      creditAccountName: this.addJournalEntryForm.value['creditAccount'].name,
      userId: this.authService.userId,
      createdAt: new Date().getTime(),
      approved: false
    }

    if (transaction.debitAmount - transaction.creditAmount !== 0) {
      this.notifyService.update('You are dumb', 'error');
    } else {
      this.transactionService.addJournalEntry(transaction);
    }
  }

  deleteEntry(id: string) {
    this.transactionService.deleteTransaction(id);
  }

  buildForm() {
    this.addJournalEntryForm = this.fb.group({
      'description': ['', []],
      'debitAmount': ['', [
        Validators.required
      ]],
      'debitAccount': ['', [
        Validators.required
      ]],
      'creditAmount': ['', [
        Validators.required
      ]],
      'creditAccount': ['', [
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

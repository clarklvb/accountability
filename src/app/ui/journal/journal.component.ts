import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { TransactionsService } from './transactions.service';
import { NotifyService } from '../../core/notify.service';
<<<<<<< HEAD
import { LedgerService } from '../ledger/ledger.service';
=======
import {DataSource} from '@angular/cdk/collections';
import {MatSort, MatTableDataSource} from '@angular/material';
>>>>>>> e39a7fa2de10c104ca2be8086b4f45bf2d764546

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

  showPending: boolean = false;
  showApproved: boolean = false;
  showRejected: boolean = false;

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
    'description': {
      'required': 'Description is required.'
    },
    'active': {},
  };
  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private transactionService: TransactionsService,
              private authService: AuthService,
              private notifyService: NotifyService,
              private ledgerService: LedgerService) { }

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
      approved: false,
      pending: true
    }

    if (transaction.debitAmount - transaction.creditAmount !== 0 || transaction.debitAmount <= 0 || transaction.creditAmount <= 0 ) {
      this.notifyService.update('Debit amounts must equal the credit amount but both amounts must be greater than zero', 'error');
    } else {
      this.transactionService.addJournalEntry(transaction);

      this.ledgerService.updateLedger(this.addJournalEntryForm.value['debitAccount'].number, {
        accountId: this.addJournalEntryForm.value['debitAccount'].number, 
        accountName: transaction.debitAccountName,
        transactions: [{
          description: transaction.description,
          debit: transaction.debitAmount ? transaction.debitAmount : null,
        }]
      });

      this.ledgerService.updateLedger(this.addJournalEntryForm.value['creditAccount'].number, {
        accountId: this.addJournalEntryForm.value['creditAccount'].number, 
        accountName: transaction.creditAccountName,
        transactions: [{
          description: transaction.description,
          credit: transaction.creditAmount ? transaction.creditAmount : null,
        }]
      });
    }
  }

  setApprovalFlag (flag: string) {
    switch (flag) {
      case 'approved':
        this.showApproved = !this.showApproved;
        this.showPending = false;
        this.showRejected = false;

        if (this.showApproved) {
          this.getEntries('approved');
        } else {
          this.getEntries(null);
        }
        break;
      case 'rejected':
        this.showApproved = false;
        this.showPending = false;
        this.showRejected = !this.showRejected;

        if (this.showRejected) {
          this.getEntries('rejected');
        } else {
          this.getEntries(null);
        }
        break;
      case 'pending':
        this.showApproved = false;
        this.showPending = !this.showPending;
        this.showRejected = false;

        if (this.showPending) {
          this.getEntries('pending');
        } else {
          this.getEntries(null);
        }
        break;
    }
  }

  deleteEntry(id: string) {
    this.transactionService.deleteTransaction(id);
  }

  toggleApproval(id: string, value: boolean) {
    this.transactionService.toggleApproval(id, value);
  }

  getEntries (condition: string = '') {
    this.transactionsList = this.transactionService.getTransactionsList(condition);
  }

  buildForm() {
    this.addJournalEntryForm = this.fb.group({
      'description': ['', [
        Validators.min(1)
      ]],
      'debitAmount': ['', [
        Validators.required,
        Validators.pattern('^[-]?([1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|\.[0-9]{1,2})$')
      ]],
      'debitAccount': ['', [
        Validators.required
      ]],
      'creditAmount': ['', [
        Validators.required,
        Validators.pattern('^[-]?([1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|\.[0-9]{1,2})$')
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
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'description' || field === 'debitAccount' || field === 'debitAmount' || field === 'creditAmount' || field === 'creditAccount')) {
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

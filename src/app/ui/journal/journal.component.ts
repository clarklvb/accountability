import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { TransactionsService } from './transactions.service';
import { NotifyService } from '../../core/notify.service';
import { LedgerService } from '../ledger/ledger.service';
import { DataSource } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource } from '@angular/material';

type AddJournalFields = 'debitAmount' | 'debitAccount' | 'creditAmount' | 'creditAccount' | 'description' | 'userFullName' | 'file';
type FormErrors = { [u in AddJournalFields]: string };

@Component({
  selector: 'journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  transactionsList;
  accountList;
  currentDate;

  showPending: boolean = false;
  showApproved: boolean = false;
  showRejected: boolean = false;

  addJournalEntryForm: FormGroup;
  formErrors: FormErrors = {
    'debitAmount': '',
    'debitAccount': '',
    'creditAmount': '',
    'creditAccount': '',
    'description': '',
    'userFullName': '',
    'file': ''
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
    'userFullName': {
      'required': 'User\'s full name is required.'
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
    this.currentDate = Date.now();
    this.buildForm();
    this.setApprovalFlag('pending');
  }

  // @TODO: This is terrible with repeating code...fix it
  updateAccountTotals(entries, amountType: string) {
    if (amountType === 'debitAmount') {
      if (!this.addJournalEntryForm.value['debitAccount'].hasOwnProperty('debitAmount')) { this.addJournalEntryForm.value['debitAccount'].debitAmount = 0 }
      for (let i = 0; i < entries.length; i++) {
        this.transactionService.accountsCollection.doc(entries[i].accountId)
          .set({ hasBalance: true, debitAmount: this.addJournalEntryForm.value['debitAccount'].debitAmount + entries[i].amount }, { merge: true });
      }
    } else {
      if (!this.addJournalEntryForm.value['creditAccount'].hasOwnProperty('creditAmount')) { this.addJournalEntryForm.value['creditAccount'].creditAmount = 0 }
      for (let i = 0; i < entries.length; i++) {
        this.transactionService.accountsCollection.doc(entries[i].accountId)
          .set({ hasBalance: true, creditAmount: this.addJournalEntryForm.value['creditAccount'].creditAmount + entries[i].amount }, { merge: true });
      }
    }
  }

  addJournalEntry() {
    // Build the transaction object
    let transaction = {
      description: this.addJournalEntryForm.value['description'],
      debitEntries: [
        {
          amount: this.addJournalEntryForm.value['debitAmount'],
          accountName: this.addJournalEntryForm.value['debitAccount'].name,
          accountId: this.addJournalEntryForm.value['debitAccount'].id
        }
      ],
      creditEntries: [
        {
          amount: this.addJournalEntryForm.value['creditAmount'],
          accountName: this.addJournalEntryForm.value['creditAccount'].name,
          accountId: this.addJournalEntryForm.value['creditAccount'].id
        }
      ],
      userId: this.authService.userId,
      userFullName: this.addJournalEntryForm.value['userFullName'],
      createdAt: new Date().getTime(),
      approved: false,
      pending: true
    }

    if (transaction.debitEntries[0].amount - transaction.creditEntries[0].amount !== 0 || transaction.debitEntries[0].amount <= 0 || transaction.creditEntries[0].amount <= 0) {
      this.notifyService.update('Debit amounts must equal the credit amount but both amounts must be greater than zero', 'error');
    } else {
      this.transactionService.addJournalEntry(transaction);

      this.updateAccountTotals(transaction.debitEntries, 'debitAmount');
      this.updateAccountTotals(transaction.creditEntries, 'creditAmount');

      this.ledgerService.updateLedger(transaction.debitEntries[0].accountId, {
        accountId: this.addJournalEntryForm.value['debitAccount'].number,
        accountName: transaction.debitEntries[0].accountName,
        createdAt: transaction.createdAt,
        description: transaction.description,
        debit: transaction.debitEntries[0].amount
      });

      this.ledgerService.updateLedger(transaction.creditEntries[0].accountId, {
        accountId: this.addJournalEntryForm.value['creditAccount'].number,
        accountName: transaction.creditEntries[0].accountName,
        createdAt: transaction.createdAt,
        description: transaction.description,
        credit: transaction.creditEntries[0].amount
      });
    }
  }

  setApprovalFlag(flag: string) {
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

  getEntries(condition: string = '') {
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
      'userFullName': ['', [
        Validators.required
      ]],
      'file': ['', []],
      'active': ['', []],
    });

    this.addJournalEntryForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  resetForm() {
    this.addJournalEntryForm.reset();
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
              if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] += `${(messages as { [key: string]: string })[key]} `;
              }
            }
          }
        }
      }
    }
  }
}

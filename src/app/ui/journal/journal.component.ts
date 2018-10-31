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
      approved: false,
      pending: true
    }

    if (transaction.debitAmount - transaction.creditAmount !== 0 || transaction.debitAmount <= 0 || transaction.creditAmount <= 0 ) {
      this.notifyService.update('Debit amounts must equal the credit amount but both amounts must be greater than zero', 'error');
    } else {
      this.transactionService.addJournalEntry(transaction);
    }
  }

  setApprovalFlag (flag: string) {
    switch (flag) {
      case 'approved':
        this.showApproved = true;
        this.showPending = false;
        this.showRejected = false;
        break;
      case 'rejected':
        this.showApproved = false;
        this.showPending = false;
        this.showRejected = true;
        break;
      case 'pending':
        this.showApproved = false;
        this.showPending = true;
        this.showRejected = false;
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
    this.setApprovalFlag(condition);
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

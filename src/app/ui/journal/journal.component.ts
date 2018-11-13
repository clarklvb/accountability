import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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
      
      for (let i = 0; i < entries.length; i++) {
        this.transactionService.accountsCollection.doc(entries[i].accountId)
          .set({ hasBalance: true, debitAmount: this.debitForms.value[i]['debitAccount'].debitAmount + entries[i].amount }, { merge: true });
      }
    } else {
      
      for (let i = 0; i < entries.length; i++) {
        this.transactionService.accountsCollection.doc(entries[i].accountId)
          .set({ hasBalance: true, creditAmount: this.creditForms.value[i]['creditAccount'].creditAmount + entries[i].amount }, { merge: true });
      }
    }
  }

  addJournalEntry() {
    // Build the transaction object
    let transaction = {
      description: this.addJournalEntryForm.value['description'],
      debitEntries: [],
      creditEntries: [],
      userId: this.authService.userId,
      userFullName: this.addJournalEntryForm.value['userFullName'],
      createdAt: new Date().getTime(),
      approved: false,
      pending: true
    }
	
	for (let i = 0; i < this.debitForms.value.length; i++ )
	{
		transaction.debitEntries.push({
			amount: this.debitForms.value[i]['debitAmount'],
          accountName: this.debitForms.value[i]['debitAccount'].name,
          accountId: this.debitForms.value[i]['debitAccount'].id,
		  accountNumber: this.debitForms.value[i]['debitAccount'].number
		});
	}
	
	for (let i = 0; i < this.creditForms.value.length; i++ )
	{
		transaction.creditEntries.push({
			amount: this.creditForms.value[i]['creditAmount'],
          accountName: this.creditForms.value[i]['creditAccount'].name,
          accountId: this.creditForms.value[i]['creditAccount'].id,
		  accountNumber: this.creditForms.value[i]['creditAccount'].number
		});
	}

    if (/*transaction.debitEntries[0].amount - transaction.creditEntries[0].amount !== 0 || transaction.debitEntries[0].amount <= 0 || transaction.creditEntries[0].amount <= 0*/!this.addJournalEntryForm.valid) {
      this.notifyService.update('Debit amounts must equal the credit amount but both amounts must be greater than zero', 'error');
    } else {
      this.transactionService.addJournalEntry(transaction);
	  
		this.updateAccountTotals(transaction.creditEntries, 'creditAmount');
      this.updateAccountTotals(transaction.debitEntries, 'debitAmount');
	  
		
		for (let i = 0; i < transaction.debitEntries.length; i++ )
		{
			console.log(transaction.debitEntries);
			  this.ledgerService.updateLedger(transaction.debitEntries[i].accountId, {
				accountId: transaction.debitEntries[i].accountNumber,
				accountName: transaction.debitEntries[i].accountName,
				createdAt: transaction.createdAt,
				description: transaction.description,
				debit: transaction.debitEntries[i].amount
			  });
		}
		
		for (let i = 0; i < transaction.creditEntries.length; i++ )
		{
		  this.ledgerService.updateLedger(transaction.creditEntries[i].accountId, {
			accountId: transaction.creditEntries[i].accountNumber,
			accountName: transaction.creditEntries[i].accountName,
			createdAt: transaction.createdAt,
			description: transaction.description,
			credit: transaction.creditEntries[i].amount
		  });
		}
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
      'debit': this.fb.array([]),
      'credit': this.fb.array([]),
      'userFullName': ['', [
        Validators.required
      ]],
      'file': ['', []],
      'active': ['', []],
    });

    this.addJournalEntryForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }
  
  get debitForms() {
	return this.addJournalEntryForm.get('debit') as FormArray
  }
  
  get creditForms() {
	return this.addJournalEntryForm.get('credit') as FormArray
  }
  
  addDebit() {
	  
	  const debit = this.fb.group({
		'debitAmount': ['', [
        Validators.required,
        Validators.pattern('^[-]?([1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|\.[0-9]{1,2})$')
      ]],
		'debitAccount': [this.fb.array([]), [
        Validators.required
      ]],
	  })
	  
	  this.debitForms.push(debit);
  }
  
  addCredit() {
	  
	  const credit = this.fb.group({
		'creditAmount': ['', [
        Validators.required,
        Validators.pattern('^[-]?([1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|\.[0-9]{1,2})$')
      ]],
		'creditAccount': [this.fb.array([]), [
        Validators.required
      ]],
	  })
	  
	  this.creditForms.push(credit);
  }
  
  deleteDebit(i) {
	  this.debitForms.removeAt(i);
  }
  
  deleteCredit(i) {
	  this.creditForms.removeAt(i);
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

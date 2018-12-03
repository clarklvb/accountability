import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { TransactionsService } from './transactions.service';
import { NotifyService } from '../../core/notify.service';
import { LedgerService } from '../ledger/ledger.service';
import { EventLogService } from '../event-log.service';

type AddJournalFields = 'debitAmount' | 'debitAccount' | 'creditAmount' | 'creditAccount' | 'description' | 'userFullName' | 'file' | 'type';
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
    'file': '',
    'type': ''
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
    'type': {
      'required': 'Type is required.'
    },
    'active': {},
  };

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  downloadString: string;
  isHovering: boolean;
  storagePath: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private transactionService: TransactionsService,
    private authService: AuthService,
    private notifyService: NotifyService,
    private ledgerService: LedgerService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private eventLogService: EventLogService) { }

  ngOnInit() {
    this.accountList = this.transactionService.getAccountList();
    this.transactionsList = this.transactionService.getTransactionsList();
    this.currentDate = Date.now();
    this.buildForm();
    this.setApprovalFlag('pending');
  }

  // @TODO: This is terrible with repeating code...fix it
  async updateAccountTotals(entries, amountType: string) {
    if (amountType === 'debitAmount') {

      for (let i = 0; i < entries.length; i++) {
        await this.transactionService.accountsCollection.doc(entries[i].accountId)
          .set({ hasBalance: true, debitAmount: this.debitForms.value[i]['debitAccount'].debitAmount + entries[i].amount }, { merge: true });
      }
    } else {

      for (let i = 0; i < entries.length; i++) {
        await this.transactionService.accountsCollection.doc(entries[i].accountId)
          .set({ hasBalance: true, creditAmount: this.creditForms.value[i]['creditAccount'].creditAmount + entries[i].amount }, { merge: true });
      }
    }
  }

  async addJournalEntry() {
    // Build the transaction object
    let transaction = {
      description: this.addJournalEntryForm.value['description'],
      debitEntries: [],
      creditEntries: [],
      userId: this.authService.userId,
      userFullName: this.addJournalEntryForm.value['userFullName'],
      createdAt: new Date().getTime(),
      approved: false,
      pending: true,
      type: this.addJournalEntryForm.value['type'],
	    sourceDocument: ""
    }

    for (let i = 0; i < this.debitForms.value.length; i++ ) {
      transaction.debitEntries.push({
        amount: this.debitForms.value[i]['debitAmount'],
        accountName: this.debitForms.value[i]['debitAccount'].name,
        accountId: this.debitForms.value[i]['debitAccount'].id,
        accountNumber: this.debitForms.value[i]['debitAccount'].number
      });
    }

    for (let i = 0; i < this.creditForms.value.length; i++ ) {
      transaction.creditEntries.push({
        amount: this.creditForms.value[i]['creditAmount'],
        accountName: this.creditForms.value[i]['creditAccount'].name,
        accountId: this.creditForms.value[i]['creditAccount'].id,
        accountNumber: this.creditForms.value[i]['creditAccount'].number
      });
    }


    if (this.storagePath !== undefined) {
      await this.getDownloadString();
      transaction.sourceDocument = this.downloadString;
    } else {
      transaction.sourceDocument = '';
    }

    let debitEntryTotal = 0;
    let creditEntryTotal = 0;
    let debitsGreaterThanZero = true;
    let creditsGreaterThanZero = true;

    for (let i = 0; i < transaction.debitEntries.length; i++) {
      debitEntryTotal += transaction.debitEntries[i].amount;
      if (transaction.debitEntries[i].amount <= 0) {
        debitsGreaterThanZero = false;
      }
    }

    for (let i = 0; i < transaction.creditEntries.length; i++) {
      creditEntryTotal += transaction.creditEntries[i].amount;
      if (transaction.creditEntries[i].amount <= 0) {
        creditsGreaterThanZero = false;
      }
    }

    if (/*transaction.debitEntries[0].amount - transaction.creditEntries[0].amount !== 0 || transaction.debitEntries[0].amount <= 0 || transaction.creditEntries[0].amount <= 0*/
        debitEntryTotal - creditEntryTotal !== 0 || !debitsGreaterThanZero || !creditsGreaterThanZero || !this.addJournalEntryForm.valid) {
      this.notifyService.update('Debit amounts must equal the credit amount but both amounts must be greater than zero', 'error');
    } else {
      this.transactionService.addJournalEntry(transaction);

		  this.updateAccountTotals(transaction.creditEntries, 'creditAmount');
      this.updateAccountTotals(transaction.debitEntries, 'debitAmount');

		for (let i = 0; i < transaction.debitEntries.length; i++ ) {
			this.ledgerService.updateLedger(transaction.debitEntries[i].accountId, {
				accountId: transaction.debitEntries[i].accountNumber,
				accountName: transaction.debitEntries[i].accountName,
				createdAt: transaction.createdAt,
				description: transaction.description,
				debit: transaction.debitEntries[i].amount
			});
		}

		for (let i = 0; i < transaction.creditEntries.length; i++ ) {
		  this.ledgerService.updateLedger(transaction.creditEntries[i].accountId, {
        accountId: transaction.creditEntries[i].accountNumber,
        accountName: transaction.creditEntries[i].accountName,
        createdAt: transaction.createdAt,
        description: transaction.description,
        credit: transaction.creditEntries[i].amount
        });
      }
    }

    alert("Are you sure you want to add this entry?");
    this.eventLogService.addEventLog('Added a new journal entry');
    this.buildForm();
  }

  async getDownloadString() {
    await this.downloadURL.subscribe((data) => {
      return this.downloadString = data;
    });
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
    this.eventLogService.addEventLog('Remove a journal entry');
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
      // Find a way to get the users name here...
      'userFullName': ['', [
        Validators.required
      ]],
      'file': ['', []],
      'type': ['', []],
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

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    /*if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
      return;
    }*/

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(snap => {
        console.log(snap)
        if (snap.bytesTransferred === snap.totalBytes) {
          /// The file's download URL
          this.downloadURL = this.storage.ref(path).getDownloadURL();
          this.storagePath = path;
        }
      })
    )
  }



  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
}

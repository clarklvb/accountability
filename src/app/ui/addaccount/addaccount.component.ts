import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { TransactionsService } from '../journal/transactions.service';
import { NotifyService } from 'src/app/core/notify.service';
import { EventLogService } from '../event-log.service';

type AddAccountFields = 'category' | 'name' | 'normalside' | 'order' | 'number' | 'subcategory';
type FormErrors = { [u in AddAccountFields]: string };

@Component({
  selector: 'addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.scss']
})
export class AddaccountComponent implements OnInit {

  addAccountForm: FormGroup;
  formErrors: FormErrors = {
    'category': '',
    'name': '',
    'normalside': null,
    'order': '',
    'number': '',
    'subcategory': ''
  };

  validationMessages = {
    'category': {
      'required': 'Category is required.'
    },
    'name': {
      'required': 'Name is required.'
    },
    'normalside': {
      'required': 'Please enter a normal side.'
    },
    'order': {
      'required': 'Please enter an order number.'
    },
    'number': {
      'required': 'Please enter and account number.'
    },
    'subcategory': {
      'required': 'Please enter a subcategory.'
    },
  };

  constructor(public afs: AngularFirestore, private fb: FormBuilder, private accountService: TransactionsService, private notifyService: NotifyService, private eventLogService: EventLogService) { }

  ngOnInit() {
    this.buildForm();
  }

  addAccount() {
    let account = {
      category: this.addAccountForm.value['category'],
      name: this.addAccountForm.value['name'],
      normalside: this.addAccountForm.value['normalside'],
      order: this.addAccountForm.value['order'],
      number: this.addAccountForm.value['number'],
      subcategory: this.addAccountForm.value['subcategory'],
      creditAmount: 0,
      debitAmount: 0,
      enabled: true,
      hasBalance: false
    }

    this.accountService.addAccount(account);
    this.buildForm();
    this.notifyService.update('You have successfully add a new account!', 'success');
    this.eventLogService.addEventLog('Added an account to the chart of accounts');
  }

  buildForm() {
    this.addAccountForm = this.fb.group({
      'category': ['', [
        Validators.required
      ]],
      'name': ['', [
        Validators.required
      ]],
      'normalside': ['', [
        Validators.required
      ]],
      'order': ['', [
        Validators.required
      ]],
      'number': ['', [
        Validators.required
      ]],
      'subcategory': ['', [
        Validators.required
      ]],
    });

    this.addAccountForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  onValueChanged(data?: any) {
    if (!this.addAccountForm) { return; }
    const form = this.addAccountForm;
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

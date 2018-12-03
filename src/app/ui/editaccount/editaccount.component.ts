import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionsService } from '../journal/transactions.service';
import { AngularFirestore } from 'angularfire2/firestore';

type EditAccountFields = 'category' | 'name' | 'normalside' | 'order' | 'number' | 'subcategory';
type FormErrors = { [u in EditAccountFields]: string };

@Component({
  selector: 'editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.scss']
})
export class EditaccountComponent implements OnInit {

  account;
  accountId: string;
  editAccountForm: FormGroup;
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

  constructor(public afs: AngularFirestore, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private accountService: TransactionsService) { }

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('accountId');
    this.account = this.getAccount(this.accountId)
    this.buildForm();
  }

  buildForm() {
    this.editAccountForm = this.fb.group({
      'category': [''],
      'name': [''],
      'normalside': [''],
      'order': [''],
      'number': [''],
      'subcategory': [''],
    });

    this.editAccountForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  getAccount(id: string) {
    return this.afs.collection("chartofaccounts").doc(id).ref.get()
      .then(function(doc) {
          if (doc.exists) {
            return doc.data();
          } else {
            console.log("No such document!");
          }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
  }

  updateAccount() {
    let data = {
      category: this.editAccountForm.value['category'],
      name: this.editAccountForm.value['name'],
      normalside: this.editAccountForm.value['normalside'],
      order: this.editAccountForm.value['order'],
      number: this.editAccountForm.value['number'],
      subcategory: this.editAccountForm.value['subcategory'],
    }

    return this.afs.doc<any>(`chartofaccounts/${this.accountId}`).set(data, { merge: true });
  }

  onValueChanged(data?: any) {
    if (!this.editAccountForm) { return; }
    const form = this.editAccountForm;
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

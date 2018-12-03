import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UsersService } from '../../core/users.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventLogService } from '../event-log.service';

type EditUserFields = 'name' | 'role' | 'active';
type FormErrors = { [u in EditUserFields]: string };

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user;
  uid: string;
  editUserForm: FormGroup;
  formErrors: FormErrors = {
    'name': '',
    'role': '',
    'active': null
  };
  validationMessages = {
    'name': {
      'required': 'Name is required.'
    },
    'role': {
      'required': 'Role is required.'
    },
    'active': {},
  };
  constructor(private route: ActivatedRoute, private router: Router, private userService: UsersService, private fb: FormBuilder, private eventLogService: EventLogService) { }

  ngOnInit() {
    this.uid = this.route.snapshot.paramMap.get('uid');
    this.user = this.userService.getUser(this.uid);
    this.buildForm();
  }

  updateUser() {
    this.userService.updateUser(this.uid, { 
      displayName: this.editUserForm.value['name'],
      role: this.editUserForm.value['role'],
      isActive: this.editUserForm.value['active'] || false
    });

    this.eventLogService.addEventLog(`Modified user ${this.editUserForm.value['name']}`);
    return this.router.navigate(['/users']);
  }

  buildForm() {
    this.editUserForm = this.fb.group({
      'name': ['', [
        Validators.required
      ]],
      'role': ['', [
        Validators.required
      ]],
      'active': ['', []],
    });

    this.editUserForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  onValueChanged(data?: any) {
    if (!this.editUserForm) { return; }
    const form = this.editUserForm;
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

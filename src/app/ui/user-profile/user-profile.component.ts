import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {

  constructor(public auth: AuthService, private router: Router) { }

  logout() {
    this.auth.signOut();
    return this.router.navigate(['/login']);
  }
}

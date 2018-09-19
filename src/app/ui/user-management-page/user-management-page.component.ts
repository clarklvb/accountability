import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/users.service';

@Component({
  selector: 'user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.scss']
})
export class UserManagementPageComponent implements OnInit {

  allUsers;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.allUsers = this.usersService.getData();
  }
}

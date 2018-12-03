import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../journal/transactions.service';
import * as _ from "lodash";

@Component({
  selector: 'balancesheet',
  templateUrl: './balancesheet.component.html',
  styleUrls: ['./balancesheet.component.scss']
})
export class BalancesheetComponent implements OnInit {

  accountList;
  currentDate: number = Date.now();

  constructor(private accountService: TransactionsService) { }

  ngOnInit() {
    this.accountService.getAccountListWithBalance().subscribe(accounts => {
      this.accountList = _.groupBy(accounts, 'category');
      for (var property in this.accountList) {
        if (this.accountList.hasOwnProperty(property)) {
          this.accountList[property] = _.groupBy(this.accountList[property], 'subcategory');
        }
      }
    });
  }

  formatAccountList() {
    this.accountList = _.groupBy(this.accountList, 'category');
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => { return { key: key, value: obj[key] } });
  }
}

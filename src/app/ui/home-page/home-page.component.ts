import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../journal/transactions.service';
import { AuthService } from "../../core/auth.service";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  currentRatioAccounts;
  currentRatio = [0, 0];

  debtToAssetsAccounts;
  debtToAssetsRatio = [0, 0];

  debtToEquityAccounts;
  debtToEquityRatio = [0, 0];

  constructor(private accountService: TransactionsService, public auth: AuthService) { }

  ngOnInit() {
    this.accountService.getAccountsForCurrentRatio().subscribe(accounts => { this.currentRatioAccounts = accounts });
    this.accountService.getAccountsForDebtToAssets().subscribe(accounts => { this.debtToAssetsAccounts = accounts });
    this.accountService.getAccountsForDebtToEquity().subscribe(accounts => { this.debtToEquityAccounts = accounts })
  }

  getCurrentRatio(accounts) {
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].subcategory === 'Current Asset') {
        this.currentRatio[0] += accounts[i].debitAmount - accounts[i].creditAmount;
      } else {
        this.currentRatio[1] += accounts[i].creditAmount - accounts[i].debitAmount;
      }
    }

    return this.currentRatio[0] / this.currentRatio[1];
  }

  getDebtToAssetRatio(accounts) {
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].category === 'Assets') {
        this.debtToAssetsRatio[0] += accounts[i].debitAmount - accounts[i].creditAmount;
      } else {
        this.debtToAssetsRatio[1] += accounts[i].creditAmount - accounts[i].debitAmount;
      }
    }

    return this.debtToAssetsRatio[0] / this.debtToAssetsRatio[1];
  }

  getDebtToEquityRatio(accounts) {
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].category === 'Liabilities') {
        this.debtToEquityRatio[0] += accounts[i].creditAmount - accounts[i].debitAmount;
      } else {
        this.debtToEquityRatio[1] += accounts[i].creditAmount - accounts[i].debitAmount;
      }
    }

    return this.debtToEquityRatio[0] / this.debtToEquityRatio[1];
  }
}

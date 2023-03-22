import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-withdraw-funds',
  template: '<button (click)="withdrawFunds(1)">Withdraw Funds</button>',
  styleUrls: ['./withdraw-funds.component.css']
})
export class WithdrawFundsComponent {
  constructor(private http: HttpClient) { }

  withdrawFunds(walletId: number) {
    const amount = 100; // Replace with the actual amount to withdraw

    const url = `wallet/${walletId}/fund/${amount}`;
    this.http.patch<number>(url, null).subscribe(result => {
      console.log(`Withdrawal successful. New balance: ${result}`);
    });
  }
}

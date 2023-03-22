import { Component } from '@angular/core';
import {WalletService} from "../wallet.service";

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent {
  fromWalletId?: number;
  toWalletId?: number;
  amount?: number;
  transferSuccessful?: boolean;
  errorMessage?: string;

  constructor(private walletService: WalletService) {}

  transferFunds() {
    this.walletService.transferFunds(this.fromWalletId, this.toWalletId, this.amount)
      .subscribe(
        (result: boolean | undefined) => {
          this.transferSuccessful = result;
        },
        (error: { message: string | undefined; }) => {
          this.errorMessage = error.message;
        }
      );
  }
}



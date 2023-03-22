import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WalletService} from "../wallet.service";
import {Wallet} from "../wallet";

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {

  walletId?: number;
  amount?: number;
  wallets: Wallet[] = [];
  constructor(private route:ActivatedRoute,private walletService:WalletService) {}

  ngOnInit() :void {
    this.loadWallets();
    this.route.paramMap.subscribe(params => {
      this.walletId = parseInt(<string>params.get('id'));
      this.amount = parseFloat(<string>params.get('amount'));
    });
    this.addFundsToWalletById(this.walletId, this.amount);
  }

  addFundsToWalletById(walletId: number | undefined, amount: number | undefined) {
    this.walletService.addFundsToWalletById(walletId, amount)
      .subscribe((result: number) => {
        console.log(result);
      }, (error: any) => {
        console.log(error);
      });
  }

  loadWallets() {
    this.walletService.getWalletList()
      .subscribe((data: Wallet[]) => {
        this.wallets = data;
      }, (error: any) => {
        console.log(error);
      });
  }

}

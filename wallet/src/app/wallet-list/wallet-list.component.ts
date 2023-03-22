import {Component, OnInit} from '@angular/core';
import {Wallet} from "../wallet";
import {WalletService} from "../wallet.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})

export class WalletListComponent implements OnInit {

   wallets?: Wallet[] = [];
  constructor(private walletService: WalletService , private router: Router) {}
  ngOnInit():void {
    this.getWalletList();
  }

  getWalletList(){
    this.walletService.getWalletList().subscribe(data => {
      this.wallets = data;
    });
  }


  // updateWallet(wallet? :Wallet ){
  //   this.router.navigate(['update-wallet', wallet]);
  // }

  deleteWallet(id?:number){
    this.walletService.deleteWallet(id).subscribe(data=>{
      console.log(data);
      this.getWalletList();
    })
  }

  updateWallet(wallet?: Wallet){
    console.log("Update wal");
    console.log(wallet) ;

    this.router.navigate(['update-wallet',wallet?.id]);
  }

  addFundsToWallet(walletId?: number) {
    const amount = parseFloat(prompt('Enter amount to add to wallet') || '0');
    this.walletService.addFundsToWalletById(walletId, amount)
      .subscribe((result: number) => {
        console.log(`Added ${amount} to wallet with ID ${walletId}`);
        this.loadWallets();
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

  fundTransfer(id: number) {

  }

  withdrawFunds(id: number) {
    
  }
}

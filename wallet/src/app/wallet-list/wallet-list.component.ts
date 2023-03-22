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

   wallets?: Wallet[];
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

}

import {Component, OnInit} from '@angular/core';
import {Wallet} from "../wallet";
import {ActivatedRoute, Router} from "@angular/router";
import {WalletService} from "../wallet.service";

@Component({
  selector: 'app-update-wallet',
  templateUrl: './update-wallet.component.html',
  styleUrls: ['./update-wallet.component.css']
})

export class UpdateWalletComponent implements OnInit {

  id?:string|null="";

  wallet:Wallet = new Wallet();

  constructor(private router:Router,private walletService:WalletService,private activatedRoute:ActivatedRoute) {
  }
  ngOnInit():void {
      this.id = this.activatedRoute.snapshot.paramMap.get("id");
      console.log("update id : " + this.id);
 }

  onSubmit(wallet?: Wallet){
    this.updateWallet();
  }
 updateWallet(){
    this.walletService.updateWallet(this.wallet)
      .subscribe(data=>{
        console.log(data);
        this.wallet = new Wallet();
        this.goToWalletList();
      },error => console.log(error));
 }

 // getWalletById(){
 //    this.walletService.getWalletById(this.id).subscribe(data=>{
 //      this.wallet = data;
 //    });
 // }


  goToWalletList(){
    this.router.navigate(['/view']);
  }
}

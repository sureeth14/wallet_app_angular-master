import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WalletListComponent} from "./wallet-list/wallet-list.component";
import {HomeComponent} from "./home/home.component";
import {CreateWalletComponent} from "./create-wallet/create-wallet.component";
import {UpdateWalletComponent} from "./update-wallet/update-wallet.component";
import {AddFundsComponent} from "./add-funds/add-funds.component";

const routes: Routes = [
  {path:'view',component: WalletListComponent},
  {path:'home',component:HomeComponent},
  {path:'create',component:CreateWalletComponent},
  {path:'update-wallet/:id',component:UpdateWalletComponent},
  { path: 'wallet/:id/:amount', component: AddFundsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

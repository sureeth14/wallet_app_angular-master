
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { WalletListComponent } from './wallet-list/wallet-list.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { CreateWalletComponent } from './create-wallet/create-wallet.component';
import {FormsModule} from "@angular/forms";
import { UpdateWalletComponent } from './update-wallet/update-wallet.component';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { WithdrawFundsComponent } from './withdraw-funds/withdraw-funds.component';
import { LoginComponent } from './login/login.component';
import {HttpInterceptorService} from "./http-interceptor.service";
import { LogoutComponent } from './logout/logout.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WalletListComponent,
    HomeComponent,
    CreateWalletComponent,
    UpdateWalletComponent,
    AddFundsComponent,
    FundTransferComponent,
    WithdrawFundsComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

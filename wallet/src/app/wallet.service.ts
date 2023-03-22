import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Wallet} from "./wallet";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private httpClient: HttpClient) {}

    id?:number;


    private apiUrl = "http://localhost:8080/wallet/fund";
    private baseUrl = 'http://localhost:8080/wallet/{id}/{amount}';
    private deleteURL = "http://localhost:8080/wallet";

    private getURL = "http://localhost:8080/wallet/{id}";

    getWalletList(): Observable<any>{
      return this.httpClient.get("http://localhost:8080/wallets");
    }

    createWallet(newWallet: Wallet):Observable<any>{
    let url:string = "http://localhost:8080/wallet";
    return this.httpClient.post(url,newWallet,{responseType:'json'});
    }

    // getId(getId?:number){
    //   this.id = getId;
    // }

  getWalletById(id?: number) : Observable<any>{
    let url = "http://localhost:8080/wallet/{id}";
    return this.httpClient.get<any>(`url`);
    }

    updateWallet(wallet? : Wallet):Observable<any> {
      return this.httpClient.put("http://localhost:8080/wallet",wallet);
    }

  deleteWallet(id? : number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }


  addFundsToWalletById(walletId: number | undefined, amount: number | undefined): Observable<any> {
    // const url = `${this.baseUrl}/wallet/${walletId}/${amount}`;
    return this.httpClient.patch<number>('http://localhost:8080/wallet/{id}/{amount}',null);
  }

  transferFunds(fromWalletId: number | undefined, toWalletId: number | undefined, amount: number | undefined): Observable<boolean> {
    const url = `${this.apiUrl}/wallet/fund/${fromWalletId}/${toWalletId}/${amount}`;
    return this.httpClient.post<boolean>(url, null);
  }

  withdrawFunds(walletId: number, amount: number) {
    const url = `wallet/${walletId}/fund/${amount}`;
    return this.httpClient.patch<number>(url, null);
  }
}


import { Injectable } from '@angular/core';
import { AccountServiceService } from './account-service.service';
import { Observable } from 'rxjs';
import { Account } from '../modules/account';
import { TransferDetails } from '../modules/transfer-details';

@Injectable({
  providedIn: 'root'
})
export class TransferserviceService extends AccountServiceService{

  
   transferCredit(transferDetails:TransferDetails):Observable<Object>{
    return this.http.post(`${this.baseUrl}/transaction/transferCredit`,transferDetails,{headers: this.headers});
   }
   transferDebit(transferDetails:TransferDetails):Observable<Object>{
    return this.http.post(`${this.baseUrl}/transaction/transferDebit`,transferDetails,{headers: this.headers});
   }

   getTransactions(accountNumber:number):Observable<Object>{
    return this.http.get<TransferDetails[]>(`${this.baseUrl}/transaction/getTransactions/${accountNumber}`,{headers: this.headers});
   }

   getTransactionsByType(accountNumber:number,tranType:string):Observable<Object>{
    return this.http.get<TransferDetails[]>(`${this.baseUrl}/transaction/getTransactionsByType/${accountNumber}/${tranType}`,{headers: this.headers});
   }
}

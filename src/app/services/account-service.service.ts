import { Injectable } from '@angular/core';
import { CustomerServiceService } from './customer-service.service';
import { Account } from '../modules/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService extends CustomerServiceService {
 [x: string]: any;
  
 
 createAccount(account:Account):Observable<Object>{
  return this.http.post(`${this.baseUrl}/account/create`,account,{headers: this.headers})
 }
 
 getAccountDetails(accountNumber:number):Observable<Object>{
  return this.http.get<Account>(`${this.baseUrl}/account/getAccountDetails/${accountNumber}`,{headers: this.headers})
 }

 updateAccountStaus(accountNumber:number,accountstatus:boolean):Observable<Object>{
  return this.http.put(`${this.baseUrl}/account/updateAccountStatus/${accountNumber}/${accountstatus}`,{headers: this.headers})
 }
 deleteAccount(accountNumber:number):Observable<Object>{
  return this.http.delete(`${this.baseUrl}/account/deleteAccountDetails/${accountNumber}`,{headers: this.headers})
 }
 getAccountDetailsForCustomer(customerId:number):Observable<Map<string,Account[]>>{
  return this.http.get<Map<string,Account[]>>(`${this.baseUrl}/account/getAccountDetailsForCustomer/${customerId}`,{headers: this.headers})
 }
 getAccountsForCustomer(customerId:number):Observable<Map<string,number[]>>{
  return this.http.get<Map<string,number[]>>(`${this.baseUrl}/account/getAccountsForCustomer/${customerId}`,{headers: this.headers})
 }
}
function List<T>(arg0: string, arg1: { headers: import("@angular/common/http").HttpHeaders; }) {
  throw new Error('Function not implemented.');
}


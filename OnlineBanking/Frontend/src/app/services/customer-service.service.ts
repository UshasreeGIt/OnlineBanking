import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../modules/customer';



@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  public baseUrl :string  = environment.apiUrl+'/onlinebanking';

  constructor(public http:HttpClient) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'DELETE, POST, GET, OPTIONS,PUT',
    'Access-Control-Allow-Headers' : 'Content-Type, Authorization, X-Requested-With'
  });


  createCustomer(customer:Customer): Observable<Object>{
    return this.http.post(`${this.baseUrl}/customer/create`,customer,{headers: this.headers})
  }
  customerLogin(id:number,pwd:string):Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/customer/login/${id}/${pwd}`,{headers: this.headers})
  }

  getCustomerDetails(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/customer/getCustomerDetails/${id}`,{headers: this.headers})
  }
 
}

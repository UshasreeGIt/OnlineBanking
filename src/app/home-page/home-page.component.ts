import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Route, Router } from '@angular/router';
import { Customer } from '../modules/customer';
import { CustomerServiceService } from '../services/customer-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  isShowDiv = true;
  customerId!: number;
  customer: Customer = new Customer();
  constructor(protected customerService:CustomerServiceService,
    protected route:ActivatedRoute,
    protected router:Router){}
  ngOnInit(): void {
   this.customerId = this.route.snapshot.params['customerId'];

   this.customerService.getCustomerDetails(this.customerId).subscribe(data=>{
    this.customer= data;
   
   }, error => console.log(error));
  }
  
}

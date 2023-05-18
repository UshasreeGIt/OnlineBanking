import { Component, OnInit, PipeTransform, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { HomePageComponent } from '../home-page/home-page.component';
import { CustomerServiceService } from '../services/customer-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountServiceService } from '../services/account-service.service';
import { Account } from '../modules/account';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent extends HomePageComponent implements OnInit{
 
  
  @ViewChild(MatAccordion) accordion: MatAccordion =new MatAccordion();
  myButton() {
    console.log("my button was clicked!");
  }
  accounts = new Map<string,Account[]>();
  checkingAccs: any;
  savingsAccs:any;
  termAccounts: any;
  constructor(
    protected accountService:AccountServiceService,
    protected override customerService:CustomerServiceService,
    protected override route:ActivatedRoute,
    protected override router:Router){
    super(customerService,route,router);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.getAccountDetailsByCustomer();
  }

  getAccountDetailsByCustomer(){
    this.accountService.getAccountDetailsForCustomer(this.customerId).subscribe(data=>{
      this.accounts = data;
      
      Object.entries(this.accounts).forEach(([key, value]) => {
        console.log(key,value);
          if(key =="Checking"){
            this.checkingAccs = value;
          }
          if(key =="Savings"){
            this.savingsAccs = value;
          }
          if(key =="Termdeposit"){
            this.termAccounts = value;
          }
      });
    });
  }
  
  activateAccount(accountNumber:number){
    this.accountService.updateAccountStaus(accountNumber,true).subscribe(data=>{
      
    })
  }
  deactivateAccount(accountNumber:number){
    this.accountService.updateAccountStaus(accountNumber,false).subscribe(data=>{
    
    })
  }

  
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { MatAccordion } from '@angular/material/expansion';
import { AccountDetailsComponent } from '../account-details/account-details.component';
import { ActivatedRoute, Router } from '@angular/router';

import { AccountServiceService } from '../services/account-service.service';
import { CustomerServiceService } from '../services/customer-service.service';
import { transferTypes } from '../fundtransfer/TransferTypes';
import { accountTypes } from '../create-account/accounttype';
import { TransferserviceService } from '../services/transferservice.service';
import { TransferDetails } from '../modules/transfer-details';

@Component({
  selector: 'app-transfer-details',
  templateUrl: './transfer-details.component.html',
  styleUrls: ['./transfer-details.component.scss']
})
export class TransferDetailsComponent extends AccountDetailsComponent implements OnInit{
  @ViewChild(MatAccordion) override accordion: MatAccordion =new MatAccordion();
  accountmap= new Map<string, number[]>;
  checkingAccslist: number[] = [];
  savingsAccslist:number[] = [];
  termAccountslist: number[] = [];
  transferTypes= transferTypes;
  transferDetailslist: TransferDetails[] = [];
  accounttypes = accountTypes;
  accNumber!: number;
  accType ="--";
  Checking = "Checking";
Savings ="Savings";
Termdeposit ="Termdeposit";
isShowtable = true;
  constructor(
    protected transferserviceService:TransferserviceService,
    protected override accountService:AccountServiceService,
    protected override customerService:CustomerServiceService,
    protected override route:ActivatedRoute,
    protected override router:Router){
    super(accountService,customerService,route,router);
  }
 
  override myButton() {
    console.log("my button was clicked!");
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.getAccountDetailsByCustomer();
    this.getAccountsForCustomer();
    
  }
  updateaccttype(e: any){
    this.accType = e.target.value;
  }
  
  updateaccNumber(e: any){
    this.accNumber = e.target.value;
  }
  getAccountsForCustomer(){
    this.accountService.getAccountsForCustomer(this.customerId).subscribe(data=>{
      this.accountmap = data;
      
      Object.entries(this.accountmap).forEach(([key, value]) => {
        console.log("testusha"+key,value);
          if(key =="Checking"){
            this.checkingAccslist = value;
          }
          if(key =="Savings"){
            this.savingsAccslist = value;
          }
          if(key =="Termdeposit"){
            this.termAccountslist = value;
          }
      });
    });
  }

  getTransactionHistory(){
    console.log("acc"+this.accNumber);
    console.log("acc"+this.accNumber);
    if(this.accNumber!=null){
    this.getTransactions(this.accNumber);
    }
  }
  
  getTransactionsByType(accountNumber:number,transType:string){
    this.transferserviceService.getTransactionsByType(accountNumber,transType).subscribe(data=>{
        this.transferDetailslist=Object.values(data);
      this.isShowtable=false;
    });
  }
  getTransactions(accountNumber:number){
    this.transferserviceService.getTransactions(accountNumber).subscribe(data=>{
      this.transferDetailslist=Object.values(data);
      this.isShowtable=false;
    });
  }
}

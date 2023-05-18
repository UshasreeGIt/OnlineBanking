import { Component } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AccountDetailsComponent } from '../account-details/account-details.component';
import { accountTypes } from './accounttype';
import { Account } from '../modules/account';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent extends AccountDetailsComponent {
  
  
  
  account: Account = new Account;
  accountType = "----";
  accounttypes = accountTypes;

  createAccount() {
    
    this.account.accountType= this.accountType;
    this.account.customerId = this.customer.customerId;

    this.accountService.createAccount(this.account).subscribe( data =>{
      this.goToAccountDetails(this.customerId);
         },
       error => console.log(error));
  }
  
  update(e: any){
    this.accountType = e.target.value;
  }
  goToAccountDetails(customerId:number){
    this.router.navigate(['accountDetails',customerId],{relativeTo:this.route});
  }
  
}

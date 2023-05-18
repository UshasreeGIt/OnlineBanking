import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustolerLoginComponent } from './custoler-login/custoler-login.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TransferDetailsComponent } from './transfer-details/transfer-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';


const routes: Routes = [
  {path:'customerLogin',component:CustolerLoginComponent},
  {path:'create-customer',component:CreateCustomerComponent},
  {path:'accountDetails/:customerId',component:AccountDetailsComponent},
  {path:'homepage/:customerId',component:HomePageComponent,children: [
    {path:'customerDetails/:customerId', component:CustomerDetailsComponent},
    {path:'accountDetails/:customerId',component:AccountDetailsComponent,children: [
      {path:'createAccount/:customerId', component:CreateAccountComponent,children:[
         {path:'accountDetails/:customerId',component:AccountDetailsComponent}]
    }]},
    {path:'transferDetails/:customerId',component:TransferDetailsComponent,children: [
      {path:'fundTransfer/:customerId', component:FundtransferComponent,children:[
        {path:'transferDetails/:customerId',component:TransferDetailsComponent}]}]}
  ]
  

},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

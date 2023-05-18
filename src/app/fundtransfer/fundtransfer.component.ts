import { Component } from '@angular/core';
import { TransferDetailsComponent } from '../transfer-details/transfer-details.component';
import { transferTypes } from './TransferTypes';
import { Account } from '../modules/account';
import { TransferDetails } from '../modules/transfer-details';
import { accountTypes } from '../create-account/accounttype';
@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.scss']
})
export class FundtransferComponent extends TransferDetailsComponent {
  accountType = "----";
  tranType ="--";
  accountNumber!: number;
  transferDetails = new TransferDetails();


  updateaccounttype(e: any){
    this.accountType = e.target.value;
  }
  updatetranstype(e: any){
    this.tranType = e.target.value;
  }
  updateaccountNumber(e: any){
    this.accountNumber = e.target.value;
  }


  transferAmount() {
    this.transferDetails.transactionType =this.tranType;
    this.transferDetails.accountType=this.accountType;
    this.transferDetails.accountNumber = this.accountNumber;
   if(this.tranType=="Credit"){
    this.transferserviceService.transferCredit(this.transferDetails).subscribe(data=>{
      this.goToTransferDetails();
    })
   }else{
    this.transferserviceService.transferDebit(this.transferDetails).subscribe(data=>{
      this.goToTransferDetails();
    })
   }  
}
override ngOnInit(): void {
  super.ngOnInit();
 }
 goToTransferDetails(){
    this.router.navigate(['transferDetails',this.customerId],{relativeTo:this.route});
  }
  
}

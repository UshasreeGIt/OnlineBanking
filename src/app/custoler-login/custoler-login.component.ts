import { Component, OnInit } from '@angular/core';
import { Customer } from '../modules/customer';
import { CustomerServiceService } from '../services/customer-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-custoler-login',
  templateUrl: './custoler-login.component.html',
  styleUrls: ['./custoler-login.component.scss']
})
export class CustolerLoginComponent  implements OnInit{
  customerId!: number;
  customer:Customer = new Customer();

  constructor(private customerService:CustomerServiceService,private router:Router){}
  ngOnInit(): void {
   
  }
  
  customerLogin(){
    this.customerService.customerLogin(this.customer.customerId,this.customer.password).subscribe(data =>{
      console.log(data);
      this.customerId =data.customerId;
      this.goToHomePage(this.customerId);
    },
   
    error=>console.error());
      
  }
  
  goToHomePage(customerId:number){
    this.router.navigate(['homepage',customerId]);
  }
  
  
}

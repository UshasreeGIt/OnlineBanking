import { Component, OnInit } from '@angular/core';
import { Customer } from '../modules/customer';
import { CustomerServiceService } from '../services/customer-service.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit{

 customer:Customer = new Customer();
 constructor(private customerService:CustomerServiceService,private router:Router){}
 
message:boolean =false;
 ngOnInit(): void {
 
}
createCustomer(){
  this.customerService.createCustomer(this.customer).subscribe(data =>{
    console.log(data);
    this.message=true;
    this.goToLoginPage();
  },
  error=>console.error()  );
}

goToLoginPage(){
  this.router.navigate(['/customerLogin']);
}

onSubmit(){
  console.log(this.customer);
  this.createCustomer();
}
}


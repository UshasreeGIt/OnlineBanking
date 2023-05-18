package com.OnlineBankingexample.OnlineBanking.customer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.OnlineBankingexample.OnlineBanking.customer.entity.Customer;
import com.OnlineBankingexample.OnlineBanking.customer.entity.CustomerDetails;
import com.OnlineBankingexample.OnlineBanking.customer.repo.CustomerDetailsRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@AutoConfiguration
@RequestMapping("onlinebanking/customer/")
public class CustomerDetailsController {

	@Autowired
	private CustomerDetailsRepo customerDetailsRepo;

	@PostMapping(value = "create", consumes = "application/json", produces = "application/json")
	public Long createCustomer(@RequestBody CustomerDetails customerDetails) {

		return this.customerDetailsRepo.save(customerDetails).getCustomerId();
	}
	
	@GetMapping(value = "login/{id}/{pwd}",consumes = "application/json", produces = "application/json")
	public Customer customerLogin(@PathVariable Long id,@PathVariable String pwd) {
		
		Customer customer=	this.customerDetailsRepo.findById(id).get();
		
		return customer!=null && customer.getPassword().equals(pwd)?customer:null;
		
	}
	@GetMapping(value = "getCustomerDetails/{id}",consumes = "application/json", produces = "application/json")
	public Customer getCustomerDetails(@PathVariable Long id) {
		return this.customerDetailsRepo.findById(id).get();
		
		
		
	}
}

package com.OnlineBankingeTransactionsExample.OnlineBankingTransactions.transactions.controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.OnlineBankingeTransactionsExample.OnlineBankingTransactions.transactions.entity.Transactions;
import com.OnlineBankingeTransactionsExample.OnlineBankingTransactions.transactions.repo.TransactionsRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@AutoConfiguration
@RequestMapping("onlinebanking/transaction/")
public class TransactionsController {
	@Autowired
	private TransactionsRepo repo;
	
	@PostMapping(value ="transferCredit",consumes = "application/json", produces = "application/json")
	public Transactions transferCredit(@RequestBody Transactions transactions) {
		return this.repo.save(transactions);
		
	}
	
	@PostMapping(value ="transferDebit",consumes = "application/json", produces = "application/json")
	public String transferDebit(@RequestBody Transactions transactions) {
		List<BigDecimal> accounttransactions =this.repo.findByTransactionType(transactions.getAccountNumber(),transactions.getTransactionType());
		BigDecimal avilableCredit = accounttransactions.stream().reduce(BigDecimal.ZERO,BigDecimal::add);
		if(avilableCredit.compareTo(transactions.getTransactionAmount())>=0) {
			return "Successfully transferd";
		}
		
		return "transaction failed transferd";
	}
	@GetMapping(value ="getTransactions/{accountNumber}",consumes = "application/json", produces = "application/json")
	public List<Transactions> getTransactions(@PathVariable Long accountNumber){
		return this.repo.findByTransactions(accountNumber);
		
	}
	
	@GetMapping(value ="getTransactionsByType/{accountNumber}/{transactionType}",consumes = "application/json", produces = "application/json")
	public List<Transactions> getTransactionsByType(@PathVariable Long accountNumber,@PathVariable String transactionType){
		return this.repo.findByTransactionTypes(accountNumber,transactionType);
		
	}
}

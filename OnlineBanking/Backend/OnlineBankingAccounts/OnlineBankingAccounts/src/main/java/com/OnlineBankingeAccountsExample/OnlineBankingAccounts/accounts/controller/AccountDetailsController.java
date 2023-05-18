package com.OnlineBankingeAccountsExample.OnlineBankingAccounts.accounts.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.OnlineBankingeAccountsExample.OnlineBankingAccounts.accounts.entity.Account;
import com.OnlineBankingeAccountsExample.OnlineBankingAccounts.accounts.repo.AccountDetailsRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@AutoConfiguration
@RequestMapping("onlinebanking/account/")
public class AccountDetailsController {
	@Autowired
	private AccountDetailsRepo accountDetailsRepo;

	@PostMapping(value = "create", consumes = "application/json", produces = "application/json")
	public Account createAccount(@RequestBody Account account) {
		account.setAccountActive(true);
		return this.accountDetailsRepo.save(account);
	}

	@GetMapping(value = "getAccountDetails/{accountNumber}", consumes = "application/json", produces = "application/json")
	public Account getAccountDetails(@PathVariable Long accountNumber) {
		Account account = this.accountDetailsRepo.findById(accountNumber).get();
		return account != null ? account : null;
	}

	@PutMapping(value = "updateAccountStatus/{accountNumber}/{accountActive}", consumes = "application/json", produces = "application/json")
	public void updateAccountStaus(@PathVariable Long accountNumber, @PathVariable boolean accountActive) {
		Account account = this.accountDetailsRepo.findById(accountNumber).get();
		account.setAccountActive(accountActive);
		this.accountDetailsRepo.save(account);

	}

	@DeleteMapping(value = "deleteAccountDetails/{accountNumber}", consumes = "application/json", produces = "application/json")
	public void deleteAccount(@PathVariable Long accountNumber) {
		this.accountDetailsRepo.deleteById(accountNumber);
	}
	@GetMapping(value = "getAccountsForCustomer/{customerId}", consumes = "application/json", produces = "application/json")
	public Map<String,List<Long>> getAccountsForCustomer(@PathVariable Long customerId){
		List<Account> accountList = this.accountDetailsRepo.getAccountDetailsForCustomer(customerId);

		Map<String, List<Long>> accountMap = new HashMap<>();

		List<Long> checkingList = new ArrayList<Long>();
		List<Long> saivingList = new ArrayList<Long>();
		List<Long> tdList = new ArrayList<Long>();
		for (Account account : accountList) {
			if (account.getAccountType().equals("Checking")) {
				checkingList.add(account.getAccountNumber());
			}
			if (account.getAccountType().equals("Savings")) {
				saivingList.add(account.getAccountNumber());
			}
			if (account.getAccountType().equals("Termdeposit")) {
				tdList.add(account.getAccountNumber());
			}
		}
		
		accountMap.put("Checking", checkingList);
		accountMap.put("Savings", saivingList);
		accountMap.put("Termdeposit", tdList);
		
		return accountMap;
	}
	@GetMapping(value = "getAccountDetailsForCustomer/{customerId}", consumes = "application/json", produces = "application/json")
	public Map<String, List<Account>> getAccountDetailsForCustomer(@PathVariable Long customerId) {
		List<Account> accountList = this.accountDetailsRepo.getAccountDetailsForCustomer(customerId);

		Map<String, List<Account>> accountMap = new HashMap<>();

		List<Account> checkingList = new ArrayList<Account>();
		List<Account> saivingList = new ArrayList<Account>();
		List<Account> tdList = new ArrayList<Account>();
		for (Account account : accountList) {
			if (account.getAccountType().equals("Checking")) {
				checkingList.add(account);
			}
			if (account.getAccountType().equals("Savings")) {
				saivingList.add(account);
			}
			if (account.getAccountType().equals("Termdeposit")) {
				tdList.add(account);
			}
		}
		
		accountMap.put("Checking", checkingList);
		accountMap.put("Savings", saivingList);
		accountMap.put("Termdeposit", tdList);
		
		return accountMap;
	}
}

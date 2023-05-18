package com.OnlineBankingeAccountsExample.OnlineBankingAccounts.accounts.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long accountNumber;
	
	private Long CustomerId;
	private String accountType;
	private String accountNickName;
	@Column(name = "accountactive")
	private boolean isAccountActive;
	public Long getCustomerId() {
		return CustomerId;
	}
	
	public Account() {
		super();
	}

	public Account(Long customerId, String accountType, String accountNickName, boolean isAccountActive) {
		super();
		CustomerId = customerId;
		this.accountType = accountType;
		this.accountNickName = accountNickName;
		this.isAccountActive = isAccountActive;
	}
	public Long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(Long accountNumber) {
		this.accountNumber = accountNumber;
	}
	public void setCustomerId(Long customerId) {
		CustomerId = customerId;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	public String getAccountNickName() {
		return accountNickName;
	}
	public void setAccountNickName(String accountNickName) {
		this.accountNickName = accountNickName;
	}
	public boolean isAccountActive() {
		return isAccountActive;
	}
	public void setAccountActive(boolean isAccountActive) {
		this.isAccountActive = isAccountActive;
	}
	
	
	
}

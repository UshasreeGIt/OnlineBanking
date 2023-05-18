package com.OnlineBankingeTransactionsExample.OnlineBankingTransactions.transactions.entity;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Transactions {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long transaId;
	private Long accountNumber;
	private String transactionType;
	private BigDecimal transactionAmount;
	private String currency;
	private String accountType;
	public Transactions(Long accountNumber, String transactionType, BigDecimal transactionAmount, String currency,String accountType) {
		super();
		this.accountNumber = accountNumber;
		this.transactionType = transactionType;
		this.transactionAmount = transactionAmount;
		this.currency = currency;
	}
	public Transactions() {
		super();
	}
	public Long getTransaId() {
		return transaId;
	}
	public void setTransaId(Long transaId) {
		this.transaId = transaId;
	}
	public Long getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(Long accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getTransactionType() {
		return transactionType;
	}
	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}
	public BigDecimal getTransactionAmount() {
		return transactionAmount;
	}
	public void setTransactionAmount(BigDecimal transactionAmount) {
		this.transactionAmount = transactionAmount;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	
	

}

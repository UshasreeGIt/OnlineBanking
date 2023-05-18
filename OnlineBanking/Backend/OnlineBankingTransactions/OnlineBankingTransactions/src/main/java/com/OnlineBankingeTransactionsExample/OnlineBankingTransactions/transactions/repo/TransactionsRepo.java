package com.OnlineBankingeTransactionsExample.OnlineBankingTransactions.transactions.repo;


import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.OnlineBankingeTransactionsExample.OnlineBankingTransactions.transactions.entity.Transactions;
@EnableJpaRepositories
public interface TransactionsRepo extends JpaRepository<Transactions, Long> {

	 @Query(value = "SELECT t.TRANSACTION_AMOUNT FROM Transactions t WHERE t.ACCOUNT_NUMBER = ?1 AND t.TRANSACTION_TYPE = ?2",nativeQuery = true)
	public List<BigDecimal> findByTransactionType(Long accountNumber,String tarnsactionType);
	 
	 @Query(value = "SELECT * FROM Transactions  WHERE ACCOUNT_NUMBER = ?1 AND TRANSACTION_TYPE = ?2" ,  nativeQuery = true)
	public List<Transactions> findByTransactionTypes(Long accountNumber,String tarnsactionType);
	 
	 @Query(value = "SELECT * FROM Transactions WHERE ACCOUNT_NUMBER = ?1" , nativeQuery = true)
	public 	List<Transactions> findByTransactions(Long accountNumber);
}

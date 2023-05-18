package com.OnlineBankingeAccountsExample.OnlineBankingAccounts.accounts.repo;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.OnlineBankingeAccountsExample.OnlineBankingAccounts.accounts.entity.Account;

public interface AccountDetailsRepo extends JpaRepository<Account, Long>{
	 @Query(value = "SELECT * FROM Account  WHERE CUSTOMER_ID = ?1",nativeQuery = true)
		public List<Account> getAccountDetailsForCustomer(Long customerId);
		
}

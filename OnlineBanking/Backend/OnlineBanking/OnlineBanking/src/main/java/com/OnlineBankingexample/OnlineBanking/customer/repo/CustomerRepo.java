package com.OnlineBankingexample.OnlineBanking.customer.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.OnlineBankingexample.OnlineBanking.customer.entity.Customer;

@NoRepositoryBean
public interface CustomerRepo extends JpaRepository<Customer, Long>{

}

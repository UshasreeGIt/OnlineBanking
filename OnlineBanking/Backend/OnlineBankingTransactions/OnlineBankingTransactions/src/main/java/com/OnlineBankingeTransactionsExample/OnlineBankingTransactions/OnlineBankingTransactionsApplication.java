package com.OnlineBankingeTransactionsExample.OnlineBankingTransactions;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
//@EnableEurekaClient
@ComponentScan("com.OnlineBankingeTransactionsExample")
@CrossOrigin(origins = "http://localhost:4200")
public class OnlineBankingTransactionsApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineBankingTransactionsApplication.class, args);
	}

}

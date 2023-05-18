package com.OnlineBankingexample.OnlineBanking.customer.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table
@Inheritance(strategy = InheritanceType.JOINED)
public class CustomerDetails extends Customer {
	@Temporal(TemporalType.DATE)
	private Date customerDOB;
	private String address;
	private String gender;
	private Long aadharNumber;

	public CustomerDetails() {
		super();
	}


	public CustomerDetails(String customerName, String password, String emailAddress, Long phoneNumber, Date customerDOB,
			String address, String gender, Long aadharNumber) {
		super(customerName, password, emailAddress, phoneNumber);
		this.customerDOB = customerDOB;
		this.address = address;
		this.gender = gender;
		this.aadharNumber = aadharNumber;
	}


	public Date getCustomerDOB() {
		return customerDOB;
	}

	public void setCustomerDOB(Date customerDOB) {
		this.customerDOB = customerDOB;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Long getAadharNumber() {
		return aadharNumber;
	}

	public void setAadharNumber(Long aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

}

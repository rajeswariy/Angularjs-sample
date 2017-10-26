package com.javasampleapproach.angularjs.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customers {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer customer_id;

	String first_name;

	String last_name;
	
	  Date Birthday; String email; String Phone; String Company; 
	  int Zip_Code;
	  int Numberof_Purchases;
	  
	 

	public Date getBirthday() {
		return Birthday;
	}

	public void setBirthday(Date birthday) {
		Birthday = birthday;
	}

	public String getCompany() {
		return Company;
	}

	public void setCompany(String company) {
		Company = company;
	}

	public int getNumberof_Purchases() {
		return Numberof_Purchases;
	}

	public void setNumberof_Purchases(int numberof_Purchases) {
		Numberof_Purchases = numberof_Purchases;
	}

	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return Phone;
	}

	public void setPhone(String phone) {
		Phone = phone;
	}

	

	

	
	

	public int getZip_Code() {
		return Zip_Code;
	}

	public void setZip_Code(int zip_Code) {
		Zip_Code = zip_Code;
	}

	public Integer getCustomer_id() {
		return customer_id;
	}

	/*public void setCustomer_id(Integer customer_id) {
		this.customer_id = customer_id;
	}*/

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	/*
	 * public Customers() { super(); // TODO Auto-generated constructor stub }
	 * 
	 * public Customers(String firstName, String lastName, Date birthday, String
	 * email, String phone, String company, int zipCode, int numberofPurchases)
	 * { super(); FirstName = firstName; LastName = lastName; Birthday =
	 * birthday; this.email = email; Phone = phone; Company = company; ZipCode =
	 * zipCode; NumberofPurchases = numberofPurchases; }
	 */

}
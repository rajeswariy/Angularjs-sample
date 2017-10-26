package com.javasampleapproach.angularjs.service;

import com.javasampleapproach.angularjs.model.Customers;

public interface CustomersService {
	public Customers findByproductId(int CustomerId);

	public Iterable<Customers> findAllCustomers();

	public Customers save(Customers customers);

	public Customers findByProductName(String FirstName);
	
	boolean exists(Integer id);
	
	public Customers delete(Integer CustomerId);
	public Customers update(Customers customers);
}

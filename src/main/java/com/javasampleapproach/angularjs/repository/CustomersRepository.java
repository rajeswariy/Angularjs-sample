package com.javasampleapproach.angularjs.repository;


import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.javasampleapproach.angularjs.model.Customers;

@Repository
public interface CustomersRepository extends CrudRepository<Customers,Integer> {
	//public long count();

	//public Customers findByProductName(String FirstName);

	//public Customers findByProductId(int productId);
	//boolean exists(ID id);
}

package com.javasampleapproach.angularjs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javasampleapproach.angularjs.model.Customers;
import com.javasampleapproach.angularjs.repository.CustomersRepository;

@Service
public class CustomersServiceImpl implements CustomersService {

	@Autowired 
	CustomersRepository customersRepository;
	
	public Customers findByproductId(int CustomerId) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Customers> findAllCustomers() {
		// TODO Auto-generated method stub
		return (List<Customers>) customersRepository.findAll();
	}

	public Customers save(Customers customers) {
		// TODO Auto-generated method stub
		customersRepository.save(customers);
		return customers;
	}

	public Customers findByProductName(String FirstName) {
		// TODO Auto-generated method stub
		return null;
	}

	public Customers update(Customers customers) {
		// TODO Auto-generated method stub

		if(exists(customers.getCustomer_id())==true){
			customersRepository.delete(customers.getCustomer_id());
			save(customers);
			return customers;
			
		}
		else{
			save(customers);
			return customers;
			
		}
	}

	@Override
	public boolean exists(Integer id) {
		// TODO Auto-generated method stub
		return customersRepository.exists(id);
		
	}

	@Override
	public Customers delete(Integer CustomerId) {
		// TODO Auto-generated method stub
		Customers c=null;
		if(exists(CustomerId)==true){
			 c=customersRepository.findOne(CustomerId);
			customersRepository.delete(CustomerId);
			
			
			}
		return c;
		
	}

}

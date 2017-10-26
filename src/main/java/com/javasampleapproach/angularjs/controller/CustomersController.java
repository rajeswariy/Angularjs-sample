package com.javasampleapproach.angularjs.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.angularjs.model.Customers;
import com.javasampleapproach.angularjs.service.CustomersService;

@RestController
public class CustomersController {
	
	@Autowired
	CustomersService customersService;

	List<Customers> cust = new ArrayList<Customers>();

	// for getting customers
	@RequestMapping(value = "/getCustomers", method = RequestMethod.GET)
	public List<Customers> getResource() {
		List<Customers> c=(List<Customers>)customersService.findAllCustomers();
		Iterator i=c.iterator();
	    while(i.hasNext())
	    {
	    	Customers cust=(Customers)i.next();
	    	System.out.println(cust.getNumberof_Purchases());
	    }
		return (List<Customers>) customersService.findAllCustomers();
	}

	// for adding customers
	/*@RequestMapping(value = "/apps/create", method = RequestMethod.POST)*/
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public void postCustomer(@RequestBody Customers customers) {
		Customers c1=customersService.save(customers);
		System.out.println("saved with"+c1.getCustomer_id()+", "+customers.getCompany());
		
	}

	// for updating customers

	@RequestMapping(value = "/apps/editcustomer", method = RequestMethod.PUT)
	public void editCustomer(@RequestBody Customers customers) {
		customersService.update(customers);
		System.out.println("updated");
	}

	// for deleting customers
	@RequestMapping(value = "/deletecustomer/{id}", method = RequestMethod.DELETE)
	public Customers deleteCustomer(@PathVariable Integer id) {
		Customers customers=customersService.findByproductId(id);
		Customers c=customersService.delete(id);
		System.out.println("deleted with"+id);
		return c;
	}
}

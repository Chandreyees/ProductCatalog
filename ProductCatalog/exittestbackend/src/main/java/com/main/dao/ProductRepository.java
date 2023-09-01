package com.main.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.main.model.Product;

public interface ProductRepository extends CrudRepository<Product, String>{
	
	public List<Product>findByName(String name);
	
	public List<Product> findByProductId(String id);
	
	public List<Product> findByBrandName(String brandName);

	
}

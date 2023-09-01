package com.main.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.main.model.Product;

@Component
public interface ProductServices {
	
	public List<Product> findProduct();
	
	public List<Product> findByName(String name);
	
	public List<Product> findByProductId(String id);
	
	public List<Product> findByBrandName(String brandName);

}

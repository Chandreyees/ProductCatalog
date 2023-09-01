package com.main.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.main.dao.ProductRepository;
import com.main.model.Product;
import com.main.service.ProductServices;

@Component
public class ProductServiceImpl implements ProductServices{
	
	@Autowired
	private final ProductRepository productRepository;
	
	

	public ProductServiceImpl(ProductRepository productRepository) {
		super();
		this.productRepository = productRepository;
	}

	@Override
	public List<Product> findByName(String name) {
		List<Product> products=productRepository.findByName(name);
	
		return products;
	}

	@Override
	public List<Product> findByProductId(String id) {
		List<Product> product=null;
		try {
			product=productRepository.findByProductId(id);
		} catch (Exception e) {
			// TODO: handle exception
		}
		return product;
	}

	@Override
	public List<Product> findByBrandName(String brandName) {
		List<Product> products=productRepository.findByBrandName(brandName);
		return products;
	}

	@Override
	public List<Product> findProduct() {
		List<Product> products=(List<Product>) productRepository.findAll();
		return products;
	}

}

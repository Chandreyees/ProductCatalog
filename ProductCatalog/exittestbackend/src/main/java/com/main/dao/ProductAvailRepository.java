package com.main.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.main.model.ProductAvail;

public interface ProductAvailRepository extends CrudRepository<ProductAvail, String>{
	
	public List<ProductAvail> findByPincode(String pincode);
	
	public ProductAvail findByTime(String time);
}

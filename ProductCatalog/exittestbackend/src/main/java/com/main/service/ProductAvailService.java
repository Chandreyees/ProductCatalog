package com.main.service;

import java.util.List;

import com.main.model.ProductAvail;

public interface ProductAvailService {

	public List<ProductAvail> findByPincode(String pincode);

	public List<ProductAvail> findByTime(String time);

}

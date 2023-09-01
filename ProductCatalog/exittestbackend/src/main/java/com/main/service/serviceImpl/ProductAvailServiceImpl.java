package com.main.service.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Component;

import com.main.dao.ProductAvailRepository;
import com.main.model.ProductAvail;
import com.main.service.ProductAvailService;

@Component
public class ProductAvailServiceImpl implements ProductAvailService {

	
	private final ProductAvailRepository productAvailRepository;
	
	public ProductAvailServiceImpl(ProductAvailRepository productAvailRepository) {
		super();
		this.productAvailRepository = productAvailRepository;
	}

	@Override
	public List<ProductAvail> findByPincode(String pincode) {
		@SuppressWarnings("unchecked")
		List<ProductAvail> pincodes=(List<ProductAvail>) productAvailRepository.findByPincode(pincode);
		return pincodes;
	}

	@Override
	public List<ProductAvail> findByTime(String time) {
		@SuppressWarnings("unchecked")
		List<ProductAvail> timeAvails=(List<ProductAvail>) productAvailRepository.findByTime(time);
		return timeAvails;
	}
	
	
	
	

}

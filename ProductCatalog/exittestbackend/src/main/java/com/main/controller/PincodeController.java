package com.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.main.model.ProductAvail;
import com.main.service.ProductAvailService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PincodeController {
	
	@Autowired
	public ProductAvailService productAvailService;
	
	@GetMapping("/pincode/{pincode}")
	public ResponseEntity<Object> getPincodes(@PathVariable("pincode") String pincode){
		List<ProductAvail> pincodeList=productAvailService.findByPincode(pincode);
		return ResponseEntity.of(Optional.of(pincodeList));
	}
	
//	@GetMapping("/time/{time}")
//	public ResponseEntity<Object> getProductTime(@PathVariable("time") String time){
//		List<ProductAvail> timeList=productAvailService.findByTime(time);
//		return ResponseEntity.of(Optional.of(timeList));
//	}
	
	
	

}

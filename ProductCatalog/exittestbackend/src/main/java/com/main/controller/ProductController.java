package com.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.main.model.Product;
import com.main.service.ProductServices;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	
	@Autowired
	public ProductServices productServices;
	
	
	
	@GetMapping("/products")
	public ResponseEntity<Object> getProducts(){
		List<Product> products=productServices.findProduct();
		if(products.size()==0)
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		
		return ResponseEntity.of(Optional.of(products));
	}
	
	@GetMapping("/productsName/{name}")
	public ResponseEntity<Object> getProductName(@PathVariable("name") String name){
		List<Product> products=productServices.findByName(name);
		return ResponseEntity.of(Optional.of(products));
	}
	
	@GetMapping("/productsBrand/{brandName}")
	public ResponseEntity<Object> getProductBrandName(@PathVariable("brandName") String brandName){
		List<Product> products=productServices.findByBrandName(brandName);
		return ResponseEntity.of(Optional.of(products));
	}
	
	@GetMapping("/productsCode/{productId}")
	public ResponseEntity<Object> getProductCode(@PathVariable("productId") String productId){
		List<Product> products=productServices.findByProductId(productId);
		if(products==null)
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		return ResponseEntity.of(Optional.of(products));
	}
	
	
}

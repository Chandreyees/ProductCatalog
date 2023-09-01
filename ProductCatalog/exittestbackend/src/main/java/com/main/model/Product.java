package com.main.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Product {
	
	@Id
	private String productId;
	private String name;
	private String brandName;
	private int price;
	private String details;
	private String imageUrl;
	@ManyToMany(mappedBy = "products")
	@JsonBackReference
	Set<ProductAvail> productAvails;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(String id, String name, String brandName, int price, String details, String imageUrl,
			HashSet<ProductAvail> productAvails) {
		super();
		this.productId = id;
		this.name = name;
		this.brandName = brandName;
		this.price = price;
		this.details = details;
		this.imageUrl = imageUrl;
		this.productAvails = productAvails;
	}

	public String getId() {
		return productId;
	}

	public void setId(String id) {
		this.productId = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public Set<ProductAvail> getProductAvails() {
		return productAvails;
	}

	public void setProductAvails(Set<ProductAvail> productAvails) {
		this.productAvails = productAvails;
	}

	@Override
	public String toString() {
		return "Product [id=" + productId + ", name=" + name + ", brandName=" + brandName + ", price=" + price + ", details="
				+ details + ", imageUrl=" + imageUrl + ", productAvails=" + productAvails + "]";
	}

	
	

}

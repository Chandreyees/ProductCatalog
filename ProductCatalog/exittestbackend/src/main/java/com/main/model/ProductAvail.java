package com.main.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class ProductAvail {
	
	@Id
	private String id;
	private String pincode;
	private String time;
	@ManyToMany
	@JsonManagedReference
	@JsonIgnore
	Set<Product> products;
	public ProductAvail(String id, String pincode, String time, Set<Product> products) {
		super();
		this.id = id;
		this.pincode = pincode;
		this.time = time;
		this.products = products;
	}
	public ProductAvail() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public Set<Product> getProducts() {
		return products;
	}
	public void setProducts(Set<Product> products) {
		this.products = products;
	}
	@Override
	public String toString() {
		return "ProductAvail [id=" + id + ", pincode=" + pincode + ", time=" + time + ", products=" + products + "]";
	}
	
	

}

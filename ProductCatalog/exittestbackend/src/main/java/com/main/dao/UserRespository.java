package com.main.dao;

import org.springframework.data.repository.CrudRepository;

import com.main.model.User;

public interface UserRespository extends CrudRepository<User, Integer> {

	public User findByEmailAndPassword(String email,String password);
	
	public User findByEmail(String email);
	
	
}
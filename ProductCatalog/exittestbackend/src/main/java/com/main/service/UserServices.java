package com.main.service;

import org.springframework.stereotype.Component;

import com.main.model.User;

@Component
public interface UserServices{
	
	public User findByEmailAndPassword(String email, String password);
	public User addUser(User user);
	public User findByEmail(String email);
}
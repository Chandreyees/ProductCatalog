package com.main.service.serviceImpl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.main.dao.UserRespository;
import com.main.model.User;
import com.main.service.UserServices;

@Component
public class UserServiceImpl implements UserServices{

	@Autowired
	private UserRespository userRespository;

	
	
	public User findByEmailAndPassword(String email, String password) {
		User user=userRespository.findByEmailAndPassword(email, password);
		return user;
	}
	
	@Transactional
	public User addUser(User user) {
		userRespository.save(user);
		return user;
	}

	@Override
	public User findByEmail(String email) {
		User user=userRespository.findByEmail(email);
		return user;
	}
}

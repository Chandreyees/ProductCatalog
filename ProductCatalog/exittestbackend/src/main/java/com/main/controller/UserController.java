package com.main.controller; 

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.main.model.User;
import com.main.service.UserServices;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	public UserServices userServices;
	
	
	
	@GetMapping("/user/{email}/{password}")
	public ResponseEntity<Object> findUsers(@PathVariable("email") String email,@PathVariable("password") String password){
		User user=userServices.findByEmailAndPassword(email, password);
		if(user==null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(user));
		
	}
	
	@PostMapping("/user/{email}")
	public ResponseEntity<Object> addUser(@PathVariable("email") String email,@RequestBody User user){
		User userEmail=userServices.findByEmail(email);
		User user2=null;
		if(userEmail!=null) {
			return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
		}
		else {
			try {
				user2=userServices.addUser(user);
				return ResponseEntity.ok(Optional.of(user2));
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}
		
	}
	

}

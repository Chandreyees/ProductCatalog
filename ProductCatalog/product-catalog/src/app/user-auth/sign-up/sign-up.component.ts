import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserdataservicesService} from '../userdataservices.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required]), 
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  constructor(private route: Router,private userservice: UserdataservicesService) { }
  err='';
  ngOnInit(): void {
  }

  onSubmit(){
    
    let user = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value
    }

    this.userservice.registeruser(user,user.email).subscribe({
      next:(result)=>{
        console.log(result);
        this.route.navigateByUrl('/login');
        
      },
      error:(error)=>{
        if(error.status==400)
        {
          this.err="Email is already taken!";
        }
      }
      
    })
    
    

 }


  onLogin(){
    this.route.navigate(['/login']);
  }

}

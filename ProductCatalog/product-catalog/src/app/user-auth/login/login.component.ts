import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserdataservicesService} from '../userdataservices.service';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  err='';

  constructor(private route:Router, private userService: UserdataservicesService,private authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit(){
    let user = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

   
    

    this.userService.user(user.email,user.password).subscribe({
      next:(result)=>{
        console.log(result);
        this.authService.setToken('ok');
        this.route.navigateByUrl('/productsearch')
       
      },
      error:(error)=>{
        if(error.status==404)
        {
          this.err="Login Credential is/are incorrect!!";
        }
      }
    })


  }

  userData(){
    return this.loginForm.get('email')?.value;
  }

  passwordData(){
    return this.loginForm.get('password')?.value;
  }

  

}



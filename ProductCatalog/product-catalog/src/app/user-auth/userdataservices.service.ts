import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataservicesService {
  
  url='http://localhost:8000/';
  path: string='';
  constructor(private http:HttpClient) { }

  user(email: string,password: string){
    this.path=this.url+'user/'+email+'/'+password;
    return this.http.get(this.path);
  }

  registeruser(data: any,email: string){
    this.path=this.url+'user/'+email;
    return this.http.post(this.path,data);
  }

}

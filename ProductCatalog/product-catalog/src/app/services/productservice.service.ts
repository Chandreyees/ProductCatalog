import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  url='http://localhost:8000/';
  path: string='';
  constructor(private http:HttpClient) { }

  products(){
    this.path=this.url+'products';
    return this.http.get(this.path);
  }

  productbyname(name: string){
    this.path=this.url+'productsName/'+name;
    return this.http.get(this.path);
  }

  productbybrandname(brand: string){
    this.path=this.url+'productsBrand/'+brand;
    return this.http.get(this.path);
  }

  productbyid(id: string){
    this.path=this.url+'productsCode/'+id;
    return this.http.get(this.path);
  }

  pincodes(pin: string){
    this.path=this.url+'pincode/'+pin;
    return this.http.get(this.path);
  }
}

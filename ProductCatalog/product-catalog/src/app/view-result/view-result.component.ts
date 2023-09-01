import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {ProductserviceService} from '../services/productservice.service'

interface Datas{
  name: string,
  id: string,
  brandName: string,
  price: number,
  details: string,
  imageUrl: string

}

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {


  products:Array<Datas>=[];
  productName: any;

  constructor(private route: Router,private router: ActivatedRoute,private productService: ProductserviceService) {
    this.productName=this.router.snapshot.paramMap.get('name');
   }

  ngOnInit(): void {

    this.productService.productbyname(this.productName).subscribe({
      next: (result:any)=>{
        console.log(result);
        this.products=result;
        
      }
    })
  }

  viewDetails(){
    alert("Log in to see the details..")
  }

  onLogin(){
    this.route.navigate(['/login']);
  }

  onRegister(){
    this.route.navigate(['/signup']);
  }

 

}

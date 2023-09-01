import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { ProductserviceService } from 'src/app/services/productservice.service';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

interface Datas{
  name: string,
  id: string,
  brandName: string,
  price: number,
  details: string,
  imageUrl: string

}

@Component({
  selector: 'app-productresult',
  templateUrl: './productresult.component.html',
  styleUrls: ['./productresult.component.css']
})
export class ProductresultComponent implements OnInit {

  products:Array<Datas>=[];
  productObject={name:'',price:0,id:'',brandName:'',details:'',imageUrl:''};
  productName: any;
  productCode: any;
  productBrand: any;
  Price:any;
  errmsg:string= '';
  random:string='';
  searchPriceForm =  new FormGroup({
    Price: new FormControl('')
  });
  
  constructor(private route: Router,private router: ActivatedRoute,private productService: ProductserviceService) { 
    if(this.router.snapshot.paramMap.get('names')?.includes('Name')){
      this.productName=this.router.snapshot.paramMap.get('name');
    }
    else if(this.router.snapshot.paramMap.get('names')?.includes('CODE')){
      this.productCode=this.router.snapshot.paramMap.get('name');
    }
    else{
      this.productBrand=this.router.snapshot.paramMap.get('name');
    }
  }

  ngOnInit(): void {

    if(this.productName!=null){
    this.productService.productbyname(this.productName).subscribe({
      next: (result:any)=>{
        console.log(result);
        this.products=result;
        
      }
    })
  }
  else if(this.productCode!=null){
    this.productService.productbyid(this.productCode).subscribe({
      next: (result:any)=>{
        console.log(result);
      this.products=result;
        this.random='ok';
      },
      error: (err)=>{
        this.errmsg='No products found';
        console.log(this.errmsg);
        
      }
    })
 }
 else{
   this.productService.productbybrandname(this.productBrand).subscribe({
     next: (result:any)=>{
       console.log(result);
       
       
     }
   })
 }


  }

  viewDetails(productId: any){
    console.log(productId);
    this.route.navigate([`/productdetails/${productId}`]);
  }

  onSubmitPrice(){
    
  }

  isEmptyObj(obj: any): boolean {
    let flag;
    if(Object.keys(obj).length === 0){
      flag=true;
      this.random='';
    }
    else{
      flag=false;
    }
    return flag;
   
  }

  

}

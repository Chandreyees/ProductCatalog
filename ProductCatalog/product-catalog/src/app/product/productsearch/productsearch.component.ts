import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductsearchComponent implements OnInit {

  searchNameForm = new FormGroup({
    name: new FormControl('',[Validators.required])
  });
  searchCodeForm= new FormGroup({
    code: new FormControl('',[Validators.required])
   });

   searchBrandForm= new FormGroup({
     brandName: new FormControl('')
   });

   product={
     name: '',
     code: '',
     brand: ''
   }
 

  constructor(private router: Router,private route: ActivatedRoute,private productService:ProductserviceService) { 

  }

  ngOnInit(): void {
  }

  onSubmitName(){
    this.product.name=this.searchNameForm.get('name')?.value;
    console.log(this.product.name);

    this.productService.productbyname(this.product.name).subscribe({
      next: (result)=>
      {
        console.log(result);
        this.router.navigate([`/productresult/${this.product.name+' '+'Name'}/${this.product.name}`])
        
      }
    })
    
  }

  onSubmitCode(){
    this.product.code=this.searchCodeForm.get('code')?.value;
    console.log(this.product.code);
    this.productService.productbyid(this.product.code).subscribe({
      next: (result)=>{
        console.log(result);
        this.router.navigate([`/productresult/${this.product.code+' '+'CODE'}/${this.product.code}`])
      }
    })
    
  }

  onSubmitBrand(){
    this.product.brand=this.searchBrandForm.get('brandName')?.value;
   console.log(this.product.brand);
    this.productService.productbybrandname(this.product.brand).subscribe({
      next: (result)=>{
        console.log(result);
        this.router.navigate([`/productresult/${this.product.brand+' '+'Brand'}/${this.product.brand}`])
      }
    })
  }

  onLogout(){
    this.router.navigate(['/']);
  }

  

  // this.productservice.productbyname(product.name).subscribe({
  //   next:(result)=>{
  //     console.log(result);
  //     this.route.navigate([`/viewResult/${product.name}`])
      
  //   }
  // })
}

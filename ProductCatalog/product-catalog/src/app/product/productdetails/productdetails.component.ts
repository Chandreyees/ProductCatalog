import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { ProductserviceService } from 'src/app/services/productservice.service';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  searchPincodeForm = new FormGroup({
   pincode: new FormControl('',[Validators.required])
  });

  isAvailable=false;
  message='';
  time='';
  products={name:'',id:'',brandName:'',price:0,details:'',imageUrl:''}
  id:any;

  constructor(private route: Router,private router: ActivatedRoute,private productService: ProductserviceService) {
    this.id=this.router.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.productService.productbyid(this.id).subscribe({
      next: (result:any)=>{
        console.log(result);
        this.products=result;
      }
    })
  }

  onSubmit(){
    let pincode=this.searchPincodeForm.get('pincode')?.value;
    this.productService.pincodes(pincode).subscribe({
      next: (result:any)=>{
        console.log(result);
        let flag=false;
        for (let i = 0; i < result[0].products.length; i++) {
          if(result[0].products[i].id===this.id){
            console.log('product is available!');
            flag=true;
            this.time=result[0].time;
            break;
            
          }
        }
        this.message='searched!';
        if(flag==true)
        this.isAvailable=true;

        
      }
    })
    }

}

import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {ProductserviceService} from '../services/productservice.service'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchNameForm = new FormGroup({
   name: new FormControl('',[Validators.required]),
  });

  constructor(private route: Router,private productservice: ProductserviceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let product={
      name: this.searchNameForm.get('name')?.value
    }

    this.productservice.productbyname(product.name).subscribe({
      next:(result)=>{
        console.log(result);
        this.route.navigate([`/viewResult/${product.name}`])
        
      }
    })
  }

 

}

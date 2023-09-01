import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { ProductresultComponent } from './productresult/productresult.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPricePipe } from './filter-price.pipe';



@NgModule({
  declarations: [
    ProductsearchComponent,
    ProductresultComponent,
    ProductdetailsComponent,
    NavComponent,
    FilterPricePipe,
    
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ProductModule { }

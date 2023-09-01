import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './product/nav/nav.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { ProductresultComponent } from './product/productresult/productresult.component';
import { ProductsearchComponent } from './product/productsearch/productsearch.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AuthGuard } from './user-auth/auth.guard';
import { LoginComponent } from './user-auth/login/login.component';
import { SignUpComponent } from './user-auth/sign-up/sign-up.component';
import { ViewResultComponent } from './view-result/view-result.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: ProductsearchComponent,
    path: 'productsearch',
    canActivate: [AuthGuard]
    
  },
  {
    component: ProductresultComponent,
    path: 'productresult/:names/:name',
    
  },
  {
    component: ProductdetailsComponent,
    path: 'productdetails/:id',
   
  },
  {
    component: SignUpComponent,
    path: 'signup',
  },
  {
    component: SearchbarComponent,
    path: 'searchbar'
  },
  {
    component: ViewResultComponent,
    path: 'viewResult/:name'
  },
  {
    component: NavComponent,
    path: 'nav'
  },
  {
    component: NotFoundComponent,
    path: '**'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

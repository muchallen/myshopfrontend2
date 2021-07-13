import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {HomeComponent} from './home/home.component'
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'shop', component : ShopComponent},
  {path: 'checkout', component : CheckoutComponent},
  {path: 'cart', component : CartComponent},
  {path: 'addproduct', component : AddProductsComponent},
  {path: 'product', component : SingleProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

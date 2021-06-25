import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {HomeComponent} from './home/home.component'
import { ShopComponent } from './shop/shop.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'shop', component : ShopComponent},
  {path: 'checkout', component : CheckoutComponent},
  {path: 'cart', component : CartComponent},
  {path: 'slider', component : SliderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

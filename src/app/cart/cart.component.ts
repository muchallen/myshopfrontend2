import { Component, OnInit } from '@angular/core';
import { Cart } from '../Cart';
import { Product } from '../Product';
import { Injectable } from '@angular/core';
import { ShopserviceService } from '../shopservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class CartComponent implements OnInit {

  
public  cartProducts:Cart[]=[];
public math = Math;
public subTotal ;


constructor(private shopService : ShopserviceService){}


  ngOnInit(): void {
    
    this.changeNavLink();
    this.cartProducts = this.shopService.cartProducts;
    this.shopService.cartTotal();
    this.subTotal = this.shopService.subTotal
  }

    //change nav links active class
  private changeNavLink(){
    let navs = document.querySelectorAll(".navs");
    navs.forEach(nav=>nav.classList.remove("active"))
    document.querySelector("#navsCart").classList.add("active")
  }

  public updateCart(product:Cart, value){
      this.shopService.cartProducts.forEach(prod=>{
        if(prod.code===product.code){
          prod.qty=value
        }
      })
      this.cartProducts=this.shopService.cartProducts
      this.shopService.cartTotal()
      this.subTotal=this.shopService.subTotal
     
  }
  public deleteFromCart(product:Cart){
    var newCart = this.shopService.cartProducts.filter(prod=>prod.code!==product.code);
    this.shopService.cartProducts= newCart;
    this.cartProducts= this.shopService.cartProducts
    this.shopService.cartTotal()
    this.subTotal=this.shopService.subTotal

  }
 
}

import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Product } from '../Product';
import { ShopserviceService } from '../shopservice.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  public product: Product;
  public quantity = 1

  constructor(private shopService: ShopserviceService,private main: AppComponent) { }
  

  ngOnInit(): void {
    this.product=this.shopService.myProduct
    if (null == this.product){
      location.replace("/shop");
    }
  }


  public addToCart(qty){  
    
    
     var quantity = Number.parseInt(qty.control.value)
     if (!quantity){
       quantity=1
     }
    var cartProd = {...this.product, qty:quantity }
    if(this.shopService.cartProducts.length>0){
      this.shopService.cartProducts.forEach(product=>{
        if(product.code===cartProd.code){
          product.qty+=cartProd.qty
          return 
        }
      })
      var num = this.shopService.cartProducts.filter(product=>product.code===cartProd.code)
      if(num.length>0){
        return
      }else{
        this.shopService.cartProducts.push(cartProd)
      }
    }else{
      this.shopService.cartProducts.push(cartProd)
    }
    this.main.cartProducts=this.shopService.cartProducts
    this.main.cartNumber=this.main.cartProducts.length
  }

}

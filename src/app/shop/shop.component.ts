import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import {AppComponent} from '../app.component'
import { ShopserviceService } from '../shopservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  public products : Product[]
  public numbers : number[]=[1,3,5,7,8,9]

  constructor(private shopService: ShopserviceService,private main: AppComponent) { }

  ngOnInit(): void {
      this.getProducts()
      this.changeNavLink()  
  }


  //get all products
  private getProducts():void {
    this.shopService.getAllProducts().subscribe(
      (res:Product[])=>{
        this.products = res 
      },
      (err:HttpErrorResponse)=>{
        
        console.log(err)
      }
    )
  }

  //change nav links active class
private changeNavLink(){
  let navs = document.querySelectorAll(".navs");
  navs.forEach(nav=>nav.classList.remove("active"))
  document.querySelector("#navsShop").classList.add("active")
}

//addToCart()
public addToCart(product:Product){
this.shopService.addToCart(product);
console.log(this.shopService.cartProducts)
this.main.cartProducts=this.shopService.cartProducts
this.main.cartNumber=this.main.cartProducts.length
}

}

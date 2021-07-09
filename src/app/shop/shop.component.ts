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
  public categories:String[]=[]
  public brands:String[]=[]

  constructor(private shopService: ShopserviceService,private main: AppComponent) { }

  ngOnInit(): void {
      this.getProducts()
      this.changeNavLink()  
  }


  //get all products
  public getProducts(): void{
    this.shopService.getAllProducts().subscribe(
      (res:Product[])=>{
          this.products = res;
          console.log(this.products);
          this.getProductsCategory();
          this.getProductsBrand()
      },
      (error:HttpErrorResponse)=>{
        console.log(error)
      }
    )
      
  }
  private getProductsCategory () : void {

    
     getp: for(var x=0 ; x<this.products.length ;x++){
      
      var cat = this.categories.filter(category=>category==this.products[x].category)
      if(cat.length==0){
        this.categories.push(this.products[x].category);
      }
      if(this.categories.length==6){
        break getp; 
      }
    }
   
  }

  private getProductsBrand () : void {
    getp: for(var x=0 ; x<this.products.length ;x++){
      
      var brand = this.brands.filter(item=>item==this.products[x].type)
      if(brand.length==0){
        this.brands.push(this.products[x].type);
      }
      if(this.brands.length==6){
        break getp; 
      }
    }
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

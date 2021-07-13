import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart } from './Cart';
import {Product} from './Product'
import {ShopserviceService} from './shopservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myshop';
  public products:Product[]=[]
  public cartProducts:Cart[]
  public cartNumber=0
  public categories:String[]=[]

  constructor(private productService: ShopserviceService){}

  ngOnInit(){
   this.getProducts(function(){})
    
  }

 

  public getProducts(callback): void{
    this.productService.getAllProducts().subscribe(
      (res:Product[])=>{
          this.products = res;
          console.log(this.products);
          this.getProductsCategory()
          callback();
      },
      (error:HttpErrorResponse)=>{
        console.log(error)
      }
    )
      
  }
 

  private getProductsCategory () : void {
  
    this.products.map(product =>{
      var cat = this.categories.filter(category=>category==product.category)
      if(cat.length==0){
        this.categories.push(product.category);
      }
    })
    
  }

  public  filterProductsCategory (category:String){
    var selff = this;
    var myproducts = this.getProducts(function (products:Product[]) {
      var prods =  selff.products.filter(product => product.category.toLowerCase().trim()==category.toLowerCase().trim()    
    )
    selff.products=prods 
  })
  
}
}

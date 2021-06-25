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
  public products:Product[]
  public cartProducts:Cart[]
  public cartNumber=0

  constructor(private productService: ShopserviceService){}

  ngOnInit(){
    this.getProducts();
  }

  public getProducts(): void{
    this.productService.getAllProducts().subscribe(
      (res:Product[])=>{
          this.products = res
          console.log(this.products)
      },
      (error:HttpErrorResponse)=>{
        console.log(error)
      }
    )
      
      
  }
}

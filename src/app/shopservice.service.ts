import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import {Product} from './Product'
import {Cart} from './Cart'
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ShopserviceService {
  private apiServer = 
  
 // 'http://localhost:8082';
  
  'https://centric-shop-backend.herokuapp.com'
  public cartProducts:Cart[]=[]
  public subTotal;
  public myProduct :Product;

  constructor(private http: HttpClient) { }

 


  public getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServer}/api/v1/products/all`);
  }

  public addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.apiServer}/add`, product);
  }

  public updateEmployee(product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiServer}/update`,product);
  }

  public deleteProduct(product:Product):Observable<void>{
    return this.http.delete<void>(`${this.apiServer}/delete`);
  }


  //Add to cart
  public addToCart(product:Product) {
  var cartProduct = {...product,qty:1}
  if(this.cartProducts.length>0){
    this.cartProducts.forEach(product=>{
      if(product.code===cartProduct.code){
        product.qty+=cartProduct.qty
        return 
      }
    })
    var num = this.cartProducts.filter(product=>product.code===cartProduct.code)
    if(num.length>0){
      return
    }else{
      this.cartProducts.push(cartProduct)
    }
  }else{
    this.cartProducts.push(cartProduct)
  }
  }

  public cartTotal(){
    var sum=0
    this.cartProducts.forEach(prod=>{
      sum+=prod.qty*prod.price
    })
    this.subTotal=Math.round(sum*100)/100;
  }

  
  


}

import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ShopserviceService } from '../shopservice.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  public product: Product

  constructor(private shopService: ShopserviceService) { }
  

  ngOnInit(): void {
    this.product=this.shopService.myProduct
  }

  public addToCart(){

  }

}

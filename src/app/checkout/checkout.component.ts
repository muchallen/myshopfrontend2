import { Component, OnInit } from '@angular/core';
import { Cart } from '../Cart';
import { ShopserviceService } from '../shopservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public cartProducts:Cart[];
  public subTotal;
  public math=Math;

  constructor(private shopService: ShopserviceService) { }
  ngOnInit(): void {
    this.changeNavLink();
    this.cartProducts=this.shopService.cartProducts;
    this.subTotal= this.shopService.subTotal;
  }

    //change nav links active class
    private changeNavLink(){
    let navs = document.querySelectorAll(".navs");
    navs.forEach(nav=>nav.classList.remove("active"))
    document.querySelector("#navsCheckout").classList.add("active")
  }
}

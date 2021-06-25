import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeNavLink();
  }

    //change nav links active class
  private changeNavLink(){
    let navs = document.querySelectorAll(".navs");
    navs.forEach(nav=>nav.classList.remove("active"))
    document.querySelector("#navsHome").classList.add("active")
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  constructor() { }

  ngOnInit(): void {
  }
  

}

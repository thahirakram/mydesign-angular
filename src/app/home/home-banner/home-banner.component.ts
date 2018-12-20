import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {
  images = new Array(8).fill(1)
  constructor() {
    
  }
  fun() {
    // this.owlElement.next([200])
    //duration 200ms
  }
  

  ngOnInit() {
    
  }
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardList = [
    {
      src: '/assets/lake-ultra-hd-4k-7f-2880x1800.jpg',
    },
    {
      src: '/assets/Download-desktop-clown-fish-wallpapers-HD.jpg',
    }, 
    {
      src: '/assets/lake-ultra-hd-4k-7f-2880x1800.jpg',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

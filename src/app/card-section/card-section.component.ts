import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnInit {
  @Input() src;
  constructor() { }

  ngOnInit() {
    console.log(this.src);
  }

}

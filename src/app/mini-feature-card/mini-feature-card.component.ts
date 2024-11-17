import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-feature-card',
  templateUrl: './mini-feature-card.component.html',
  styleUrls: ['./mini-feature-card.component.css']
})
export class MiniFeatureCardComponent implements OnInit {

  @Input() img: string = ''; //path to the image
  @Input() title: string = '';
  @Input() info: string = '';
  @Input() action: string = ''; //what to do when the button is clicked

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.css']
})
export class IconCardComponent implements OnInit {
  @Input() source:any;
  @Input() researchText:any;
  constructor() { }

  ngOnInit(): void {
  }

}

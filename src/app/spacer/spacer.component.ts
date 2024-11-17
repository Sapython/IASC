import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.css']
})
export class SpacerComponent implements OnInit {
  @Input() height:any;
  constructor() { }

  ngOnInit(): void {
  }

}

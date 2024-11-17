import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-symposium-div-card',
  templateUrl: './symposium-div-card.component.html',
  styleUrls: ['./symposium-div-card.component.css']
})
export class SymposiumDivCardComponent implements OnInit {

  constructor() { }
  @Input() cardTitle:any;
  @Input() cardBodyhai:any;
  @Input() location:any;
  @Input() manager:any;
  ngOnInit(): void {
  }

}

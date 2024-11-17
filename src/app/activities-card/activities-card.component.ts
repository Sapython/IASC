import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.css']
})
export class ActivitiesCardComponent implements OnInit {
  @Input() title:any;
  @Input() imageSource:any;
  @Input() location:any;
  @Input() excerpt:any;
  @Input() postUrl:any;
  @Input() utcTime:any;
  @Input() normTime:any;
  constructor() { }

  ngOnInit(): void {
  }

}

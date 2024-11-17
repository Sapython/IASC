import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-project-post-card',
  templateUrl: './research-project-post-card.component.html',
  styleUrls: ['./research-project-post-card.component.css']
})
export class ResearchProjectPostCardComponent implements OnInit {
  @Input() imageSource:any;
  constructor() { }

  ngOnInit(): void {
  }

}

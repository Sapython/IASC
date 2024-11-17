import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.css']
})
export class ResearchPageComponent implements OnInit {
  
  established_date: Date = new Date(2001, 10, 14);
  today: Date = new Date();
  years: number = Math.round((this.today.getTime() - this.established_date.getTime()) / 31536000000);
  
  constructor() { }

  ngOnInit(): void {
  }

}

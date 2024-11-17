import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent implements OnInit {
  @Input() authorImage:any;
  @Input() authorName:any;
  @Input() aboutAuthor:any;
  constructor() { }

  ngOnInit(): void {
  }

}

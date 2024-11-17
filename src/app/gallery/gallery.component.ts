import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images=[
    "assets/postData/post (1).jpg",
    "assets/postData/post (2).jpg",
    "assets/postData/post (3).jpg",
    "assets/postData/post (4).jpg",
    "assets/postData/post (5).jpg",
    "assets/postData/post (6).jpg",
    "assets/postData/post (7).jpg",
    "assets/postData/post (8).jpg",
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

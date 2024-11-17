import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  researches=[
    "assets/postData/post (1).jpg",
    "assets/postData/post (2).jpg",
    "assets/postData/post (3).jpg",
    "assets/postData/post (4).jpg",
    "assets/postData/post (5).jpg",
    "assets/postData/post (6).jpg",
    "assets/postData/post (7).jpg",
    "assets/postData/post (8).jpg",
  ];
  researchesType=[
    {
      "image":"assets/Icons/flask.png",
      "text":"Researches"
    },
    {
      "image":"assets/Icons/healthcare.png",
      "text":"Researches"
    },
    {
      "image":"assets/Icons/healthy-food.png",
      "text":"Researches"
    },
    {
      "image":"assets/Icons/plan.png",
      "text":"Researches"
    },
    {
      "image":"assets/Icons/water.png",
      "text":"Researches"
    }
  ]
  activities=[
    {
      "title":"Some random Title",
      "image":"assets/postData/post (1).jpg",
      "location":"Allahabad, UP India",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu.",
      "postUrl":"./post/thisPost",
      "utcTime":"2016-04-01T19:00",
      "normTime":"1 April 2016",
    },
    {
      "title":"Some random Title",
      "image":"assets/postData/post (1).jpg",
      "location":"Allahabad, UP India",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu.",
      "postUrl":"./post/thisPost",
      "utcTime":"2016-04-01T19:00",
      "normTime":"1 April 2016",
    },
    {
      "title":"Some random Title",
      "image":"assets/postData/post (1).jpg",
      "location":"Allahabad, UP India",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu.",
      "postUrl":"./post/thisPost",
      "utcTime":"2016-04-01T19:00",
      "normTime":"1 April 2016",
    },
    {
      "title":"Some random Title",
      "image":"assets/postData/post (1).jpg",
      "location":"Allahabad, UP India",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu.",
      "postUrl":"./post/thisPost",
      "utcTime":"2016-04-01T19:00",
      "normTime":"1 April 2016",
    },
    {
      "title":"Some random Title",
      "image":"assets/postData/post (1).jpg",
      "location":"Allahabad, UP India",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu.",
      "postUrl":"./post/thisPost",
      "utcTime":"2016-04-01T19:00",
      "normTime":"1 April 2016",
    },
    {
      "title":"Some random Title",
      "image":"assets/postData/post (1).jpg",
      "location":"Allahabad, UP India",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu.",
      "postUrl":"./post/thisPost",
      "utcTime":"2016-04-01T19:00",
      "normTime":"1 April 2016",
    },
    {
      "title":"Some random Title",
      "image":"assets/postData/post (1).jpg",
      "location":"Allahabad, UP India",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu.",
      "postUrl":"./post/thisPost",
      "utcTime":"2016-04-01T19:00",
      "normTime":"1 April 2016",
    },
    {
      "title":"Some random Title",
      "image":"assets/postData/post (1).jpg",
      "location":"Allahabad, UP India",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu.",
      "postUrl":"./post/thisPost",
      "utcTime":"2016-04-01T19:00",
      "normTime":"1 April 2016",
    },
    {
      "title":"Some random Title",
      "image":"assets/postData/post (1).jpg",
      "location":"Allahabad, UP India",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu.",
      "postUrl":"./post/thisPost",
      "utcTime":"2016-04-01T19:00",
      "normTime":"1 April 2016",
    },
    {
      "title":"Some random Title",
      "image":"assets/postData/post (1).jpg",
      "location":"Allahabad, UP India",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu.",
      "postUrl":"./post/thisPost",
      "utcTime":"2016-04-01T19:00",
      "normTime":"1 April 2016",
    },
    {
      "title":"Some random Title",
      "image":"assets/postData/post (1).jpg",
      "location":"Allahabad, UP India",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu.",
      "postUrl":"./post/thisPost",
      "utcTime":"2016-04-01T19:00",
      "normTime":"1 April 2016",
    },
    {
      "title":"Some random Title",
      "image":"assets/postData/post (1).jpg",
      "location":"Allahabad, UP India",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu.",
      "postUrl":"./post/thisPost",
      "utcTime":"2016-04-01T19:00",
      "normTime":"1 April 2016",
    },
    
  ]

  ngOnInit(): void {
    if(window.innerWidth<=600){
      document.getElementById('researchType')!.classList.add('uk-flex-column')
    }else{
      document.getElementById('researchType')!.classList.add('uk-flex')
    }
  }

}

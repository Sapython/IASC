import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications = [{message:"New Website Created!", link:"https://www.google.com/"}, {message:"A new research paper has been added.", link:"https://www.google.com/"}, {message:"Graduation Ceromony 2021", link:"https://www.google.com/"}, {message:"Event Announcement", link:"https://www.google.com/"}];

  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

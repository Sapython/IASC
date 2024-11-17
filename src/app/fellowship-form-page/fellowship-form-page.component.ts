import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fellowship-form-page',
  templateUrl: './fellowship-form-page.component.html',
  styleUrls: ['./fellowship-form-page.component.css']
})
export class FellowshipFormPageComponent implements OnInit {
  modal : Boolean = false;

  formSubmit(e : Event) : void {
    e.preventDefault();
    this.modal = true;
  }

  constructor() { }

  ngOnInit(): void {
  }
}

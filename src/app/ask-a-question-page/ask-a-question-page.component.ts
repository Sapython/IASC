import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-a-question-page',
  templateUrl: './ask-a-question-page.component.html',
  styleUrls: ['./ask-a-question-page.component.css']
})
export class AskAQuestionPageComponent implements OnInit {
  questionSubmitted : Boolean = false;
  modal : Boolean = false;

  submitQuestion(e : Event) : void {
    e.preventDefault();
    this.questionSubmitted = true;
  }
  
  formSubmitted(e : Event) : void {
    e.preventDefault();
    this.modal = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

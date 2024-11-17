import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAQuestionPageComponent } from './ask-a-question-page.component';

describe('AskAQuestionPageComponent', () => {
  let component: AskAQuestionPageComponent;
  let fixture: ComponentFixture<AskAQuestionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskAQuestionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskAQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
